import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { OtpGenrator } from '../utils/Auth.util';
import { GoogleLogin } from '../utils/Auth.util';
import OtpChecker from '../components/OtpChecker';



const Signup = () => {

    const PassErrorMssg ="password should be min 8 character and max 20 character with one special character in it.";
    // const [ConformPassError, setConformPassError] = useState("");
    const [otp, setOtp] = useState([]);
    const emailRef = useRef();
    const nameRef = useRef();
    const passwordRef = useRef();
    const conformPassRef = useRef();
    const[optVisivility, setOtpvisibility] = useState(false);
    // const [emailWarning, setEmailWarning] = useState("");

         
       // to check on the spot the password is strong or weak


       function AllBlank(){   // to blank all the input fields
        nameRef.current.value = "";
        emailRef.current.value = "";
        passwordRef.current.value = "";
        conformPassRef.current.value = "";
       }


        const formCheck = (e,name,email,password,conformPassword)=>{ 
            e.preventDefault();   
              
             console.log("entered");
             
             const isGmail = /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email);  
             const pass = /[!@#$%^&*(),.?":{}|<>]/.test(password);

             console.log(pass);
             

                    if(name.length < 3){
                      alert("name is not valid");
                     AllBlank();
                      return;
                    }else if(!isGmail){
                       alert("not a valid gamil");
                       AllBlank();
                       return;
                    }else if(!pass){
                      alert("your password should contain one special character");
                      
                      AllBlank();
                      return;
                    }else if(password !== conformPassword){
                      alert("password is not matched in conform password!");
                      
                      AllBlank();
                      return;
                    }

                    setOtpvisibility(true);

        };




          useEffect(()=>{
           const nums =  OtpGenrator();
            setOtp(nums);
               
          },[])

  console.log("da");
  
  return (
    <>
      
      <OtpChecker visibility={optVisivility} otp={otp} />
    <div className={` ${!optVisivility ?"flex" : "hidden" } justify-center flex-col items-center h-[100vh]`} >

      <h1 className='absolute sm:left-24 left-2 text-xl sm:text-2xl top-1 sm:top-8 p-4' >FinPocket 🪙 </h1>

       {/* <h1>{otp[2]}</h1> */}
       <h1 className='text-2xl sm:text-3xl sm:mb-2 font-bold sm:mt-15' >Sign-Up</h1>
       <form 
       onSubmit={(e)=>formCheck(e,nameRef.current.value,emailRef.current.value,passwordRef.current.value,conformPassRef.current.value)} 
       className='flex flex-col w-[80vw] lg:w-[30vw] md:w-[60vw] sm:w-[30vw] rounded-md shadow-2xl p-5' >

        <input type="name" ref={nameRef} minLength={3} maxLength={18} placeholder='First Name' required className='border text-sm sm:text-base mt-10 px-2 rounded-md py-1 mb-5' />  
        <input type="email" ref={emailRef} required placeholder='Gmail' className='border px-2 text-sm sm:text-base rounded-md py-1 mb-5' />   
        <input type="password" ref={passwordRef}  required placeholder='Password' minLength={8} maxLength={20} className='border text-sm sm:text-base rounded-md px-2 py-1 ' />  
        <p className='mb-5 text-slate-600 text-xs sm:text-sm ' >{PassErrorMssg}</p> 
        <input type="password" ref={conformPassRef}  required placeholder='Conform Password' minLength={8} maxLength={20} className='border text-sm sm:text-base rounded-md px-2 py-1 ' />
        <p className='mb-5'>{``}</p>

        <section className='flex items-center gap-4' >
        <button type='submit' className='w-[50%] text-sm sm:text-base cursor-pointer font-semibold py-2 rounded-md m-auto bg-[#635BFF] text-white  hover:text-black hover:border-2 hover:border-[#635BFF] hover:bg-white active:bg-[#635BFF] active:text-white  ' >SIGN UP</button>
        <span>or</span>
        <button onClick={GoogleLogin} className='py-2 text-sm sm:text-base rounded-md m-auto border-2 w-[50%] font-semibold cursor-pointer border-blue-500 text-black hover:bg-blue-500 hover:text-white active:border-blue-500 active:text-black' > Use Google </button>
        </section>
        <p className='mt-2 text-sm sm:text-base text-slate-500' >Have an account ! <NavLink to={`/login`} className='hover:underline text-[#635BFF]' > login here </NavLink></p>

       </form>

         
 
    </div>
    </>
  )
}

export default Signup
