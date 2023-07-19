import { HTMLAttributes, ReactNode } from 'react'

export interface ISectionButtonProps extends HTMLAttributes<HTMLDivElement> {
  x: number
  y: number
  diameter: number
  children: ReactNode
}
