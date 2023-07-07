import { LockIcon, MailIcon, SearchIcon, UnlockIcon } from './styles'
import { IIconProps } from './types'

export const InputIcon = ({ icon }: IIconProps) => {
  const icons = {
    mail: <MailIcon />,
    lock: <LockIcon />,
    search: <SearchIcon />,
    unlock: <UnlockIcon />
  }

  return icons[icon]
}
