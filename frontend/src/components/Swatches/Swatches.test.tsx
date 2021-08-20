import React from "react"
import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import Swatches from "./Swatches"

describe("<Swatches />", () => {
  test("should render one Swatch for each SwatchData passed to it", () => {
    const swatchesData: SwatchData[] = [
      {
        swatch_type: "HSL",
        hue        : 240,
        saturation : 70,
        luminosity : 40
      },
      {
        swatch_type: "RGB",
        red        : 20,
        green      : 50,
        blue       : 100
      },
      {
        swatch_type: "HSL",
        hue        : 150,
        saturation : 30,
        luminosity : 75
      }
    ]

    render(<Swatches swatchesData={swatchesData}/>)

    const swatches = screen.getByTestId("Swatches")
    expect(swatches.children).toHaveLength(3)
  })
})
