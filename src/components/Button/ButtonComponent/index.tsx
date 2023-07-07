import { ButtonHTMLAttributes } from 'react'
import { StyledButton } from './styles'

export const ButtonComponent = ({
  children,
  title,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <StyledButton {...rest}>
      <span
        style={{
          display: 'inline-block',
          width: '100%',
          textAlign: 'center'
        }}
      >
        {title}
      </span>
      {children}
    </StyledButton>
  )
}
