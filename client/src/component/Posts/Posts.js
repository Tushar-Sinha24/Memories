import React from 'react'
import Post from './Post/Post'
import useStyle from './style'

function Posts() {
  const classes=useStyle();
  return (
    <div>
      <h1>Posts</h1>
      <Post/>
    </div>
  )
}

export default Posts
