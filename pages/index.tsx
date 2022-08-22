import type { NextPage } from 'next'
import { useEffect, useState } from 'react'

const API_KEY = '119e49d12d57ddae8654a32c3061cf64'

// async function getResult() {
//   let result = await fetch(
//     `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
//   )

//   return result
// }

const Home: NextPage = () => {
  let result1: [] = []
  useEffect(() => {
    async function getResult() {
      let result: [] = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json()
      return result
    }
    result1 = getResult()
  }, [])
  console.log('result', result1)

  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

export default Home
