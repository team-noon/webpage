import { formatHex, converter } from "culori";
import type { RgbaObject } from "hex-rgb";
import hexRgb from "hex-rgb";


export class Color {
  oklch: [number, number, number];
  rgb: RgbaObject;
  hex: string;

  constructor(l: number, c: number, h: number) {
    this.oklch = [l, c, h];
    const toRgb = converter("rgb");
    const rgbColor = toRgb({ mode: "oklch", l, c, h });

    // jank as fuck to be honest but it is what it is
    this.hex = formatHex(rgbColor);
    this.rgb = hexRgb(this.hex)


    
  }
}

// i just made chatgpt do this, i am the first that will be getting taken away when the robots gain sentience
export default {
  // --- Primary
  primary50: new Color(0.9395, 0.03, 275.18),
  primary100: new Color(0.8647, 0.06, 279.05),
  primary200: new Color(0.7921, 0.1, 278.8),
  primary300: new Color(0.717, 0.14, 277.75),
  primary400: new Color(0.6467, 0.17, 276.05),
  primary500: new Color(0.5774, 0.21, 273.85),
  primary600: new Color(0.5435, 0.21, 273.38),
  primary700: new Color(0.5071, 0.21, 272.98),
  primary800: new Color(0.474, 0.21, 272.5),
  primary900: new Color(0.4382, 0.21, 271.71),
  primary950: new Color(0.4056, 0.21, 270.51),

  // --- Secondary
  secondary50: new Color(0.9016, 0.09, 326.33),
  secondary100: new Color(0.8045, 0.13, 345.87),
  secondary200: new Color(0.7618, 0.15, 347.32),
  secondary300: new Color(0.7233, 0.18, 348.51),
  secondary400: new Color(0.6863, 0.2, 350.12),
  secondary500: new Color(0.6534, 0.22, 351.93),
  secondary600: new Color(0.5991, 0.19, 351.97),
  secondary700: new Color(0.5422, 0.17, 351.74),
  secondary800: new Color(0.4856, 0.15, 351.82),
  secondary900: new Color(0.4261, 0.12, 351.59),
  secondary950: new Color(0.3514, 0.08, 349.39),

  // --- Tertiary
  tertiary50: new Color(0.9125, 0.04, 240.67),
  tertiary100: new Color(0.8676, 0.06, 242.35),
  tertiary200: new Color(0.8216, 0.08, 244.56),
  tertiary300: new Color(0.7789, 0.1, 245.19),
  tertiary400: new Color(0.7354, 0.13, 246.82),
  tertiary500: new Color(0.6962, 0.15, 247.99),
  tertiary600: new Color(0.6473, 0.14, 249.06),
  tertiary700: new Color(0.5952, 0.14, 250.8),
  tertiary800: new Color(0.5441, 0.13, 252.03),
  tertiary900: new Color(0.4899, 0.13, 254.06),
  tertiary950: new Color(0.4368, 0.12, 255.66),

  // --- Success
  success50: new Color(0.9779, 0.03, 166.21),
  success100: new Color(0.9475, 0.07, 158.14),
  success200: new Color(0.9212, 0.1, 155.68),
  success300: new Color(0.8955, 0.14, 153.46),
  success400: new Color(0.8747, 0.17, 151.93),
  success500: new Color(0.8547, 0.2, 150.16),
  success600: new Color(0.7841, 0.19, 149.03),
  success700: new Color(0.712, 0.19, 147.9),
  success800: new Color(0.636, 0.18, 146.46),
  success900: new Color(0.5613, 0.17, 145.13),
  success950: new Color(0.4851, 0.16, 143.88),

  // --- Warning
  warning50: new Color(0.9717, 0.06, 98.57),
  warning100: new Color(0.9612, 0.08, 99.22),
  warning200: new Color(0.9511, 0.1, 99.72),
  warning300: new Color(0.939, 0.12, 99.83),
  warning400: new Color(0.93, 0.14, 99.97),
  warning500: new Color(0.9218, 0.16, 99.86),
  warning600: new Color(0.8561, 0.15, 99.44),
  warning700: new Color(0.7894, 0.15, 98.85),
  warning800: new Color(0.7212, 0.14, 98.13),
  warning900: new Color(0.6517, 0.13, 97.06),
  warning950: new Color(0.5806, 0.12, 95.53),

  // --- Error
  error50: new Color(0.9063, 0.05, 32.16),
  error100: new Color(0.8427, 0.08, 25.62),
  error200: new Color(0.7811, 0.11, 22.63),
  error300: new Color(0.7243, 0.15, 22.36),
  error400: new Color(0.6738, 0.18, 22.87),
  error500: new Color(0.6318, 0.21, 24.57),
  error600: new Color(0.5883, 0.2, 25.07),
  error700: new Color(0.5443, 0.19, 25.32),
  error800: new Color(0.4995, 0.17, 25.95),
  error900: new Color(0.454, 0.16, 26.34),
  error950: new Color(0.4077, 0.15, 27.15),

  // --- Surface
  surface50: new Color(0.984, 0.005, 275),
  surface100: new Color(0.88, 0.01, 275),
  surface200: new Color(0.78, 0.01, 275),
  surface300: new Color(0.68, 0.01, 275),
  surface400: new Color(0.58, 0.01, 275),
  surface500: new Color(0.48, 0.01, 275),
  surface600: new Color(0.4, 0.01, 275),
  surface700: new Color(0.32, 0.01, 275),
  surface800: new Color(0.24, 0.01, 275),
  surface900: new Color(0.16, 0.01, 275),
  surface950: new Color(0.08, 0.01, 275),
};