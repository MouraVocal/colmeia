import { DashboardTemplate } from '../../templates/DashboardTemplate'
import { Outlet } from 'react-router-dom'

export const Dashboard = () => {
  return (
    <DashboardTemplate>
      <Outlet />
    </DashboardTemplate>
  )
}
