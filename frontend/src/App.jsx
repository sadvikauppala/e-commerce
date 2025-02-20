import { useState } from 'react'
import { LoginPage , SignupPage , Home} from './Routes/Routes'
import { Routes , Route } from 'react-router-dom'
import './App.css'

function App() {
  

  return (
    <>
      <Routes>
         <Route path='/Login' element = {<LoginPage/>} />
         <Route path='/Signup' element = {<SignupPage/>}/>
         <Route path='/' element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App