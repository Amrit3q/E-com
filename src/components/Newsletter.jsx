import React from 'react'
import styled from 'styled-components'
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { mobile } from '../responsive';

const Container = styled.div`
    height: 60vh;
    display: flex;
    background-color: #fcf5f5;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`
const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({ textAlign: "center"  })}
`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgrey;
    ${mobile({ width: "80%" })}
`
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: white;
    color: teal;
    
    &:hover{
    background-color: teal;
    color: white;  
    }
`

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Get latest offers anytime anywhere</Description>
        <InputContainer>
            <Input placeholder='your Email@X.com'/>
            <Button>
                <SendRoundedIcon />
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter