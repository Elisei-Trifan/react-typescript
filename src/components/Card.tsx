import React, { ReactNode } from 'react'

interface CardProps {
  width?: string
  height?: string
  children?: ReactNode
}

const Card = ({ width, height, children }: CardProps) => {
  return (
    <div style={{ width, height, border: '2px solid red' }}>{children}</div>
  )
}

export default Card
