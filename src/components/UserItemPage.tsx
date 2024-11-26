/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios'
import React, { FC, useEffect } from 'react'
import { useState } from 'react'
import { IUser } from '../types/types'
import { useParams, useNavigate } from 'react-router-dom'

interface UserItemPageParams {
  id?: number
}

const UserItemPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null)
  const params = useParams() as UserItemPageParams
  const navigate = useNavigate()

  useEffect(() => {
    fetchUser()
  }, [])

  async function fetchUser() {
    try {
      const response = await axios.get<IUser>(
        'https://jsonplaceholder.typicode.com/users/' + params.id
      )
      setUser(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <button onClick={() => navigate('/posts')}>Back</button>
      <button onClick={() => navigate('/users')}>Back2</button>
      <h1>Страница пользователя {user?.name} </h1>
      <div> {user?.email} </div>
      <div>
        {user?.address.city} {user?.address.street} {user?.address.zipcode}
      </div>
    </div>
  )
}

export default UserItemPage
