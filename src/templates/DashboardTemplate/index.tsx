import { Header } from '../../components/Header'
import { SideBar } from '../../components/SideBar'
import {
  DashboardMainContainer,
  DashboardTemplateContainer,
  DashboardTemplateContent
} from './styles'
import { IDashboardTemplateProps } from './types'

export const DashboardTemplate = ({ children }: IDashboardTemplateProps) => {
  return (
    <DashboardTemplateContainer>
      <Header />
      <DashboardMainContainer>
        <SideBar />
        <DashboardTemplateContent>{children}</DashboardTemplateContent>
      </DashboardMainContainer>
    </DashboardTemplateContainer>
  )
}
