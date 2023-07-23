import styled from 'styled-components'
import { IDashboardTemplateContentProps } from './types'

export const DashboardTemplateContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`

export const DashboardMainContainer = styled.div`
  display: flex;
`

export const DashboardTemplateContent = styled.main<IDashboardTemplateContentProps>`
  display: flex;
  height: ${({ headerHeight }) => `calc(100vh - ${headerHeight}px)`};
  gap: 2rem;
  overflow-y: scroll;
  flex-wrap: wrap;
  align-content: flex-start;
  padding: 0 2.2rem 2rem;
`
