import { useEffect, useRef, useState } from 'react'
import { Header } from '../../components/Header'
import { SideBar } from '../../components/SideBar'
import {
  DashboardMainContainer,
  DashboardTemplateContainer,
  DashboardTemplateContent
} from './styles'
import { IDashboardTemplateProps } from './types'

export const DashboardTemplate = ({ children }: IDashboardTemplateProps) => {
  const headerRef = useRef<HTMLHeadElement>(null)
  const [headerHeight, setHeaderHeight] = useState(0)
  useEffect(() => {
    const headerHeight = headerRef.current?.clientHeight

    if (!headerHeight) return

    setHeaderHeight(headerHeight)

    const resizeListener = () => {
      setHeaderHeight(headerHeight)
    }

    window.addEventListener('resize', resizeListener)

    return () => {
      window.removeEventListener('resize', resizeListener)
    }
  }, [])

  return (
    <DashboardTemplateContainer>
      <Header ref={headerRef} />
      <DashboardMainContainer>
        <SideBar />
        <DashboardTemplateContent headerHeight={headerHeight}>
          {children}
        </DashboardTemplateContent>
      </DashboardMainContainer>
    </DashboardTemplateContainer>
  )
}
