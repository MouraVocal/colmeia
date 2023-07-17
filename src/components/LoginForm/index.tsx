import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input } from '../Input'
import {
  Container,
  StyledSambaLogo,
  StyledButton,
  StyledTitle,
  StyledLink
} from './styles'
import { Button } from '../Button'
import { Checkbox } from '../Checkbox'

export const LoginForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }

  const navigate = useNavigate()

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigate('/colmeia/home')
  }

  return (
    <Container onSubmit={onSubmit}>
      <StyledSambaLogo />
      <StyledTitle>
        Colmeia
        <br />
        Recebendo e nutrindo nossas abelhas
      </StyledTitle>
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

      <Checkbox.Wrapper>
        <Checkbox.Container id="remember-me" tabIndex={4} />
        <Checkbox.Label htmlFor="remember-me">Lembrar-me</Checkbox.Label>
      </Checkbox.Wrapper>

      <Button.Component type="submit" title="Entrar" tabIndex={5} />

      <StyledLink href="#" tabIndex={6}>
        Esqueceu sua senha?
      </StyledLink>
    </Container>
  )
}
