import React from 'react'
import styled from 'styled-components'
import { Facebook, Instagram, LinkedIn, MailOutlineOutlined, Phone, Room, Twitter } from '@mui/icons-material'
import { mobile } from '../responsive'


const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}

`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h1``
const Desc = styled.p`
    margin: 20px 0;
`
const SocialContainer = styled.div`
    display: flex;

`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#eee" })}
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width: 50%;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>TRADE</Logo>
            <Desc>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium veniam impedit odio dolor 
                repellat, velit aliquam porro quidem ratione quae, nemo voluptatum consequatur unde consectetur numquam
                saepe placeat ipsam possimus.</Desc>
            <SocialContainer>
                <SocialIcon color="385999">
                    <Facebook />
                </SocialIcon>
                <SocialIcon color="E4405f">
                    <Instagram />
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter />
                </SocialIcon>
                <SocialIcon color="E60023">
                    <LinkedIn />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>
                Useful Links
            </Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Men Fashion</ListItem>
                <ListItem>Women Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
             <Room style={{marginRight:"10px"}}/> Khadki road, Pune, Maharashtra 
            </ContactItem>
            <ContactItem>
             <Phone style={{marginRight:"10px"}}/>   91+ 8789107064
            </ContactItem>
            <ContactItem>
              <MailOutlineOutlined style={{marginRight:"10px"}}/>  contact@Trade.com
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
    </Container>
  )
}

export default Footer