import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { device } from '../lib/css-utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faTwitter,
  faReddit,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

const ButtonsContainer = styled.div`
  margin: 15px 0 0;
  padding: 20px 0 0;
  @media ${device.laptop} {
    margin-left: 25px;
    padding-left: 25px;
    border-top: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

function MediaButtons() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    window.addEventListener('load', () => {
      setLoaded(document.readyState === 'complete')
    })
  }, [])

  const socialIconClass = css`
    margin: 0 5px;
    visibility: ${loaded ? 'visible' : 'hidden'};
    @media ${device.laptop} {
      margin: 10px auto;
    }
  `
  return (
    <ButtonsContainer hidden={!loaded}>
      <a target="_blank" rel="noreferrer" href="https://github.com/samuelhnrq">
        <FontAwesomeIcon
          icon={faGithub}
          size="2x"
          color="black"
          css={socialIconClass}
        />
      </a>
      <a href="mailto:samosaara@gmail.com">
        <FontAwesomeIcon
          icon={faEnvelope}
          size="2x"
          color="black"
          css={socialIconClass}
        />
      </a>
      <a target="_blank" rel="noreferrer" href="https://reddit.com/u/samosaara">
        <FontAwesomeIcon
          icon={faReddit}
          size="2x"
          color="black"
          css={socialIconClass}
        />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://linkedin.com/in/samosaara"
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          size="2x"
          color="black"
          css={socialIconClass}
        />
      </a>
      <a target="_blank" rel="noreferrer" href="https://twitter.com/samo_saara">
        <FontAwesomeIcon
          icon={faTwitter}
          size="2x"
          color="black"
          css={socialIconClass}
        />
      </a>
    </ButtonsContainer>
  )
}

export default MediaButtons
