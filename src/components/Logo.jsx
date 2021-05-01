import React from 'react'
import styled from '@emotion/styled'
import LogoSvg from '../../public/final_logo.svg'

const LogoObj = styled(LogoSvg)`
  margin: auto;
  display: block;
  max-width: 60vw;
  height: 50vh;
`

export default function Logo() {
  return <LogoObj preserveAspectRatio="xMidYMid meet" />
}
