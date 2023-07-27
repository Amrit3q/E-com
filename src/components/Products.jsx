import React from 'react'
import styled from 'styled-components'
import Product from './Product'
import { popularProducts } from '../data'
import { useState } from 'react'
import { useEffect } from 'react'
const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Products = ({cat, filter, sort}) => {
  const [products, setProducts] = useState([]);
  const [filteredProduct,setFilteredProduct] = useState([]);

  useEffect(()=> {

  },[cat])
  return (
    <Container>
        {popularProducts.map(items=>
            <Product items={items} />    
        )}
    </Container>
  )
}

export default Products