interface RgbSwatchData {
  swatch_type: "RGB"
  red: number
  green: number
  blue: number
}

interface HslSwatchData {
  swatch_type: "HSL"
  hue: number
  saturation: number
  luminosity: number
}

type SwatchData = RgbSwatchData | HslSwatchData
