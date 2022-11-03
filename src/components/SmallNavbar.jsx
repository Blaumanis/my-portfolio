import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  padding: 1.5rem 1rem;
  width: 100vw;
  height: 110vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgb(255, 182, 0);
  gap: 3rem;
  z-index: 2;
  @media (min-width: 630px) {
    display: none;
  }
`
const Link = styled.a`
  color: #fff;
  font-weight: 500;
  font-size: 1.5rem;
  letter-spacing: 3px;
  position: relative;
  @media (min-width: 630px) {
    display: none;
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 100%;
    height: 3px;
    background-color: #fff;
    opacity: 0;
    transform: translateY(10px);
    transition: all 300ms ease-in;
  }
  &:hover::before {
    transform: translateY(0);
    opacity: 1;
  }
`

const SmallNavbar = ({ links }) => {
  return (
    <Container>
      {links.map((link) => (
        <Link href={`#${link}`}>{link}</Link>
      ))}
    </Container>
  )
}

export default SmallNavbar
