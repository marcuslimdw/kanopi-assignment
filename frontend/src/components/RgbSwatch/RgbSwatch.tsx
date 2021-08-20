import React from "react"
import styles from "./RgbSwatch.module.css"

type RgbSwatchProps = RgbSwatchData

const RgbSwatch = (props: RgbSwatchProps) => {
  const {red, green, blue} = props
  const style = {"backgroundColor": `rgb(${red},${green},${blue})`}
  return (
    <div className={styles.RgbSwatch} style={style} data-testid="RgbSwatch">
    </div>
  )
}

export default RgbSwatch
