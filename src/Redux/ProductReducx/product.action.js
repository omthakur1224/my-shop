import axios from "axios"

export const getProducts=()=>async()=>{

    try{
        axios.get('https://fakestoreapi.com/products/category/jewelery')
        .then((res)=>console.log(res.data,"get"))
    }catch(err){
        console.log(err)
    }
}