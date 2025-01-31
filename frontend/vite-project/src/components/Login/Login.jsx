import React from 'react'
import { useState } from 'react'
import { IoMailSharp } from "react-icons/io5";
import { LuEyeClosed } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import { Link } from 'react-router-dom';
const Login = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const[visible,setVisible]=useState(true)
  return (
    <div className='h-screen flex justify-center items-center bg-gray-100'>
      <div className='box-border flex flex-col bg-slate-200 h-96 w-96 shadow-xl shadow-black-600 rounded-xl '>
        <div>
            <h1 className='text-center text-2xl font-bold mt-4'>User Login</h1>
        </div>
        <div className=' flex justify-center items-center mt-8'>
            <form className='w-full flex flex-col justify-center items-center mt-4'>
            <div className='flex rounded-lg bg-sky-100 shadow-lg shadow-black-50 w-full h-10 justify-between items-center'>
                <input className='w-full focus:outline-none text-start'type='email' required autoComplete='email' name='email' value={email} placeholder='   Email' onChange={(e)=>setEmail(e.target.value)}/>
                <IoMailSharp className='mr-4 h-8 w-8'/>
                </div>
                <div className='flex rounded-lg bg-sky-100 shadow-lg shadow-black-50 w-full mt-5 h-10 justify-between items-center'>
                <input className='w-full focus:outline-none text-start'type={visible?'text':'password'} required autoComplete='current-password' name='password' value={password} placeholder='    Password' onChange={(e)=>setPassword(e.target.value)}/>
                 {
                     visible?(<LuEyeClosed className='mr-4 h-8 w-8' onClick={()=>setVisible(false)}/>):(<LuEye className='mr-4 h-8 w-8' onClick={()=>setVisible(true)}/>)
                 }

                </div>
                <div className='w-full flex mt-2 justify-center'>
                   <input className='ml-2' type='checkbox'/>
                   <label className='text-xs ml-2'>Remember me</label>
                    <a className='ml-6 text-xs text-sky-500' href='#'>forgot Password?</a>
                </div>
                <button type='submit'className='w-full bg-cyan-400 text-center text-xl mt-5 rounded-lg h-10'>Submit</button>
                 <div className='flex w-full mt-3 justify-center items-center'>
                   <h6 className='text-xs'>Dont have an account</h6>
                   <Link className='ml-3 text-xs text-sky-500'>Sign-UP</Link>
                 </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login