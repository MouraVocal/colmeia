import styled from 'styled-components'
import HoneyCombSvg from '../../assets/honeycomb-background.svg'

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  overflow: hidden;
`

export const HexGrid = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${({ theme }) => theme.colors.background};
`

export const Grid = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: url(${HoneyCombSvg}) repeat;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-size: 400px;
`

export const Light = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  filter: blur(15px);
  background: ${({ theme }) => theme.colors.secondary};
  z-index: 0;
`

export const Content = styled.div`
  position: relative;
  z-index: 2;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
