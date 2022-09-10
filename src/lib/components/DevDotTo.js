import React from 'react'
import { useFetch } from '../hooks/useFetch'
import './index.css'
import { Loading } from './Loading'
import { Post } from './Post'

export default function DevDotTo({
  username,
  coverimage = true,
  numberOfPosts
}) {
  const [posts, loading] = useFetch(username, numberOfPosts)

  return (
    <div>
      <Loading loading={loading}>
        <div className='devcontainer'>
          {posts.map((item) => (
            <Post
              key={item.id}
              coverimage={coverimage}
              canonical_url={item.canonical_url}
              id={item.id}
              cover_image={item.cover_image}
              description={item.description}
              title={item.title}
              tag_list={item.tag_list}
              positive_reactions_count={item.positive_reactions_count}
              comments_count={item.comments_count}
              readable_publish_date={item.readable_publish_date}
            />
          ))}
        </div>
      </Loading>
    </div>
  )
}
