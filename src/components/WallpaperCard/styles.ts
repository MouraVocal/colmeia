import { Download } from 'lucide-react'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.white};
`

export const DownloadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const DownloadButton = styled(Download)`
  fill: ${({ theme }) => theme.colors.white};
  stroke: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`
