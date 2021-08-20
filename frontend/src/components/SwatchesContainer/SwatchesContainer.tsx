import React, {useEffect, useState} from "react"
import styles from "./SwatchesContainer.module.css"
import Swatches from "../Swatches/Swatches"

type SwatchDataProvider = () => Promise<SwatchData[]>

interface SwatchesContainerProps {
  provider: SwatchDataProvider
}

const SwatchesContainer = (props: SwatchesContainerProps) => {
  const {provider} = props
  const [swatchesData, setSwatchesData] = useState([] as SwatchData[])

  useEffect(() => {
    provider().then(result => setSwatchesData(result))
  }, [provider])

  return (
    <div className={styles.SwatchesContainer} data-testid="SwatchesContainer">
      <div className={styles.SwatchesWrapper}>
        <Swatches swatchesData={swatchesData}/>
      </div>

      <button className={styles.RefreshButton} onClick={async () => setSwatchesData(await provider())}
              data-testid="RefreshButton">
        Refresh
      </button>
    </div>
  )
}

export default SwatchesContainer
