import React from 'react'
import styled from 'styled-components'
import { SiGithub, SiLinkedin } from 'react-icons/si'

const Container = styled.footer`
  background-color: #141824;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
`

const Desc = styled.p`
  color: #ffb600;
  font-size: 0.9rem;
`

const LinkBox = styled.div``

const Link = styled.a`
  color: #f1f1f1;
  font-size: 1.25rem;
  transition: all 300ms ease-in;
  &:hover {
    color: #ffb600;
  }
  &:first-child {
    margin-right: 1rem;
  }
`

const Footer = () => {
  return (
    <Container>
      <InfoContainer>
        <Link href='mailto:blaumanis.alberts@gmail.com'>
          blaumanis.alberts@gmail.com
        </Link>
        <LinkBox>
          <Link href='https://github.com/Blaumanis' target='_blank'>
            <SiGithub />
          </Link>
          <Link
            href='https://www.linkedin.com/in/alberts-blaumanis-60635921b/'
            target='_blank'
          >
            <SiLinkedin />
          </Link>
        </LinkBox>
      </InfoContainer>
      <Desc>
        © 2022 Blaumanis. All Rights Reserved.
      </Desc>
    </Container>
  )
}

export default Footer
