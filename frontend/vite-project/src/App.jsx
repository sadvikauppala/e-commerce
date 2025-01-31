import { useState } from 'react'

import './App.css'
import {Routes,Route } from 'react-router-dom'
import {LoginPage} from './Router/Routes'

function App() 
{
 

  return (
    <>
    <Routes>
      <Route path = '/login' element={<LoginPage/>}/>  
    </Routes>  
    </>
  )
}

export default App