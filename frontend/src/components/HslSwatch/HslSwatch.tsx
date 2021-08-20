import React from "react"
import styles from "./HslSwatch.module.css"

type HslSwatchProps = HslSwatchData

const HslSwatch = (props: HslSwatchProps) => {
  const {hue, saturation, luminosity} = props
  const style = {"backgroundColor": `hsl(${hue},${saturation}%,${luminosity}%)`}
  return (
    <div className={styles.HslSwatch} style={style} data-testid="HslSwatch">
    </div>
  )
}

export default HslSwatch
