import React, { FC } from 'react'
import { IUser } from '../types/types'

interface IUserItemProps {
  user: IUser
}

const UserItem: FC<IUserItemProps> = ({ user }) => {
  return (
    <div style={{ padding: 15, border: '1px solid red' }}>
      {user.id} {user.name} проживает в городе {user.addres.city}, на улице
      {user.addres.street}
    </div>
  )
}

export default UserItem