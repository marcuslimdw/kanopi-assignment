export const getSwatchData = async (): Promise<SwatchData[]> => {
  const response = await fetch("http://localhost:8000/api/swatch/")
  return await response.json()
}
