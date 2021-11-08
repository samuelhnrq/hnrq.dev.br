import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faTwitter,
  faReddit,
  faSteam,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { styled } from '@mui/material/styles'
import { Typography } from '@mui/material'

const ButtonsContainer = styled(Typography)({
  padding: '20px 0 0',
  '& > a': {
    margin: '10px 7px',
    lineHeight: 1,
  },
})

const socialMediaButtons = [
  { icon: faGithub, link: 'https://github.com/samuelhnrq' },
  { icon: faLinkedin, link: 'https://linkedin.com/in/samosaara' },
  { icon: faTwitter, link: 'https://twitter.com/samo_saara' },
  { icon: faReddit, link: 'https://reddit.com/u/samosaara' },
  { icon: faSteam, link: 'https://steamcommunity.com/id/samosaara' },
]

function MediaButtons() {
  return (
    <ButtonsContainer variant="h4">
      {socialMediaButtons.map((socialMedia) => (
        <a
          key={socialMedia.link}
          target="_blank"
          rel="noreferrer"
          href={socialMedia.link}
        >
          <FontAwesomeIcon icon={socialMedia.icon} color="black" />
        </a>
      ))}
    </ButtonsContainer>
  )
}

export default MediaButtons
