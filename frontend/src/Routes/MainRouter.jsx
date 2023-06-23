import React from 'react'
import {Routes, Route } from "react-router-dom"
import SignupPage from '../Pages/Signup'
import LoginPage from '../Pages/Login'
import DashboardPage from '../Pages/Dashboard'


const MainRouter = () => {
  return (
      <Routes>
          
        <Route path="/signup" element={<SignupPage/>} /> 
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/dashboard' element={<DashboardPage/>}/>
    </Routes>
  )
}

export default MainRouter