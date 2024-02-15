import { useEffect, useState } from 'react'

export function useCatImage({ fact }) {
  const [image, setImage] = useState()
  useEffect(() => {
    if (!fact) return
    const firstWord = fact.split(' ')[0] //Esto coge la primera palabra del array
    //fact.split(' ')[0].slice(0,3).join(" ") Esto coge las 3 primeras palabras del array
    setImage(
      `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red`
    )
  }, [fact])
  console.log(image)

  return { image }
}
