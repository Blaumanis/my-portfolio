import React, { useState } from 'react'
import styled from 'styled-components'
import { ProjectsIcon } from '../assets/ilustrations'
import data from '../assets/data'
import { motion, AnimatePresence } from 'framer-motion'

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.5rem;
  padding: 3rem 1rem;
  background-color: #f1f1f1;
  @media (max-width: 425px) {
    padding: 3rem 0.5rem;
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

const TitleContainer = styled.article`
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
const ProjectTitle = styled.h3`
  align-self: flex-start;
  color: #141824;
  font-size: 1.5rem;
  font-weight: 500;
`

const ProjectFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 1rem;
  @media (max-width: 630px) {
  }
`

const FilterButton = styled.button`
  padding: 0.75rem 1rem;
  cursor: pointer;
  background-color: #ffb600;
  color: #141824;
  font-size: 1.25rem;
  font-weight: 500;
  border: none;
  transition: all 300ms ease-in;
  &:hover {
    background-color: #141824;
    color: #ffb600;
  }
  @media (max-width: 630px) {
    /* font-size: 1.15rem; */
  }
`

const LinkGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
`

const CodeButton = styled.a`
  padding: 0.5rem 1rem;
  text-align: center;
  width: 50%;
  background-color: #ffb600;
  color: #141824;
  font-size: 1.25rem;
  position: relative;
  z-index: 0;
  overflow: hidden;
  transition: all 300ms ease-in;
  &:hover {
    background-color: #141824;
    color: #ffb600;
  }
`
const SiteButton = styled.a`
  padding: 0.5rem;
  text-align: center;
  width: 50%;
  background-color: #ffb600;
  color: #141824;
  font-size: 1.25rem;
  position: relative;
  z-index: 0;
  overflow: hidden;
  transition: all 300ms ease-in;
  &:hover {
    background-color: #141824;
    color: #ffb600;
  }
`

const ProjectImage = styled.img`
  width: 100%;
`

const Divider = styled.div`
  background: linear-gradient(90deg, #141824, #ffb600);
  width: 100%;
  height: 10px;
  margin: 0 auto;
`
const allCategories = ['all', 'javascript', 'react', 'svelte']

const Projects = () => {
  const [categories, setCategories] = useState(allCategories)
  const [projects, setProjects] = useState(data)

  const filterProjects = (category, e) => {
    if (category === 'all') {
      setProjects(data)
      return
    }
    const newItems = data.filter((item) => item.category === category)
    setProjects(newItems)
  }

  return (
    <>
      <Divider></Divider>
      <Container id='projects'>
        <TitleWrapper>
          <ProjectsIcon />
          <TitleContainer>
            <Title>projects</Title>
            <Description>Some of the projects I made.</Description>
          </TitleContainer>
        </TitleWrapper>
        <ProjectFilter>
          {allCategories.map((category) => (
            <FilterButton
              key={category}
              onClick={(e) => filterProjects(category, e)}
            >
              {category}
            </FilterButton>
          ))}
        </ProjectFilter>
        <motion.section className='project-container' layout>
          <AnimatePresence>
            {projects.map((item) => (
              <motion.article
                className='project'
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                layout
                key={item.id}
              >
                <ProjectTitle>{item.title}</ProjectTitle>
                <ProjectImage src={item.img} />
                <LinkGroup>
                  <CodeButton href={item.codeUrl} target='_blank'>
                    Source code
                  </CodeButton>
                  <SiteButton href={item.siteUrl} target='_blank'>
                    Live site
                  </SiteButton>
                </LinkGroup>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.section>
      </Container>
      <Divider></Divider>
    </>
  )
}

export default Projects
