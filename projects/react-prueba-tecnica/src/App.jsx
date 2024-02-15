import { useEffect, useState } from 'react'
import './app.css'
import { getRandomFact } from './services/facts'

//const CAT_ENDPOINT_RANDOM_IMAGE = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`
export function App() {
  const [fact, setFact] = useState()
  const [image, setImage] = useState()
  useEffect(() => {
    getRandomFact().then(setFact)
  }, [])

  useEffect(() => {
    if (!fact) return
    const firstWord = fact.split(' ')[0] //Esto coge la primera palabra del array
    //fact.split(' ')[0].slice(0,3).join(" ") Esto coge las 3 primeras palabras del array
    setImage(
      `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red`
    )
  }, [fact])

  const handleClick = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
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
