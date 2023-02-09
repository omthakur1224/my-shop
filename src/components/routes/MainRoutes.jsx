import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import { Signin } from '../authentications/Signin'
import { SignUp} from '../authentications/SignUp'

const  MainRoutes= () => {
  return (
    <>
      <Routes>
            <Route path='/' element={<Signin/> }/>
            <Route path='/signup' element={<SignUp/>} />
            <Route path='/signin' element={<Signin/> }/>
            <Route path='/home' element={<Home/>} />
      </Routes>
    </>
  )
}

export default MainRoutes
