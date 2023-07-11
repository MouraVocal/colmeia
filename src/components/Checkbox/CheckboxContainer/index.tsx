import { Check } from 'lucide-react'
import { CheckboxIndicator, Container } from './styles'
import { CheckboxContainerProps } from './types'

export const CheckboxContainer = (props: CheckboxContainerProps) => {
  return (
    <Container {...props}>
      <CheckboxIndicator>
        <Check />
      </CheckboxIndicator>
    </Container>
  )
}
