import { AUTH_SUCCESS } from "./auth.actiontypes"

const initialState={
    isAuth:false,
    isError:false,
    isLoading:false
}

export const AuthReducer=(state=initialState,{type,payload})=>{

    switch(type){
        case AUTH_SUCCESS:
            return {
                ...state,
                isAuth:true,
                isError:false,
                isLoading:false
            }
        default :
        return state
    }
}