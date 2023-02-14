import axios from "axios"
import { GET_PRODUCT_ERROR, GET_PRODUCT_SUCCESS } from "./product.actionTypes"

export const getProducts=(params)=>async(dispatch)=>{

    try{
        axios.get('http://localhost:8080/products',params)
        .then((res)=>dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data}))
    }catch(err){
        console.log(err)
        dispatch({type:GET_PRODUCT_ERROR})
    }
}