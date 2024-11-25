import React, { FC } from 'react'
import { ITodo } from '../types/types'

interface PostListProps {
  post: ITodo
}

const PostItem: FC<PostListProps> = ({ post }) => {
  return (
    <div style={{ padding: 15, border: '1px solid green' }}>
      {post.id} {post.title} {post.completed}
    </div>
  )
}

export default PostItem
