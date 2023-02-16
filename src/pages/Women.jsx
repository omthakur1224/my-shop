import React,{useEffect} from 'react'

import { Box, Flex, Grid, GridItem } from '@chakra-ui/react';

import { useLocation, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, getWomenProducts } from '../Redux/ProductReducx/product.action';
import { productReducer } from './../Redux/ProductReducx/product.reducer';
import ProductCard from '../components/ProductCard';
import Filter from '../components/Filter';

const Women = () => {
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
      dispatch(getWomenProducts(getProductParams))
    }

  },[location.search])
  return (
    <div>
       <Grid templateColumns='repeat(3, 33%)' gap={1} ml={20}>
       {/* <Box minW={200}>
            <Filter/>
        </Box> */}
            {data.length > 0&& data.map((item,index)=>{
              return  <GridItem w='250px' h={500}  bg='grey.500' >
                        <ProductCard key={item.id} {...item}/>
                    </GridItem>
              })}
      </Grid>
</div>
  )
}

export default Women