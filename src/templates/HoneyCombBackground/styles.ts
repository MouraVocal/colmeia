import styled from 'styled-components'
import HoneyCombSvg from '../../assets/honeycomb.svg'

export const Container = styled.div`
  background: #2b2b2b;
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
  background: #232323;
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
  background: radial-gradient(circle, #7623bd 30%, #7623bd 0%);
  z-index: 0;
`

export const Content = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
`
