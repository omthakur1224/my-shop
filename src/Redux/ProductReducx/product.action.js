import axios from "axios"
import { GET_PRODUCT_ERROR, GET_PRODUCT_SUCCESS } from "./product.actionTypes"

export const getProducts=(params)=>async(dispatch)=>{

    try{
        axios.get('https://fakestoreapi.com/products',params)
        .then((res)=>dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data}))
    }catch(err){
        console.log(err)
        dispatch({type:GET_PRODUCT_ERROR})
    }
}
export const getWomenProducts=(params)=>async(dispatch)=>{

    try{
        axios.get("https://fakestoreapi.com/products?category=women's clothing",params)
        .then((res)=>dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data}))
    }catch(err){
        console.log(err)
        dispatch({type:GET_PRODUCT_ERROR})
    }
}
