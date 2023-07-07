import { FormEvent, useState } from 'react'
import { Input } from '../Input'
import { Container, StyledSambaLogo, StyledButton } from './styles'
import { Button } from '../Button'

export const LoginForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <Container onSubmit={onSubmit}>
      <StyledSambaLogo />
      <Input.Wrapper>
        <Input.Label htmlFor="email">E-mail</Input.Label>
        <Input.Root>
          <Input.Icon icon="mail" />
          <Input.Component
            type="email"
            id="email"
            placeholder="diego.moura@sambatech.com.br"
            tabIndex={1}
          />
        </Input.Root>
      </Input.Wrapper>

      <Input.Wrapper>
        <Input.Label htmlFor="password">Password</Input.Label>
        <Input.Root>
          <StyledButton
            type="button"
            onClick={togglePasswordVisibility}
            tabIndex={3}
          >
            <Input.Icon icon={isPasswordVisible ? 'unlock' : 'lock'} />
          </StyledButton>
          <Input.Component
            type={isPasswordVisible ? 'text' : 'password'}
            id="password"
            placeholder="********"
            tabIndex={2}
          />
        </Input.Root>
      </Input.Wrapper>

      <Button.Component
        type="submit"
        title="Entrar"
        tabIndex={4}
      ></Button.Component>
    </Container>
  )
}
