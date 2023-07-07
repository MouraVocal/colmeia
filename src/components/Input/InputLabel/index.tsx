import { LabelHTMLAttributes } from 'react'
import { Label } from './styles'

export const InputLabel = ({
  ...rest
}: LabelHTMLAttributes<HTMLLabelElement>) => {
  return <Label {...rest} />
}
