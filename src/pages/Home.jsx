import React,{useEffect} from 'react'

import { Box, Flex } from '@chakra-ui/react';

import { useLocation, useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getProducts } from '../Redux/ProductReducx/product.action';

const Homepage = () => {
  const [searchParams]=useSearchParams();

  const location=useLocation();
  const dispatch=useDispatch()

  useEffect(()=>{
   
      dispatch(getProducts())
   
    // dispatch(getProducts())
  },[])
  return (
    <div>
      <Flex>
        <Box minW={300}>
            {/* <Filter/> */}
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

export default Homepage