import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5),rgba(255,255,255,0.5)),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
    center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Wrapper = styled.div`
    padding: 20px;
    width: 40%;
    background-color: white;
    ${mobile({ width: "75%" })}
`
const Title = styled.h1`
    font-size:24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;

`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0 0;
    padding: 10px;
`
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE ACCOUNT</Title>
            <Form>
                <Input placeholder="name" />
                <Input placeholder="last name" />
                <Input placeholder="username" />
                <Input placeholder="email" />
                <Input placeholder="password" />
                <Input placeholder="confirm password" />
                <Agreement>
                    Consent to processing my personal data according to <b>PRIVACY POLICY</b> 
                </Agreement>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register