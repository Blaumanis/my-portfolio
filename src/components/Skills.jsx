import React from 'react'
import styled from 'styled-components'
import {
  SiGraphql,
  SiVisualstudiocode,
  SiMysql,
  SiMongodb,
  SiNetlify,
  SiWordpress,
  SiHtml5,
  SiCss3,
  SiReact,
  SiJavascript,
  SiSass,
  SiTailwindcss,
  SiStyledcomponents,
  SiRedux,
  SiNpm,
  SiFigma,
  SiInkscape,
  SiGimp,
  SiHeroku,
  SiVercel,
  SiExpress,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiSvelte
} from 'react-icons/si'
import { SkillsIcon } from '../assets/ilustrations'

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  padding: 1.5rem 1rem;
  background-color: #f1f1f1;
  min-height: 100vh;
  @media (max-width: 425px) {
    padding: 1.5 0.5rem;
  }
`

const TitleWrapper = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 630px) {
    flex-direction: column-reverse;
  }

  svg {
    width: 400px;
    height: 400px;
    min-width: 320px;
    @media (max-width: 630px) {
      width: 350px;
      height: 350px;
    }
    @media (max-width: 425px) {
      width: 310px;
      height: 310px;
    }
  }
`

const TitleContainer = styled.div`
  text-align: center;
  padding: 1rem;
`

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  color: #141824;
  margin-bottom: 0.5rem;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: #141824;
  }
`
const Description = styled.p`
  font-size: 1.15rem;
  color: #141824;
`

const SkillContainer = styled.article`
  padding: 1rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
  @media (max-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 630px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const Skill = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 1.15rem;
  color: #141824;
  svg {
    width: 40px;
    height: 40px;
    fill: #141824;
  }
`

const Skills = () => {
  return (
    <Container id='skills'>
      <TitleWrapper>
        <TitleContainer>
          <Title>skills</Title>
          <Description>The skills, tools and technologies I use.</Description>
        </TitleContainer>
        <SkillsIcon />
      </TitleWrapper>
      <SkillContainer>
        <Skill>
          <SiHtml5 />
          HTML5
        </Skill>
        <Skill>
          <SiCss3 />
          CSS3
        </Skill>
        <Skill>
          <SiSass />
          Sass
        </Skill>
        <Skill>
          <SiTailwindcss />
          Tailwind
        </Skill>
        <Skill>
          <SiJavascript />
          JS
        </Skill>
        <Skill>
          <SiReact />
          React
        </Skill>
        <Skill>
          <SiStyledcomponents />
          Styled
        </Skill>
        <Skill>
          <SiGraphql />
          GraphQL
        </Skill>
        <Skill>
          <SiSvelte />
          Svelte
        </Skill>
        <Skill>
          <SiNodedotjs />
          Node
        </Skill>
        <Skill>
          <SiExpress />
          Express
        </Skill>
        <Skill>
          <SiMongodb />
          MongoDB
        </Skill>
        <Skill>
          <SiMysql />
          MySQL
        </Skill>
        <Skill>
          <SiWordpress />
          Wordpress
        </Skill>
        <Skill>
          <SiVisualstudiocode />
          VSCode
        </Skill>
        <Skill>
          <SiNpm />
          NPM
        </Skill>
        <Skill>
          <SiGit />
          Git
        </Skill>
        <Skill>
          <SiGithub />
          GitHub
        </Skill>
        <Skill>
          <SiNetlify />
          Netlify
        </Skill>
        <Skill>
          <SiVercel />
          Vercel
        </Skill>
        <Skill>
          <SiHeroku />
          Heroku
        </Skill>
        <Skill>
          <SiFigma />
          Figma
        </Skill>
        <Skill>
          <SiGimp />
          GIMP
        </Skill>
        <Skill>
          <SiInkscape />
          Inkscape
        </Skill>
      </SkillContainer>
    </Container>
  )
}

export default Skills
