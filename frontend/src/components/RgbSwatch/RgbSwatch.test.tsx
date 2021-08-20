import React from "react"
import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import RgbSwatch from "./RgbSwatch"

describe("<RgbSwatch />", () => {
  it("should render in the colour of the passed prop", () => {
    const props: RgbSwatchData = {
      swatch_type: "RGB",
      red        : 20,
      green      : 50,
      blue       : 100
    }

    render(<RgbSwatch {...props}/>)

    const swatch = screen.getByTestId("RgbSwatch")
    expect(swatch).toHaveStyle({"background-color": "rgb(20,50,100)"})
  })
})
