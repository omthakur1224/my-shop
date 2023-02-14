import axios from 'axios';
import * as types from './auth.actiontypes.js';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../firebase.config.js';

export const handleAuth=(email,password)=>async(dispatch)=>{

    dispatch({type:types.AUTH_REQUEST});

    try{
        await signInWithEmailAndPassword(auth,email,password)
        .then((res)=>{
            dispatch({type:types.AUTH_SUCCESS,payload:res.user.accesstoken})
            return res.user.accesstoken
        })
    }
    catch(err){
        dispatch({type:types.AUTH_ERROR,payload:err})
    }
}

export const logout=(token)=>(dispatch)=>{
        signOut()
        .then(()=>
         dispatch({type:types.LOGOUT_SUCCESS,payload:false})
        ).
    catch((err=>{

        console.log(err)
    }))
}
