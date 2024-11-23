import React from 'react'
import Card, { CardVariant } from './components/Card'
import UserList from './components/UserList'
import { IUser } from './types/types'

const App = () => {
  const users: IUser[] = [
    {
      id: 1,
      name: 'Elisei',
      email: 'avadfasf',
      addres: { city: 'Bendery', street: 'Lenina', zipcode: '3200' },
    },
    {
      id: 2,
      name: 'Alina',
      email: 'avadfasf',
      addres: { city: 'Bendery', street: 'Lenina', zipcode: '3200' },
    },
  ]
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
