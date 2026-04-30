import { measureContent, DEFAULT_CONTRAST_THRESHOLD, DEFAULT_DENSITY_AWARE, normalizeSource, DEFAULT_CROP_TO_CONTENT, createNormalizedLogo, DEFAULT_SCALE_FACTOR, DEFAULT_BASE_SIZE, DEFAULT_DENSITY_FACTOR } from "./normalize.js";
function createReusableCanvas(options) {
  let canvas = null, ctx = null, prevW = 0, prevH = 0;
  return (w, h) => (canvas || (canvas = document.createElement("canvas"), ctx = canvas.getContext("2d", options)), ctx ? (prevW !== w || prevH !== h ? (canvas.width = w, canvas.height = h, prevW = w, prevH = h) : ctx.clearRect(0, 0, w, h), ctx) : null);
}
const getCropContext = createReusableCanvas(), getMeasureContext = createReusableCanvas({ willReadFrequently: !0 });
function drawCropped(ctx, img, box) {
  ctx.drawImage(
    img,
    box.x,
    box.y,
    box.width,
    box.height,
    0,
    0,
    box.width,
    box.height
  );
}
function cropToDataUrl(img, contentBox) {
  const ctx = getCropContext(contentBox.width, contentBox.height);
  return ctx ? (drawCropped(ctx, img, contentBox), ctx.canvas.toDataURL("image/png")) : img.src;
}
function cropToBlobUrl(img, contentBox) {
  const canvas = document.createElement("canvas"), ctx = canvas.getContext("2d");
  return ctx ? (canvas.width = contentBox.width, canvas.height = contentBox.height, drawCropped(ctx, img, contentBox), new Promise((resolve) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        resolve(img.src);
        return;
      }
      resolve(URL.createObjectURL(blob));
    });
  })) : Promise.resolve(img.src);
}
function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous", img.onload = () => resolve(img), img.onerror = () => reject(new Error(`Failed to load image: ${src}`)), img.src = src;
  });
}
let _colorCtx = null;
function resolveBackgroundColor(color) {
  if (Array.isArray(color)) return color;
  if (!_colorCtx) {
    const canvas = document.createElement("canvas");
    canvas.width = 1, canvas.height = 1, _colorCtx = canvas.getContext("2d");
  }
  if (!_colorCtx) return [255, 255, 255];
  _colorCtx.fillStyle = color, _colorCtx.fillRect(0, 0, 1, 1);
  const [r, g, b] = _colorCtx.getImageData(0, 0, 1, 1).data;
  return [r, g, b];
}
function measureWithContentDetection(img, contrastThreshold = 10, includeDensity = !1, backgroundColor) {
  const w = img.naturalWidth, h = img.naturalHeight;
  return measureContent(getMeasureContext, img, w, h, {
    contrastThreshold,
    includeDensity,
    backgroundColor
  }) ?? { width: w, height: h };
}
const IDLE_STATE = {
  status: "idle",
  normalizedLogos: [],
  error: null
};
function bgEqual(a, b) {
  return a === b ? !0 : !a || !b ? !1 : a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}
