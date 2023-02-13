import { AUTH_SUCCESS, LOGOUT_SUCCESS } from "./auth.actiontypes"

const initialState={
    isAuth:false,
    isError:false,
    isLoading:false,
    token:""
}

export const AuthReducer=(state=initialState,{type,payload})=>{

    switch(type){
        case AUTH_SUCCESS:
            return {
                ...state,
                isAuth:true,
                isError:false,
                isLoading:false,
                token:payload
            }
            case LOGOUT_SUCCESS:
                return {
                    ...state,
                    isAuth:false,
                    isError:false,
                    isLoading:false,
                    token:""
                }

        default :
        return state
    }
}