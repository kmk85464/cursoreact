import React, { use, useEffect, useState } from 'react'

const CAT_ENDPOINT_IMAGE_URL='https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true'
const CAT_ENDPOINT_RANDOM_FACT='https://catfact.ninja/fact'
export default function App() {
  const [fact,setFact]=useState("")
  const[imageUrl,setImageUrl]=useState("")

  //use efect para llamar a la api
  useEffect(()=>{
    fetch(CAT_ENDPOINT_RANDOM_FACT)
    .then(res=>res.json())
    .then(data=>{
      const{fact}=data
      setFact(fact)
      })
  }, [])

//use efect para recuperar la imagen
useEffect(()=>{
  if (!fact) return
  const threeFirstWord= fact.split('',3).join(' ')
      console.log(threeFirstWord)
      fetch(`https://cataas.com/cat/says/${threeFirstWord}?size=50&color=red&json=true`)
      .then(res=>res.json())
      .then(response=>{
        const {url}=response
        setImageUrl(url)
      })
}, [fact])

  return( 
    <main>
      <h1>App de Gatitos</h1>
      {fact&& <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`image extracted using three first word ${fact}`} />}
    </main>
  )
}