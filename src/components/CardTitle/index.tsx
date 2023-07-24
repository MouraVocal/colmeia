import { HTMLAttributes } from 'react'
import { Title } from './styles'

export const CardTitle = ({ children }: HTMLAttributes<HTMLHeadingElement>) => {
  return <Title>{children}</Title>
}
