import React from 'react'
import styled from '@emotion/styled'

const LogoObj = styled.object`
  height: 300px;
  margin: auto;
  display: block;
`

export default function Logo() {
  return <LogoObj type="image/svg+xml" data="/final_logo.min.svg" />
}
