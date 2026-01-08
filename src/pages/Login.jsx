import React, { useRef, useState } from 'react'
// import { supabase } from '../supabase'
import { NavLink, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
// import { GoogleLogin } from '../utils/Auth.util'
import { LoginApi } from '../apiHandler/login.api'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { UpdateLoggedIn } from '../features/Auth/Auth.slice'
import Loader from '../components/Loader'

const Login = () => {

    const emailref = useRef();
    const passwordref = useRef();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const navigate= useNavigate();



  const onLoginSubmit = async (e)=>{
    e.preventDefault();
    setLoading(true);
    
    const password = passwordref.current.value;
    const email = emailref.current.value;

    const isEmailValid = /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email);  

    if(!isEmailValid){
      // const data= await LoginApi(email,password);
      // alert(data);
      alert("valid email");
      emailref.current.value = "";
      passwordref.current.value = "";
      return;
    }else if(password.length < 8 || password.length > 20){
      alert("password length should be min 8 character and max 20 character");
      passwordref.current.value = "";
      emailref.current.value = "";
      return;}
    
       try {
          //  alert(email+" "+ password);
            const data = await axios.post("http://localhost:4040/finPocket/api/auth/login",{
              
                 email:email,
                 password:password
            },{
              headers:{
                "Content-Type":"application/json"
              },
              withCredentials:true,
              
            });

            if(data.status === 200){
              dispatch(UpdateLoggedIn({name:data?.data?.name ,email,isLoggedIn:true}));
              setLoading(false);
              toast.success("User LoggedIn!!",{autoClose:1000});
              localStorage.setItem("UserLogined",true);
              localStorage.setItem("UserName",data?.data?.name);
              

              alert();
              setTimeout(()=>{ navigate("/") },1500);
              
            }
       } catch (error) {
         console.log(error);
         setLoading(false);
          //  alert(error?.response?.data)
           toast.error(error?.response?.data?.msg || error?.response?.data || "something went wrong!"); 
           passwordref.current.value = "";
           emailref.current.value = "";
           return;

       }

        setLoading(false);
    
  }


  return (
    <>
      <Header/>
    <h1 className='text-2xl sm:text-3xl sm:mb-1 relative text-center mt-10 font-semibold' >Login</h1>
    <div className='flex justify-center flex-col items-center h-[70vh]' >

      {/* <h1 className='absolute sm:left-24 left-2 text-xl sm:text-2xl top-1 sm:top-8 p-4' >FinPocket 🪙 </h1> */}
 
      


       {loading ? <Loader/> : 
       <form onSubmit={(e)=>{onLoginSubmit(e)}} className='flex flex-col w-[80vw] lg:w-[30vw] md:w-[60vw] sm:w-[30vw] rounded-md shadow-2xl  pt-10 p-5' >

        <input type="email" required ref={emailref} placeholder='Email' className='border px-2 text-sm sm:text-base rounded-md py-1 mb-5' />   
        <input type="password" ref={passwordref} required minLength={8} maxLength={20}  placeholder='Password' className='border text-sm sm:text-base rounded-md px-2 py-1 mb-5' /> 

        <section className='flex gap-4' >
        <button type='submit' className='w-[50%] text-sm sm:text-base cursor-pointer font-semibold py-2 rounded-md m-auto bg-[#635BFF] text-white  hover:text-black hover:border-2 hover:border-[#635BFF] hover:bg-white active:bg-[#635BFF] active:text-white' >LOGIN</button> 
        <button  className='py-2 text-sm sm:text-base rounded-md m-auto border-2 w-[50%] font-semibold cursor-pointer border-blue-500 text-black hover:bg-blue-500 hover:text-white active:border-blue-500 active:text-black' > Google </button>
            </section>   
         <p className='text-slate-500 text-sm sm:text-base mt-2' >Don't have account yet? <NavLink to={`/signup`} className='hover:underline text-blue-500 cursor-pointer' >Sign-up </NavLink></p>

       </form>
      }

         
 
    </div>
    </>
  )
}

export default Login
             