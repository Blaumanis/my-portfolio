import React from 'react'
import styled from 'styled-components'
import { ContactIcon } from '../assets/ilustrations'

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  padding: 1.5rem 1rem;
  background-color: #f1f1f1;
  min-height: 100vh;
  @media (max-width: 400px) {
    padding: 1.5rem 0.5rem;
  }
`

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1.5rem;
  padding: 1rem;
  @media (max-width: 630px) {
    flex-direction: column;
  }
  @media (max-width: 400px) {
    padding: 1rem 0;
  }

  svg {
    width: 400px;
    height: 300px;
    @media (max-width: 500px) {
      width: 350px;
    }
    @media (max-width: 400px) {
      width: 325px;
    }
    @media (max-width: 350px) {
      width: 310px;
    }
  }
`

const TitleBox = styled.div``

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

const Form = styled.form`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  width: 450px;
  margin: 0 auto;
  @media (max-width: 500px) {
    width: 100%;
  }
`

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  width: 100%;
`

const Label = styled.label`
  color: #141824;
  font-weight: 500;
  font-size: 1.15rem;
`

const Input = styled.input`
  width: 100%;
  padding: 1rem 0.75rem;
  box-shadow: 2px 2px 2px #141824;
  outline: none;
  border: none;
  font-size: 1rem;
  transition: all 300ms ease-in;
  &:focus {
    box-shadow: 2px 2px 2px #ffb600;
  }
`

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem 0.75rem;
  outline: none;
  border: none;
  box-shadow: 2px 2px 2px #141824;
  font-size: 1rem;
  transition: all 300ms ease-in;
  &:focus {
    box-shadow: 2px 2px 2px #ffb600;
  }
`

const Submit = styled.button`
  padding: 0.75rem 1rem;
  width: 50%;
  margin: 0 auto;
  cursor: pointer;
  background-color: #ffb600;
  color: #141824;
  font-size: 1.25rem;
  border: none;
  transition: all 300ms ease-in;
  &:hover {
    background-color: #141824;
    color: #ffb600;
  }
`

const Contacts = () => {
  return (
    <Container id='contacts'>
      <TitleContainer>
        <TitleBox>
          <Title>contacts</Title>
          <Description>Please leave a message.</Description>
        </TitleBox>
        <ContactIcon />
      </TitleContainer>
      <Form name='contact' action='POST' data-netlify='true'>
        <InputGroup>
          <Label>name</Label>
          <Input type='text' name='name' />
        </InputGroup>
        <InputGroup>
          <Label>email</Label>
          <Input type='email' name='email' />
        </InputGroup>
        <InputGroup>
          <Label>message</Label>
          <TextArea name='message' rows='5' />
        </InputGroup>
        <Submit type='submit'>Submit</Submit>
      </Form>
    </Container>
  )
}

export default Contacts
