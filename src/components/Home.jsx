import React from 'react'
import styled from 'styled-components'
import { HomeIcon } from '../assets/ilustrations'

const Container = styled.main`
  min-height: 100vh;
  width: 100%;
  padding: 1.5rem 1rem;
  background-color: #141824;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3rem;
  @media (max-width: 630px) {
    gap: 0;
    padding-top: 3rem;
  }
  @media (max-width: 425px) {
    padding: 3rem 0.5rem;
  }
`

const TitleContainer = styled.section`
  position: relative;
  svg {
    width: 800px;
    height: 400px;
    @media (max-width: 900px) {
      width: 600px;
    }
    @media (max-width: 630px) {
      width: 100%;
      min-width: 300px;
    }
  }
`

const Title = styled.h1`
  color: #f1f1f1;
  font-size: 3rem;
  line-height: 1;
  letter-spacing: 1.5px;
  font-weight: normal;
  position: absolute;
  bottom: 0px;
  left: 250px;
  @media (max-width: 900px) {
    font-size: 2.5rem;
    bottom: 33px;
    left: 174px;
  }
  @media (max-width: 630px) {
    top: -40px;
    left: 0;
    br {
      display: none;
    }
  }
  @media (max-width: 425px) {
    font-size: 2rem;
    top: -20px;
    left: 10px;
  }
`

const Name = styled.span`
  color: #ffb600;
`

const CTA = styled.a`
  padding: 1rem 1.7rem;
  background-color: #ffb600;
  color: #141824;
  font-size: 1.5rem;
  position: relative;
  z-index: 0;
  overflow: hidden;
  transition: all 300ms ease-in;
  &:hover {
    outline: 3px solid #ffb600;
    color: #ffb600;
  }
  &::before {
    content: '';
    background-color: #141824;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    -webkit-transform: translate(-100%) rotate(10deg);
    transform: translate(-100%) rotate(10deg);
    -webkit-transform-origin: top left;
    transform-origin: top left;
    width: 100%;
    will-change: transform;
    z-index: -1;
    transition: all 300ms ease-in;
  }
  &:hover::before {
    transform: translate(0);
  }
  @media (max-width: 630px) {
    font-size: 1.25rem;
  }
`

const Home = () => {
  return (
    <>
      <Container id='home'>
        <TitleContainer>
          <HomeIcon />
          <Title>
            Hi <br></br> I'm <Name>Alberts</Name>, <br></br> frontend developer
          </Title>
        </TitleContainer>
        <CTA href='#contacts'>My Projects</CTA>
      </Container>
    </>
  )
}

export default Home
