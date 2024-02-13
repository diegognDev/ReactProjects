import { useEffect, useState } from 'react'
import './app.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
//const CAT_ENDPOINT_RANDOM_IMAGE = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`
export function App() {
  const [fact, setFact] = useState()
  const [image, setImage] = useState()
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data
        setFact(fact)

        const firstWord = fact.split(' ')[0] //Esto coge la primera palabra del array
        //fact.split(' ')[0].slice(0,3).join(" ") Esto coge las 3 primeras palabras del array
        setImage(
          `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red`
        )
      })
      .catch((err) => console.log(err))
  }, [])
  return (
    <main>
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