function createLogoSoup() {
  const listeners = /* @__PURE__ */ new Set(), cache = /* @__PURE__ */ new Map();
  let snapshot = IDLE_STATE, cancelCurrent = null, destroyed = !1, prevContrastThreshold = NaN, prevDensityAware = !1, prevResolvedBg;
  function emit() {
    for (const listener of listeners)
      listener();
  }
  function setState(next) {
    snapshot.status === next.status && snapshot.normalizedLogos === next.normalizedLogos && snapshot.error === next.error || (snapshot = next, emit());
  }
  function clearCache() {
    for (const entry of cache.values())
      entry.blobUrl && URL.revokeObjectURL(entry.blobUrl);
    cache.clear();
  }
  function pruneCache(activeSrcs) {
    for (const [src, entry] of cache)
      activeSrcs.has(src) || (entry.blobUrl && URL.revokeObjectURL(entry.blobUrl), cache.delete(src));
  }
  function cancel() {
    cancelCurrent?.(), cancelCurrent = null;
  }
  function process(options) {
    if (destroyed) return;
    cancel();
    const {
      logos,
      baseSize = DEFAULT_BASE_SIZE,
      scaleFactor = DEFAULT_SCALE_FACTOR,
      contrastThreshold = DEFAULT_CONTRAST_THRESHOLD,
      densityAware = DEFAULT_DENSITY_AWARE,
      densityFactor = DEFAULT_DENSITY_FACTOR,
      cropToContent = DEFAULT_CROP_TO_CONTENT,
      backgroundColor: backgroundColorProp
    } = options;
    if (logos.length === 0) {
      setState({ status: "ready", normalizedLogos: [], error: null });
      return;
    }
    const resolvedBg = backgroundColorProp ? resolveBackgroundColor(backgroundColorProp) : void 0;
    (prevContrastThreshold !== contrastThreshold || prevDensityAware !== densityAware || !bgEqual(prevResolvedBg, resolvedBg)) && (clearCache(), prevContrastThreshold = contrastThreshold, prevDensityAware = densityAware, prevResolvedBg = resolvedBg);
    const sources = logos.map(normalizeSource), activeSrcs = new Set(sources.map((s) => s.src));
    pruneCache(activeSrcs);
    const allCached = sources.every((s) => cache.has(s.src)), needsCrop = cropToContent && sources.some((s) => {
      const entry = cache.get(s.src);
      return entry && !entry.blobUrl && entry.measurement.contentBox;
    }), effectiveDensityFactor = densityAware ? densityFactor : 0;
    if (allCached && !needsCrop) {
      const results = sources.map((source) => {
        const entry = cache.get(source.src), normalized = createNormalizedLogo(
          source,
          entry.measurement,
          baseSize,
          scaleFactor,
          effectiveDensityFactor
        );
        return cropToContent && entry.blobUrl && (normalized.croppedSrc = entry.blobUrl), normalized;
      });
      setState({ status: "ready", normalizedLogos: results, error: null });
      return;
    }
    let cancelled = !1;
    cancelCurrent = () => {
      cancelled = !0;
    }, allCached || setState({ status: "loading", normalizedLogos: [], error: null }), Promise.allSettled(
      sources.map(async (source) => {
        let entry = cache.get(source.src);
        if (!entry) {
          const img = await loadImage(source.src);
          if (cancelled) throw new Error("cancelled");
          const measurement = measureWithContentDetection(
            img,
            contrastThreshold,
            densityAware,
            resolvedBg
          );
          entry = { img, measurement }, cache.set(source.src, entry);
        }
        const normalized = createNormalizedLogo(
          source,
          entry.measurement,
          baseSize,
          scaleFactor,
          effectiveDensityFactor
        );
        if (cropToContent && entry.measurement.contentBox && !entry.blobUrl) {
          const url = await cropToBlobUrl(
            entry.img,
            entry.measurement.contentBox
          );
          if (cancelled)
            throw URL.revokeObjectURL(url), new Error("cancelled");
          entry.blobUrl = url;
        }
        return cropToContent && entry.blobUrl && (normalized.croppedSrc = entry.blobUrl), normalized;
      })
    ).then((settled) => {
      if (cancelled || destroyed) return;
      const results = [];
      let firstError;
      for (const r of settled)
        r.status === "fulfilled" ? results.push(r.value) : firstError || (firstError = r.reason instanceof Error ? r.reason : new Error("Failed to load logo"));
      if (results.length === 0 && firstError) {
        setState({ status: "error", normalizedLogos: [], error: firstError });
        return;
      }
      setState({ status: "ready", normalizedLogos: results, error: null });
    });
  }
  function subscribe(listener) {
    return listeners.add(listener), () => {
      listeners.delete(listener);
    };
  }
  function getSnapshot() {
    return snapshot;
  }
  function destroy() {
    destroyed || (destroyed = !0, cancel(), clearCache(), listeners.clear());
  }
  return { process, cancel, subscribe, getSnapshot, destroy };
}
export {
  createLogoSoup,
  cropToDataUrl
};
//# sourceMappingURL=create-logo-soup.js.map
