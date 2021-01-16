import React, { useState } from "react"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageNavBtn from '../components/PageNavBtn'

const TopBtn = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin: 0;
`

const Title = styled.div`
  width: 80vw;
  height: auto;
  font-family: 'Kalam', cursive;
  text-align: center;
  margin: 0 auto;
  margin-top: 10vh;

  h1 {
    font-size: 3rem;
    color: white;
    font-family: 'Comic Neue', cursive;
  }
  h2 {
    font-size: 2rem;
    color: pink;
    line-height: 2.8rem;
    font-family: 'Architects Daughter', cursive;
  }
`
const InputGroup = styled.form`
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`
const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 2px solid white;
  font-family: 'Comic Neue', cursive;
  padding: 10px;
  padding-left: 50px;
  background: transparent;
  color: white;
  font-size: 2rem;
  margin-bottom: 30px;

  &:focus {
    outline: none;
  }
`

const Button = styled.button`
  width: auto;
  padding: 10px;
  font-size: 1.2rem;
  border-radius: 10px;
  background-color: transparent;
  border-color: white;
  font-weight: 300;
  color: white;
  margin: 0 auto;
  font-family: 'Comic Neue', cursive;
  margin-top: 20px;
  cursor: pointer;
`

const Note = styled.div`
  width: 80%;
  height: auto;
  margin: 0 auto;
  margin-top: 50px;
  border-radius: 10px;
  border-color: transparent;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    color: black;
    font-size: 1.5rem;
    font-weight: 300;
    text-align: center;
    line-height: 2rem;
    font-family: 'Comic Neue', cursive;
    margin: 0;
  }
`

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e, n) {
    e.preventDefault();

    if (n === "name") {
      setName(e.target.value)
    } else {
      setEmail(e.target.value)
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!!name && !!email) {
      setName('');
      setEmail('');
      setSubmitted(true);
    } else {
      return null;
    }

  }

  return (
    <Layout>
      <SEO title="signup" />
      <TopBtn>
        <PageNavBtn direction="down" route="/testimonials" />
      </TopBtn>
      <Title>
        <h1>Free 15 minute consultation</h1>
        <h2>Signup below to start your journey to a better business in the modern age!</h2>
      </Title>
      {!submitted ? (
        <InputGroup name="consulting-call" method="POST" data-netlify="true" onSubmit={e => handleSubmit(e)}>
          <Input type="text" placeholder="Name" name="name" value={name} onChange={e => handleChange(e, "name")} />
          <Input type="text" placeholder="Email" name="email" value={email} onChange={e => handleChange(e, "email")} />
          <Button type="submit">Schedule your call</Button>
        </InputGroup>) : (
        <Note>
          <h3>Thank you for signing up for a free 15 minute discovery call to see how we can help you grow your business. Please keep an eye out for an email with a calendar link to schedule our call soon. Looking forward to speaking with you!</h3>
        </Note>
      )}
    </Layout>
  )
}

export default SignupPage