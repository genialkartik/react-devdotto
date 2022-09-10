import axios from 'axios'
import { useEffect, useState } from 'react'

export const useFetch = (username, numberOfPosts) => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        const { data } = await axios(
          `https://dev.to/api/articles?username=${username}&per_page=${numberOfPosts}`
        )
        console.log(data)

        setPosts(data)
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [username, numberOfPosts])

  return [posts, loading]
}
