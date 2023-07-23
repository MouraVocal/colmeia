import { HTMLAttributes } from 'react'
import { CardContainer } from './styles'

export const CardTemplate = ({
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement>) => {
  return <CardContainer {...rest}>{children}</CardContainer>
}
