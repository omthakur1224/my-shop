
import { GET_PRODUCT_SUCCESS } from "./product.actionTypes"

const initialState={
    data:[],
    isError:false,
    isLoading:false,
}

export const productReducer=(state=initialState,{type,payload})=>{

    switch(type){
        case GET_PRODUCT_SUCCESS:
            return {
                ...state,
                data:payload,
                isError:false,
                isLoading:false,
               
            }
          default :
        return state
    }
}