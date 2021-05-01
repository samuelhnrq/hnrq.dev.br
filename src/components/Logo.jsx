import { styled } from '@material-ui/core'
import React from 'react'
import LogoSvg from '../../public/final_logo.svg'

const LogoObj = styled(LogoSvg)({
  margin: 'auto',
  display: 'block',
  maxWidth: '60vw',
  height: '50vh',
})

export default function Logo() {
  return <LogoObj preserveAspectRatio="xMidYMid meet" />
}
