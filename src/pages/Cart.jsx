import React from 'react'
import { Flex } from '@chakra-ui/react';
import ProductCard from '../components/ProductCard';
import { useSelector } from 'react-redux';

const Cart = () => {
    const data=useSelector(store=>store.productReducer.data);
    
  return (
    <Flex>
        <h1>CART</h1>
        {
            data.map((item,index)=>
            <ProductCard item={item} key={item.id}/>
            )
        }
    </Flex>
  )
}

export default Cart
