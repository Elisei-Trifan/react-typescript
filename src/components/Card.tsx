import React, { FC, ReactNode } from 'react'

export enum CardVariant {
  outlined = 'outlined',
  primary = 'primary',
}

interface CardProps {
  width?: string
  height?: string
  variant?: CardVariant
  children?: ReactNode
}

const Card: FC<CardProps> = ({ width, height, children, variant }) => {
  return (
    <div
      style={{
        width,
        height,
        border: variant === CardVariant.outlined ? '2px solid red' : 'none',
        background: variant === CardVariant.primary ? 'lightgrey' : '',
      }}
    >
      {children}
    </div>
  )
}

export default Card
