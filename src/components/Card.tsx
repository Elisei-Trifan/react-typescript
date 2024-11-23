/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, ReactNode, useState } from 'react'

export enum CardVariant {
  outlined = 'outlined',
  primary = 'primary',
}

interface CardProps {
  width?: string
  height?: string
  variant?: CardVariant
  buttonClick: (num: number) => void
  children?: ReactNode
}

const Card: FC<CardProps> = ({
  width,
  height,
  variant,
  buttonClick,
  children,
}) => {
  const [state, setState] = useState(0)
  return (
    <div
      onClick={() => buttonClick(state)}
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
