import React, {ReactElement} from "react"
import styles from "./Swatches.module.css"
import RgbSwatch from "../RgbSwatch/RgbSwatch"
import HslSwatch from "../HslSwatch/HslSwatch"

interface SwatchesProps {
  swatchesData: SwatchData[]
}

const Swatches = (props: SwatchesProps) => (
  <div className={styles.Swatches} data-testid="Swatches">
    {props.swatchesData.map((swatchData, index) => resolveSwatchComponent(swatchData, index))}
  </div>
)

const resolveSwatchComponent = (swatchData: SwatchData, index: number): ReactElement => {
  switch (swatchData.swatch_type) {
    case "RGB":
      return <RgbSwatch {...swatchData} key={index}/>
    case "HSL":
      return <HslSwatch {...swatchData} key={index}/>
  }
}

export default Swatches
