import React,{useEffect} from 'react'

import { Box, Flex } from '@chakra-ui/react';


import { getProducts } from '../Redux/ProductReducx/product.action';
import { useDispatch } from 'react-redux';

const Men = () => {

  const dispatch= useDispatch();
 
  useEffect(()=>{
   
      dispatch(getProducts())
    
   
  },[])
  return (
    <div>
      <Flex>
        <Box minW={300}>
          
        </Box>
          {/* <Flex flexWrap={'wrap'}>
            {data.length > 0&& data.map((item,index)=>{
              return <ProductCard key={item.id} {...item}/>
              })}
          </Flex> */}
      </Flex>
</div>
  )
}

export default Men