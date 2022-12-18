import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5),rgba(255,255,255,0.5)),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
    center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Wrapper = styled.div`
    padding: 20px;
    width: 25%;
    background-color: white;
    ${mobile({ width: "75%" })}

`
const Title = styled.h1`
    font-size:24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;

`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0 ;
    padding: 10px;
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`
const Link = styled.a`
    margin: 5px 0;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Sign In</Title>
            <Form>
                <Input placeholder="username" />
                <Input placeholder="password" />
                <Button>LOGIN</Button>
                <Link>DO NOT REMEMBER PASSWORD?</Link>
                <Link>CREATE ACCOUNT</Link>
                

            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login