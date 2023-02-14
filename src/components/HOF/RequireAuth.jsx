import React, { Children } from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authReducer } from './../../Redux/AuthRedux/auth.reducer';

const RequireAuth = ({children}) => {
    const token=useSelector(store=>store.authReducer.token)
    if(token!==""){
        return children
    }
    <Navigate to={'/'} />
}

export default RequireAuth
