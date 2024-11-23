import React, { FC } from 'react'
import { IUser } from '../types/types'

interface UserListProps {
  users: IUser[]
}

const UserList: FC<UserListProps> = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <div key={user.id} style={{ padding: '15', border: '1px solid red' }}>
          {user.id} {user.name} проживает в городе {user.addres.city}, на улице
          {user.addres.street}
        </div>
      ))}
    </div>
  )
}

export default UserList
