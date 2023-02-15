import React,{useEffect} from 'react'

import { Box, Flex } from '@chakra-ui/react';

import { useLocation, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMenProducts, getProducts } from '../Redux/ProductReducx/product.action';
import { productReducer } from './../Redux/ProductReducx/product.reducer';
import ProductCard from '../components/ProductCard';
import Filter from '../components/Filter';

const Men = () => {
  const [searchParams]=useSearchParams();
  const data=useSelector(store=>store.productReducer.data)
  const location=useLocation();
  const dispatch=useDispatch()

  useEffect(()=>{
    if(data.length===0||location){
      let getProductParams={
        params:{
          category:searchParams.getAll('category')
        }
      }
      dispatch(getMenProducts(getProductParams))
    }

  },[location.search])
  return (
    <div>
      <Flex>
       <Box minW={200}>
            <Filter/>
        </Box>
          <Flex flexWrap={'wrap'}>
            {data.length > 0&& data.map((item,index)=>{
              return <ProductCard key={item.id} {...item}/>
              })}
          </Flex>
      </Flex>
</div>
  )
}

export default Men