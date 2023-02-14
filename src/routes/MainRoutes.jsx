import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import { Signin } from '../components/authentications/Signin'
import { SignUp} from '../components/authentications/SignUp'
import Navbar from '../components/Navbar'
import Men from '../pages/Men'
import Women from '../pages/Women'
import Cart from './../pages/Cart';
import RequireAuth from '../components/HOF/RequireAuth'


const  MainRoutes= () => {
  return (
    <>
    <Navbar/>
      <Routes>
            {/* <Route path='/' element={<Signin/> }/> */}
            <Route path='/signup' element={<SignUp/>} />
            <Route path='/signin' element={
            <RequireAuth>
              <Signin/> 
            </RequireAuth>
            }/>
            <Route path='/' element={<Home/>} />
            <Route path='/men' element={<Men/>} />
            <Route path='/women' element={<Women/>} />
            <Route path='/cart' element={<Cart/>} />
      </Routes>
    </>
  )
}

export default MainRoutes
