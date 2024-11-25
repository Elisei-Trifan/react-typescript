import React, { FC } from 'react'
import List from './List'
import { ITodo } from '../types/types'
import PostItem from './PostItem'
import { useState, useEffect } from 'react'
import axios from 'axios'

const PostsPage: FC = () => {
  const [posts, setPosts] = useState<ITodo[]>([])

  useEffect(() => {
    fetchPosts()
  }, [])

  async function fetchPosts() {
    try {
      const response = await axios.get<ITodo[]>(
        'https://jsonplaceholder.typicode.com/posts?_limit=10'
      )
      setPosts(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <List
      items={posts}
      renderItem={(post: ITodo) => <PostItem post={post} key={post.id} />}
    />
  )
}

export default PostsPage
