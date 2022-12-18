import React from 'react'
import styled from 'styled-components'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease;
    cursor: pointer;
`;

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5fbfd;
    position: relative;
    &:hover ${Info}{
        opacity: 1;
    }
`;

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
    
`
const Image = styled.img`
    height: 75%;
    z-index: 2;
`



const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    transition: all 0.2s ease;
    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`


const Product = ({items}) => {
  return (
    <Container>
        <Circle />
        <Image src={items.img} />
        <Info>
            <Icon>
                <ShoppingCartRoundedIcon />

            </Icon>
            <Icon>
                <SearchRoundedIcon />
                
            </Icon>
            <Icon>
                <FavoriteBorderRoundedIcon />
                
            </Icon>
        </Info>
    </Container>
  )
}

export default Product