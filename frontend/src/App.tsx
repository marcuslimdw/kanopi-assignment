import React from "react"
import "./App.css"
import SwatchesContainer from "./components/SwatchesContainer/SwatchesContainer"
import {getSwatchData} from "./providers/SwatchDataProvider"

function App() {
  return (
    <div>
      <SwatchesContainer provider={getSwatchData}/>
    </div>
  )
}

export default App
