import { makeStyles, styled } from '@material-ui/core'
import Logo from './HNRQLogo'
import MediaButtons from './SocialButtons'
import WipMark from './WipMark'
import React from 'react'
import ArrowDown from './ArrowDown'

const Titulo = styled('div')({
  width: 'fit-content',
  backgroundColor: 'pink',
  padding: '0',
  margin: '0 0 20px',
  lineHeight: '1',
  height: '35px',
  marginLeft: 'auto',
  direction: 'ltr',
  fontSize: '3rem',
})

const styleSheet = makeStyles({
  hebraic: {
    position: 'relative',
    left: '10px',
    margin: 0,
    fontSize: '3rem',
  },
})

function MainCard({ className }) {
  const styles = styleSheet()
  return (
    <div className={className}>
      <Titulo>
        <h1 className={styles.hebraic}>סמואל</h1>
      </Titulo>
      <Logo />
      <WipMark />
      <MediaButtons />
      <ArrowDown />
    </div>
  )
}

export default MainCard
