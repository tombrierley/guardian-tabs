export const stripUnits = stringWithUnits => parseInt(stringWithUnits, 10);

export const toRems = pixelFontSize => `${stripUnits(pixelFontSize) / 16}rem`;

export const visuallyHidden = `
  border: 0 !important;
  clip: rect(1px 1px 1px 1px);
  /* IE6, IE7 */
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px !important;
  overflow: hidden;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
`;

export const hideText = `
  text-indent: -9999px;
  white-space: nowrap;
`;

/**
 * Converts a CSS hex color value to RGBA.
 * @param {string} hex - Expanded hexadecimal CSS color value.
 * @param {number} alpha - Alpha as a decimal.
 * @returns {string} RGBA CSS color value.
 */
export function hexToRgba(hex, alpha) {
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
