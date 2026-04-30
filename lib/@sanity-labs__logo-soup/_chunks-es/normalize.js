const DEFAULT_ALIGN_BY = "visual-center-y", DEFAULT_GAP = 28, DEFAULT_BASE_SIZE = 48, DEFAULT_SCALE_FACTOR = 0.5, DEFAULT_CONTRAST_THRESHOLD = 10, DEFAULT_DENSITY_AWARE = !0, DEFAULT_DENSITY_FACTOR = 0.5, DEFAULT_CROP_TO_CONTENT = !1;
function measureContent(getContext, image, width, height, options = {}) {
  const {
    contrastThreshold = 10,
    includeDensity = !1,
    backgroundColor
  } = options, { sw, sh } = downsampleDimensions(width, height), ctx = getContext(sw, sh);
  if (!ctx) return null;
  ctx.drawImage(image, 0, 0, sw, sh);
  const imageData = ctx.getImageData(0, 0, sw, sh), data32 = new Uint32Array(imageData.data.buffer);
  return scanPixels({
    width,
    height,
    data32,
    sw,
    sh,
    contrastThreshold,
    includeDensity,
    backgroundColor
  });
}
const SHIFT = 5, LEVELS = 1 << 8 - SHIFT, BUCKET_COUNT = LEVELS * LEVELS * LEVELS, _bucketCounts = new Uint16Array(BUCKET_COUNT), _bucketR = new Uint32Array(BUCKET_COUNT), _bucketG = new Uint32Array(BUCKET_COUNT), _bucketB = new Uint32Array(BUCKET_COUNT);
function analyzePerimeter(data32, sw, sh) {
  _bucketCounts.fill(0), _bucketR.fill(0), _bucketG.fill(0), _bucketB.fill(0);
  let opaqueCount = 0, transparentCount = 0;
  const lastRow = (sh - 1) * sw, lastCol = sw - 1;
  for (let x = 0; x < sw; x++)
    samplePixel(data32[x]), sh > 1 && samplePixel(data32[lastRow + x]);
  for (let y = 1; y < sh - 1; y++) {
    const row = y * sw;
    samplePixel(data32[row]), sw > 1 && samplePixel(data32[row + lastCol]);
  }
  function samplePixel(pixel) {
    if (pixel >>> 24 < 128) {
      transparentCount++;
      return;
    }
    opaqueCount++;
    const r = pixel & 255, g = pixel >>> 8 & 255, b = pixel >>> 16 & 255, key = ((r >>> SHIFT) * LEVELS + (g >>> SHIFT)) * LEVELS + (b >>> SHIFT);
    _bucketCounts[key]++, _bucketR[key] += r, _bucketG[key] += g, _bucketB[key] += b;
  }
  const totalPerimeter = opaqueCount + transparentCount, transparent = totalPerimeter > 0 && transparentCount > totalPerimeter * 0.1;
  let bestCount = 0, bestIdx = 0;
  for (let i = 0; i < BUCKET_COUNT; i++)
    _bucketCounts[i] > bestCount && (bestCount = _bucketCounts[i], bestIdx = i);
  const bgR = bestCount ? Math.round(_bucketR[bestIdx] / bestCount) : 255, bgG = bestCount ? Math.round(_bucketG[bestIdx] / bestCount) : 255, bgB = bestCount ? Math.round(_bucketB[bestIdx] / bestCount) : 255;
  return { transparent, bgR, bgG, bgB };
}
function scanPixels(options) {
  const {
    width: w,
    height: h,
    data32,
    sw,
    sh,
    contrastThreshold,
    includeDensity,
    backgroundColor
  } = options, scaleX = w / sw, scaleY = h / sh, contrastDistanceSq = contrastThreshold * contrastThreshold * 3;
  let bgR, bgG, bgB, alphaOnly;
  if (backgroundColor)
    bgR = backgroundColor[0], bgG = backgroundColor[1], bgB = backgroundColor[2], alphaOnly = !1;
  else {
    const perimeter = analyzePerimeter(data32, sw, sh);
    perimeter.transparent ? (alphaOnly = !0, bgR = 0, bgG = 0, bgB = 0) : (alphaOnly = !1, bgR = perimeter.bgR, bgG = perimeter.bgG, bgB = perimeter.bgB);
  }
  let minX = sw, minY = sh, maxX = 0, maxY = 0, totalWeight = 0, weightedX = 0, weightedY = 0, filledPixels = 0, totalWeightedOpacity = 0;
  const pixelCount = sw * sh;
  for (let i = 0; i < pixelCount; i++) {
    const pixel = data32[i], a = pixel >>> 24;
    if (a <= contrastThreshold) continue;
    let weight, opacity;
    if (alphaOnly)
      weight = a * a, opacity = a;
    else {
      const r = pixel & 255, g = pixel >>> 8 & 255, b = pixel >>> 16 & 255, dr = r - bgR, dg = g - bgG, db = b - bgB, distSq = dr * dr + dg * dg + db * db;
      if (distSq < contrastDistanceSq) continue;
      weight = distSq * a, opacity = Math.min(a, Math.sqrt(distSq));
    }
    const x = i % sw, y = (i - x) / sw;
    x < minX && (minX = x), x > maxX && (maxX = x), y < minY && (minY = y), y > maxY && (maxY = y), totalWeight += weight, weightedX += (x + 0.5) * weight, weightedY += (y + 0.5) * weight, filledPixels++, totalWeightedOpacity += opacity;
  }
  if (minX > maxX || minY > maxY)
    return {
      width: w,
      height: h,
      contentBox: { x: 0, y: 0, width: w, height: h },
      visualCenter: { x: w / 2, y: h / 2, offsetX: 0, offsetY: 0 },
      pixelDensity: includeDensity ? 0.5 : void 0
    };
  const cbX = Math.floor(minX * scaleX), cbY = Math.floor(minY * scaleY), contentBox = {
    x: cbX,
    y: cbY,
    width: Math.min(Math.ceil((maxX + 1) * scaleX), w) - cbX,
    height: Math.min(Math.ceil((maxY + 1) * scaleY), h) - cbY
  };
  let visualCenter;
  if (totalWeight === 0) {
    const centerX = contentBox.x + contentBox.width / 2, centerY = contentBox.y + contentBox.height / 2;
    visualCenter = { x: centerX, y: centerY, offsetX: 0, offsetY: 0 };
  } else {
    const globalCenterX = weightedX / totalWeight * scaleX, globalCenterY = weightedY / totalWeight * scaleY, localCenterX = globalCenterX - contentBox.x, localCenterY = globalCenterY - contentBox.y;
    visualCenter = {
      x: globalCenterX,
      y: globalCenterY,
      offsetX: localCenterX - contentBox.width / 2,
      offsetY: localCenterY - contentBox.height / 2
    };
  }
  const result = {
    width: w,
    height: h,
    contentBox,
    visualCenter
  };
  if (alphaOnly || (result.backgroundLuminance = (bgR * 299 + bgG * 587 + bgB * 114) / 255e3), includeDensity) {
    const scanArea = (maxX - minX + 1) * (maxY - minY + 1);
    if (scanArea === 0)
      result.pixelDensity = 0.5;
    else {
      const coverageRatio = filledPixels / scanArea, averageOpacity = filledPixels > 0 ? totalWeightedOpacity / 255 / filledPixels : 0;
      result.pixelDensity = coverageRatio * averageOpacity;
    }
  }
  return result;
}
const PIXEL_BUDGET = 2048;
function downsampleDimensions(w, h) {
  const totalPixels = w * h, ratio = totalPixels > PIXEL_BUDGET ? Math.sqrt(PIXEL_BUDGET / totalPixels) : 1;
  return {
    sw: Math.max(1, Math.round(w * ratio)),
    sh: Math.max(1, Math.round(h * ratio))
  };
}
function logosEqual(a, b) {
  if (a.length !== b.length) return !1;
  for (let i = 0; i < a.length; i++) {
    const itemA = a[i], itemB = b[i];
    if (itemA === void 0 || itemB === void 0) return !1;
    const srcA = typeof itemA == "string" ? itemA : itemA.src, srcB = typeof itemB == "string" ? itemB : itemB.src;
    if (srcA !== srcB) return !1;
  }
  return !0;
}
function normalizeSource(source) {
  return typeof source == "string" ? { src: source, alt: "" } : source;
}
function calculateNormalizedDimensions(measurement, baseSize, scaleFactor, densityFactor = 0) {
  const contentWidth = measurement.contentBox ? measurement.contentBox.width : measurement.width, contentHeight = measurement.contentBox ? measurement.contentBox.height : measurement.height;
  if (contentWidth === 0 || contentHeight === 0)
    return { width: baseSize, height: baseSize };
  const aspectRatio = contentWidth / contentHeight;
  let normalizedWidth = aspectRatio ** scaleFactor * baseSize, normalizedHeight = normalizedWidth / aspectRatio;
  if (measurement.backgroundLuminance !== void 0) {
    const darkness = 1 - measurement.backgroundLuminance, density = measurement.pixelDensity ?? 0.5, irradiationScale = 1 - darkness * density * 0.08;
    normalizedWidth *= irradiationScale, normalizedHeight *= irradiationScale;
  }
  if (densityFactor > 0 && measurement.pixelDensity !== void 0) {
    const densityScale = (1 / (measurement.pixelDensity / 0.35)) ** (densityFactor * 0.5), clampedScale = Math.max(0.5, Math.min(2, densityScale));
    normalizedWidth *= clampedScale, normalizedHeight *= clampedScale;
  }
  return {
    width: Math.round(normalizedWidth),
    height: Math.round(normalizedHeight)
  };
}
function createNormalizedLogo(source, measurement, baseSize, scaleFactor, densityFactor = 0) {
  const { width, height } = calculateNormalizedDimensions(
    measurement,
    baseSize,
    scaleFactor,
    densityFactor
  ), contentWidth = measurement.contentBox ? measurement.contentBox.width : measurement.width, contentHeight = measurement.contentBox ? measurement.contentBox.height : measurement.height;
  return {
    src: source.src,
    alt: source.alt || "",
    originalWidth: measurement.width,
    originalHeight: measurement.height,
    contentBox: measurement.contentBox,
    normalizedWidth: width,
    normalizedHeight: height,
    aspectRatio: contentHeight > 0 ? contentWidth / contentHeight : 1,
    pixelDensity: measurement.pixelDensity,
    visualCenter: measurement.visualCenter
  };
}
export {
  DEFAULT_ALIGN_BY,
  DEFAULT_BASE_SIZE,
  DEFAULT_CONTRAST_THRESHOLD,
  DEFAULT_CROP_TO_CONTENT,
  DEFAULT_DENSITY_AWARE,
  DEFAULT_DENSITY_FACTOR,
  DEFAULT_GAP,
  DEFAULT_SCALE_FACTOR,
  calculateNormalizedDimensions,
  createNormalizedLogo,
  logosEqual,
  measureContent,
  normalizeSource
};
//# sourceMappingURL=normalize.js.map
