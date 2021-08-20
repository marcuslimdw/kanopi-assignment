import React from "react"
import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import HslSwatch from "./HslSwatch"

describe("<HslSwatch />", () => {
  it("should render in the colour of the passed prop", () => {
    const props: HslSwatchData = {
      swatch_type: "HSL",
      hue        : 240,
      saturation : 70,
      luminosity : 40
    }

    render(<HslSwatch {...props}/>)

    const swatch = screen.getByTestId("HslSwatch")
    expect(swatch).toHaveStyle({"background-color": "rgb(31, 31, 31)"})
  })
})
