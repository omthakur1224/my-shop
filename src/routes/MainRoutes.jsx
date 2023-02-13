import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import { Signin } from '../components/authentications/Signin'
import { SignUp} from '../components/authentications/SignUp'
import Navbar from '../components/Navbar'
import Men from '../pages/Men'
import Women from '../pages/Women'


const  MainRoutes= () => {
  return (
    <>
    <Navbar/>
      <Routes>
            {/* <Route path='/' element={<Signin/> }/> */}
            <Route path='/signup' element={<SignUp/>} />
            <Route path='/signin' element={<Signin/> }/>
            <Route path='/' element={<Home/>} />
            <Route path='/men' element={<Men/>} />
            <Route path='/women' element={<Women/>} />
      </Routes>
    </>
  )
}

export default MainRoutes
