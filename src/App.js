import React from 'react'
import Login from './pages/Login'
import Forget from './pages/Forget'
import Signup from './pages/Signup'
import {BrowserRouter, Routes,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/forget' element={<Forget/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App