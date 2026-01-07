import React, {useRef, useState } from 'react'
import { NavLink } from 'react-router-dom';
// import { OtpGenrator } from '../utils/Auth.util';
// import { GoogleLogin } from '../utils/Auth.util';
import OtpChecker from '../components/OtpChecker';
import { useDispatch } from 'react-redux';
import { UpdateLoggedIn } from '../features/Auth/Auth.slice';
import { getOtp } from '../apiHandler/signup.api';
import Header from '../components/Header';
import Loader from '../components/Loader';



const Signup = () => {

    const PassErrorMssg ="password should be min 8 character and max 20 character with one special character in it.";
    const dispatch = useDispatch();
    // const [ConformPassError, setConformPassError] = useState("");
    const [otp, setOtp] = useState([]);
    const emailRef = useRef();
    const nameRef = useRef();
    const passwordRef = useRef();
    const conformPassRef = useRef();
    const monthlyIncomeRef = useRef();
    const professionRef = useRef();
    const[optVisivility, setOtpvisibility] = useState(false);
    const[loading, setLoading] = useState(false);
    const professionOptions = [ `Select your profession`,`Student`,`Freelancer`,`Private Sector`,`Govt Sector`,`Other`];
    // const [emailWarning, setEmailWarning] = useState("");

         
       // to check on the spot the password is strong or weak


       function AllBlank(){   // to blank all the input fields
        nameRef.current.value = "";
        emailRef.current.value = "";
        passwordRef.current.value = "";
        conformPassRef.current.value = "";
        monthlyIncomeRef.current.value = "";
       }


        const formCheck = async (e,name,email,password,conformPassword,monnthlyIncome, profession)=>{ 
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
                    }else if(monnthlyIncome <= 0 || monnthlyIncome > 200000){
                      alert("number is not valid!");     
                      AllBlank();
                      return;
                    }else if(profession === professionOptions[0]){
                       alert("select any profession!");     
                      AllBlank();
                      return;
                    }
                    alert("done");
                    dispatch(UpdateLoggedIn({email:email,password:password,name:name}));

                    try {
                      // const data = await fetch(`http://localhost:4040/finPocket/api/auth/sendOtp/${email}`);
                      // const otp = await data.json();
                      // console.log(data);

                      const res = await getOtp(email);

                      if(res.status !== 200){
                          alert(res.error);
                          return;
                      };
                      console.log("the res status is :" + res.status);
                      console.log("the otp we get :"+ res.otp);
                      
                      
                      setOtp(res.otp);
                      setOtpvisibility(true);
                      alert(`otp is sended to ${email}!`)
                      
                    } catch (error) {
                      console.log(error);
                      
                    }



        };
 
          // useEffect(()=>{
          //  const nums =  OtpGenrator();
          //   setOtp(nums);
               
          // },[])

  console.log("da");  
  
  return (
    <>
      <Header/>
      { optVisivility ? (  <OtpChecker visibility={optVisivility} otp={otp} email={emailRef} /> ) : (
       <>
       <h1 className='text-2xl sm:text-3xl  sm:mb-2 font-bold text-center sm:mt-5' >Sign-Up</h1>
    <div className={` ${!optVisivility ?"flex" : "hidden" } justify-center flex-col items-center h-[70vh]`} >

      {/* <h1 className='absolute sm:left-24 left-2 text-xl sm:text-2xl top-1 sm:top-8 p-4' >FinPocket 🪙 </h1> */}
      

       {/* <h1>{otp[2]}</h1> */}
       
       { loading ? <Loader/> : 
       <form 
       onSubmit={(e)=>formCheck(e,nameRef.current.value,emailRef.current.value,passwordRef.current.value,conformPassRef.current.value,monthlyIncomeRef.current.value,professionRef.current.value)} 
       className='flex flex-col w-[80vw] lg:w-[30vw] md:w-[60vw] sm:w-[30vw] rounded-md shadow-2xl py-2 px-5' >

        <input type="name" ref={nameRef} minLength={3} maxLength={18} placeholder='First Name' required className='border text-sm sm:text-base mt-10 px-2 rounded-md py-1 mb-5' />  
        <input type="email" ref={emailRef} required placeholder='Gmail' className='border px-2 text-sm sm:text-base rounded-md py-1 mb-5' />   
        <input type="password" ref={passwordRef}  required placeholder='Password' minLength={8} maxLength={20} className='border text-sm sm:text-base rounded-md px-2 py-1 ' />  
        <p className='mb-5 text-slate-600 text-xs sm:text-sm ' >{PassErrorMssg}</p> 
        <input type="password" ref={conformPassRef}  required placeholder='Conform Password' minLength={8} maxLength={20} className='border text-sm sm:text-base rounded-md px-2 py-1 ' />
        <p className='mb-5'>{``}</p>

        <input type="number" ref={monthlyIncomeRef} min={0} max={200000} required placeholder='Monthly Income' className='border text-sm sm:text-base rounded-md px-2 py-1 '  name="" id="" />
        <p className='mb-5 text-slate-600 text-xs sm:text-sm ' >The amount should be greater then Rs.0 and lower then Rs.2,00,000.</p>
        
         <div className='flex gap-5 mb-5 items-center' >
        <span className='w-[30%] pl-2 ' >Profession : </span>  
        <select ref={professionRef} className=' w-[70%] text-center p-1 rounded-md border' name="" id="">
                  {
                    professionOptions.map((prof)=>{
                      return <option key={prof} value={prof} >{prof}</option>
                    })
                  }
                   
        </select>
        </div>

        <section className='flex items-center gap-4' >
        <button type='submit' className='w-[50%] text-sm sm:text-base cursor-pointer font-semibold py-2 rounded-md m-auto bg-[#635BFF] text-white  hover:text-black hover:border-2 hover:border-[#635BFF] hover:bg-white active:bg-[#635BFF] active:text-white  ' >SIGN UP</button>
        <span>or</span>
        <button  className='py-2 text-sm sm:text-base rounded-md m-auto border-2 w-[50%] font-semibold cursor-pointer border-blue-500 text-black hover:bg-blue-500 hover:text-white active:border-blue-500 active:text-black' > Use Google </button>
        </section>
        <p className='mt-2 text-sm sm:text-base text-slate-500' >Have an account ! <NavLink to={`/login`} className='hover:underline text-[#635BFF]' > login here </NavLink></p>

       </form> }

         
 
    </div>
       </> ) }
    </>
  )
}

export default Signup
