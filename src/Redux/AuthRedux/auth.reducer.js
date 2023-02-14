import { AUTH_SUCCESS, LOGOUT_SUCCESS } from "./auth.actiontypes"

const initialState={
    isAuth:false,
    isError:false,
    isLoading:false,
    token:""
}

export const authReducer=(state=initialState,{type,payload})=>{

    switch(type){
        case AUTH_SUCCESS:
            console.log(!state.auth,'forem reducer')
            return {
                ...state,
                isAuth:!state.isAuth,
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