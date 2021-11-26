import { css } from '@emotion/react'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faTwitter,
  faReddit,
  faSteam,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { Typography } from '@mui/material'

const ButtonsContainer = css`
  padding: 20px 0 0;
  display: flex;
  flex-wrap: nowrap;
  & > a {
    margin: 10px 7px;
    line-height: 1;
  }
`

const socialMediaButtons = [
  {
    icon: faGithub,
    link: 'https://github.com/samuelhnrq',
    label: 'Link para Github',
  },
  {
    icon: faLinkedin,
    link: 'https://linkedin.com/in/samosaara',
    label: 'Link para LinkedIn',
  },
  {
    icon: faTwitter,
    link: 'https://twitter.com/samo_saara',
    label: 'Link para Twitter',
  },
  {
    icon: faReddit,
    link: 'https://reddit.com/u/samosaara',
    label: 'Link para Reddit',
  },
  {
    icon: faSteam,
    link: 'https://steamcommunity.com/id/samosaara',
    label: 'Link para Steam',
  },
]

function MediaButtons() {
  return (
    <Typography
      variant="h4"
      css={ButtonsContainer}
      component="h2"
      aria-label="Lista de links sociais"
    >
      {socialMediaButtons.map((socialMedia) => (
        <a
          key={socialMedia.link}
          target="_blank"
          rel="noreferrer"
          aria-label={socialMedia.label}
          href={socialMedia.link}
        >
          <FontAwesomeIcon icon={socialMedia.icon} color="black" />
        </a>
      ))}
    </Typography>
  )
}

export default MediaButtons
