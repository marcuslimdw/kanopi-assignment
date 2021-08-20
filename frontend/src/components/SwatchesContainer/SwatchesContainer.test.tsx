import React from "react"
import {act, render, screen} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import SwatchesContainer from "./SwatchesContainer"
import fn = jest.fn

// I'm not really sure why this causes warnings. I haven't worked with React in a while, but to my understanding,
// side effects when rendering should be handled by the test framework.
// https://github.com/testing-library/react-testing-library/issues/667 seems relevant? The tests work, though.

describe("<SwatchesContainer />", () => {
  it("should call swatchDataProvider on initialisation", () => {
    const swatchDataProvider = fn(async () => [])
    render(<SwatchesContainer provider={swatchDataProvider}/>)

    expect(swatchDataProvider).toBeCalled()
  })

  it("should call swatchDataProvider when the refresh button is clicked", () => {
    const swatchDataProvider = fn(async () => [])
    render(<SwatchesContainer provider={swatchDataProvider}/>)

    swatchDataProvider.mockReset()
    const refreshButton = screen.getByTestId("RefreshButton")
    act(() => {
      refreshButton.click()
    })
    expect(swatchDataProvider).toBeCalled()
  })
})
