import { styled } from '@material-ui/core/styles'
import React from 'react'
import Image from 'next/image'

const LogoObj = styled('div')({
  margin: 'auto',
  maxWidth: '60vw',
  position: 'relative',
  height: '50vh',
})

export default function Logo() {
  return (
    <LogoObj>
      <Image src="/final_logo.svg" layout="fill" />
    </LogoObj>
  )
}
