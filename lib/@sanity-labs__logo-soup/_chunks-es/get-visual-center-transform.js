import { DEFAULT_ALIGN_BY } from "./normalize.js";
function getVisualCenterTransform(logo, alignBy = DEFAULT_ALIGN_BY) {
  if (alignBy === "bounds" || !logo.visualCenter)
    return;
  const scaleX = logo.normalizedWidth / (logo.contentBox?.width || logo.originalWidth), scaleY = logo.normalizedHeight / (logo.contentBox?.height || logo.originalHeight), offsetX = alignBy === "visual-center" || alignBy === "visual-center-x" ? -logo.visualCenter.offsetX * scaleX : 0, offsetY = alignBy === "visual-center" || alignBy === "visual-center-y" ? -logo.visualCenter.offsetY * scaleY : 0;
  if (Math.abs(offsetX) > 0.5 || Math.abs(offsetY) > 0.5) {
    const rx = Math.round(offsetX * 10) / 10, ry = Math.round(offsetY * 10) / 10;
    return `translate(${rx}px, ${ry}px)`;
  }
}
export {
  getVisualCenterTransform
};
//# sourceMappingURL=get-visual-center-transform.js.map
