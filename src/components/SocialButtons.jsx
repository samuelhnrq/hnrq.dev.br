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

const socialIconClass = css`
  margin: 0 5px;
  @media ${device.laptopL} {
    margin: 10px auto;
  }
`

const ButtonsContainer = styled.div`
  margin: 15px 0 0;
  padding: 20px 0 0;
  @media ${device.laptopL} {
    margin-left: 25px;
    padding-left: 25px;
    border-top: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

function MediaButtons() {
  const [loading, setLoading] = useState(false)
  useEffect(() => setLoading(false), [])

  return (
    <ButtonsContainer hidden={loading}>
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
