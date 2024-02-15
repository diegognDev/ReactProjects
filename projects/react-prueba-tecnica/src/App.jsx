import './app.css'
import { useCatImage } from './hooks/useCatImage.js'
import { useCatFact } from './hooks/useCatFact.js'

//const CAT_ENDPOINT_RANDOM_IMAGE = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`
export function App() {
  const { fact, refreshRandomFact } = useCatFact()
  const { image } = useCatImage({ fact })

  const handleClick = async () => {
    refreshRandomFact()
  }
  return (
    <main>
      <button onClick={handleClick}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {image && (
        <img
          src={image}
          alt={`image extracted using the first word from  ${fact}`}
        />
      )}
    </main>
  )
}
