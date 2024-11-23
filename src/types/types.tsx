export interface IAddres {
  street: string
  city: string
  zipcode: string
}

export interface IUser {
  id: number
  name: string
  email: string
  addres: IAddres
}