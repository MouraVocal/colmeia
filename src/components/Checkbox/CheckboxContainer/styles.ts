import * as Checkbox from '@radix-ui/react-checkbox'
import styled, { keyframes } from 'styled-components'

export const Container = styled(Checkbox.Root)`
  all: unset;
  width: 2.4rem;
  height: 2.4rem;
  background-color: ${({ theme }) => theme.colors.gray400};
  border-radius: 0.4rem;
  line-height: 0;
  cursor: pointer;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;

  &[data-state='checked'] {
    background-color: ${({ theme }) => theme.colors.gray800};
  }

  &:focus-within {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
`

const slideIn = keyframes`
  from {
    transform: translateY(-100%)
  }
  to {
    transform: translateY(0)
  }`

const slideOut = keyframes`
  from {
    transform: translateY(0)
  }
  to {
    transform: translateY(-100%)
  }
`

export const CheckboxIndicator = styled(Checkbox.Indicator)`
  color: ${({ theme }) => theme.colors.primary};
  width: 2.4rem;
  height: 2.4rem;

  &[data-state='checked'] {
    animation: ${slideIn} 200ms ease-out;
  }

  &[data-state='unchecked'] {
    animation: ${slideOut} 200ms ease-out;
  }
`
