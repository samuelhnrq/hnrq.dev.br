import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faTwitter,
  faReddit,
  faSteam,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

const ButtonsContainer = styled.div`
  margin: 15px 0 0 -50px;
  display: block;
  padding: 20px 0 0;
  a {
    margin: 10px 7px;
  }
`

const socialMediaButtons = [
  { icon: faEnvelope, link: 'mailto:samosaara@gmail.com' },
  { icon: faGithub, link: 'https://github.com/samuelhnrq' },
  { icon: faLinkedin, link: 'https://linkedin.com/in/samosaara' },
  { icon: faTwitter, link: 'https://twitter.com/samo_saara' },
  { icon: faReddit, link: 'https://reddit.com/u/samosaara' },
  { icon: faSteam, link: 'https://steamcommunity.com/id/samosaara' },
]

function MediaButtons() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    function refreshLoaded() {
      setLoaded(document.readyState === 'complete')
    }
    refreshLoaded()
    window.addEventListener('load', refreshLoaded, { once: true })
  }, [])
  return (
    <ButtonsContainer hidden={!loaded}>
      {socialMediaButtons.map((socialMedia) => (
        <a
          key={socialMedia.link}
          target="_blank"
          rel="noreferrer"
          href={socialMedia.link}
        >
          <FontAwesomeIcon icon={socialMedia.icon} size="2x" color="black" />
        </a>
      ))}
    </ButtonsContainer>
  )
}

export default MediaButtons
