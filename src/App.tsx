/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react'
import Card, { CardVariant } from './components/Card'
import UserList from './components/UserList'
import { ITodo, IUser } from './types/types'
import axios from 'axios'
import List from './components/List'
import UserItem from './components/UserItem'
import PostItem from './components/PostItem'
import EventsExample from './components/EventsExample'

const App = () => {
  const [users, setUsers] = useState<IUser[]>([])
  const [posts, setPosts] = useState<ITodo[]>([])

  useEffect(() => {
    fetchUsers()
    fetchPosts()
  }, [])

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>(
        'https://jsonplaceholder.typicode.com/users'
      )
      setUsers(response.data)
    } catch (error) {
      console.log(error)
    }
  }

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
    <div>
      <EventsExample />
      <Card
        buttonClick={(num) => console.log('click', num)}
        width="200px"
        height="220px"
        variant={CardVariant.primary}
      >
        <button>Кнопка</button>
        <p>sduvsdbivi</p>
      </Card>
      <List
        items={users}
        renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
      />
      <List
        items={posts}
        renderItem={(post: ITodo) => <PostItem post={post} key={post.id} />}
      />
    </div>
  )
}

export default App
