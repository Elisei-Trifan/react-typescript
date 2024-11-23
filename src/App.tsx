/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react'
import Card, { CardVariant } from './components/Card'
import UserList from './components/UserList'
import { IUser } from './types/types'
import axios from 'axios'

const App = () => {
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    fetchUsers()
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

  return (
    <div>
      <Card
        buttonClick={(num) => console.log('click', num)}
        width="200px"
        height="220px"
        variant={CardVariant.primary}
      >
        <button>Кнопка</button>
        <p>sduvsdbivi</p>
      </Card>
      <UserList users={users} />
    </div>
  )
}

export default App

// const users: IUser[] = [
//   {
//     id: 1,
//     name: 'Elisei',
//     email: 'avadfasf',
//     addres: { city: 'Bendery', street: 'Lenina', zipcode: '3200' },
//   },
//   {
//     id: 2,
//     name: 'Alina',
//     email: 'avadfasf',
//     addres: { city: 'Bendery', street: 'Lenina', zipcode: '3200' },
//   },
// ]
