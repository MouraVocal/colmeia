import { InputHTMLAttributes } from 'react'
import { StyledInput } from './styles'

export const InputComponent = ({
  ...rest
}: InputHTMLAttributes<HTMLInputElement>) => {
  return <StyledInput {...rest} />
}
