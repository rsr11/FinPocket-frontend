import React from 'react'
import { supabase } from '../supabase'
import { NavLink } from 'react-router-dom'
import { GoogleLogin } from '../utils/Auth.util'

const Login = () => {


       


  return (
    <div className='flex justify-center flex-col items-center h-[100vh]' >

      <h1 className='absolute sm:left-24 left-2 text-xl sm:text-2xl top-1 sm:top-8 p-4' >FinPocket 🪙 </h1>
 

      
       <h1 className='text-2xl sm:text-3xl sm:mb-2 font-semibold' >Login</h1>
       <form className='flex flex-col w-[80vw] lg:w-[30vw] md:w-[60vw] sm:w-[30vw] rounded-md shadow-2xl  pt-20 p-5' >

        <input type="email" required placeholder='Email' className='border px-2 text-sm sm:text-base rounded-md py-1 mb-5' />   
        <input type="password" required placeholder='Password' className='border text-sm sm:text-base rounded-md px-2 py-1 mb-5' /> 

        <section className='flex gap-4' >
        <button type='submit' className='w-[50%] text-sm sm:text-base cursor-pointer font-semibold py-2 rounded-md m-auto bg-[#635BFF] text-white  hover:text-black hover:border-2 hover:border-[#635BFF] hover:bg-white active:bg-[#635BFF] active:text-white' >LOGIN</button> 
        <button onClick={GoogleLogin} className='py-2 text-sm sm:text-base rounded-md m-auto border-2 w-[50%] font-semibold cursor-pointer border-blue-500 text-black hover:bg-blue-500 hover:text-white active:border-blue-500 active:text-black' > Google </button>
            </section>   
         <p className='text-slate-500 text-sm sm:text-base mt-2' >Don't have account yet? <NavLink to={`/signup`} className='hover:underline text-blue-500 cursor-pointer' >Sign-up </NavLink></p>

       </form>

         
 
    </div>
  )
}

export default Login
             