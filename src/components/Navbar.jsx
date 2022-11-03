import React, { useState } from 'react'
import styled from 'styled-components'
import { BiMenu } from 'react-icons/bi'
import SmallNavbar from './SmallNavbar'

const Container = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  padding: 1.5rem 1rem;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(255, 182, 0, 0.9);
  gap: 3rem;
  z-index: 2;
  animation: fadeIn 1s ease-in;
  @media (max-width: 630px) {
    justify-content: flex-end;
  }
  @media (max-width: 425px) {
    padding: 1.5rem 0;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateX(-100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  svg {
    fill: #fff;
    font-size: 2.5rem;
    cursor: pointer;
    display: none;
    position: relative;
    z-index: 1000;
    margin-right: 1rem;
    @media (max-width: 630px) {
      display: block;
    }
  }
`

const Logo = styled.a`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
`

const LogoImg = styled.img`
  width: 60px;
  object-fit: cover;
`

const Link = styled.a`
  color: #fff;
  font-weight: 500;
  font-size: 1.5rem;
  letter-spacing: 3px;
  position: relative;
  @media (max-width: 630px) {
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

const Navbar = () => {
  const links = ['home', 'skills', 'projects', 'contacts']
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Container>
      {isOpen ? <SmallNavbar links={links} /> : <></>}
        <Logo href='#home'>
          <LogoImg src='./images/logo.png' />
        </Logo>
      <BiMenu onClick={() => setIsOpen(!isOpen)} />
      {links.map((link) => (
        <Link href={`#${link}`}>{link}</Link>
      ))}
    </Container>
  )
}

export default Navbar
