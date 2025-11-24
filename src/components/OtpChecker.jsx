import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { UpdateLoggedIn } from '../features/Auth/Auth.slice';
import { getOtp } from '../apiHandler/signup.api';
import axios from 'axios';

const OtpChecker = ({visibility,otp}) => {

    const navigate = useNavigate();

    console.log("the otp " + otp + " the type "+ typeof(otp) );
    




    // console.log("too", email); 

    const [BkEndOtp, setBkEndOtp] = useState(String(otp));

    console.log("the bkendotp "+BkEndOtp+ " "+ typeof(BkEndOtp));


    const [theOtp, setTheOtp] = useState(new Array(6).fill(""));
    const otpRef = useRef([]);
    

    // const [one,setOne] = useState();
    // const [two,setTwo] = useState();
    // const [three,setThree] = useState();
    // const [four,setFour] = useState();
    // const [five,setFive] = useState();
    // const [six,setSix] = useState();    

    const[OtpChance, setOtpChance] = useState(2);
    const[otpWarning,setOtpWarning] = useState("");
    const[otpConformed, setOtpConformed] = useState(false);
    const[otpResend, setOtpResend] = useState(false);


    const dispatch = useDispatch();
    const gmail = useSelector(state => state.User.gmail);
    const name = useSelector(state => state.User.name);
    const password = useSelector(state => state.User.password);

    console.log("the gmail :"+ gmail);
    

     useEffect(()=>{
      otpRef.current[0]?.focus();
     },[]);
    

    const otpOnChange = (value,indx)=>{
      if(isNaN(value)){
        return;
      };

      const newArr = [...theOtp];
       const newVal = value.trim(); 
      newArr[indx] = newVal.slice(-1);
      setTheOtp(newArr); 
     newVal && otpRef.current[indx+1]?.focus();
    };


    function onKeyDownFunc(e,indx){
      // console.log(e.key);    
      if(e.key == "Backspace"){
        // console.log("tingggg");   
         if(!e.currentTarget.value){
           otpRef.current[indx-1]?.focus();
         };
      };
    };


    
    
    function AllEmpty(){
      console.log("all empty");  
      // setOne("");
      // setTwo("");
      // setThree("");
      // setFour("");
      // setFive("");
      // setSix("");
      setTheOtp(new Array(6).fill(""));
    };


    
    function CheckOtpChance(){
      if(OtpChance === 0){
        dispatch(UpdateLoggedIn({gmail:" "}));
        navigate(0);
      }else{
        setOtpChance((prev)=> prev-=1);  
        setOtpWarning(` ⚠️ ${OtpChance} chance is left, after that you are not allowed to enter otp!`)     
      }
    };
    
    
    const resendOtp = async ()=>{   
      setOtpResend(false); 
      // AllEmpty();
      try {        
        const res = await getOtp(gmail);   
        console.log("the res is "+ res.error); 

        if(res.status !== 200){
             alert(res.error);
             return;
        };

        setBkEndOtp(String(res.otp));

      console.log("the res status is :" + res.status);
      console.log("the otp we get :"+ res.otp);
        
      alert(`otp is resended to ${gmail} !!`);

        
      }catch (error) {
        console.log("the error in resend otp is :"+ error );    
        
      }      
      // console.log(otp+ " "+ typeof(otp));    
      // setBkEndOtp(otp.otp);
    };
    
      
    useEffect(()=>{
      // testing();
      setTimeout(() => {
        setOtpResend(true);
        console.log("resend actived!");   
      }, 10000);
      
    },[otpResend]);




  //  const  testing();
    
    
  async function onSubmitOtp(){
      // console.log(Number(one));
      const theval = theOtp.join("");

      if(theval.length <6){
        alert("complete the otp field!");
        // AllEmpty();
        return;
      };
      
      
          if(theval !== BkEndOtp){
            alert("opt is wrong");
              AllEmpty();
            CheckOtpChance();
            return;
          };

            try {

              console.log({
                name,gmail,password
              });
              
              
              let res = await axios.post("http://localhost:4040/finPocket/api/auth/registerUser",{
                name:name,
                email:gmail,
                password:password           
              },{
                headers:{
                  "Content-Type":"application/json"
                }
              } );

              if (res){
                setOtpConformed(true);
            localStorage.setItem("UserLogined",true);
            dispatch(UpdateLoggedIn({isLogin:true}));
            setOtpConformed(false);
  
            alert("verified!");
            navigate("/"); 
              }

               setOtpConformed(true);
            localStorage.setItem("UserLogined",true);
            dispatch(UpdateLoggedIn({isLogin:true}));
            setOtpConformed(false);
  
            alert("verified!");
            navigate("/");      

            } catch (error) {
              console.log(error);
              
            }
   
              
          };


          
          // user can try three time only then redirect to signup page and after 1min otp will be changed!
          
          // console.log("otp checker called!"+ BkEndOtp + " " +typeof(BkEndOtp));
    
  return (
    
      <div className={`w-[100vw]  ${visibility ? "flex" : "hidden"} h-[100vh]  justify-center items-center`}>

      {  otpConformed ? (
            <div className='shadow-2xl shadow-green-400 text-white font-semibold text-xl p-5 border-t-2 bg-green-500' > Otp is Conformed ! 😃 </div>
      )
          
       : ( <div className='shadow-2xl p-5 mx-10 sm:mx-0 pt-8 rounded-sm' >
               
            <h1 className='  sm:text-xl underline mb-2' >OTP is send to your Gmail</h1>
            <p className='text-sm sm:text-base mb-2' >Enter the your OTP</p>
             
             <form className='flex  gap-2' >

            {theOtp?.map((value,index)=>{
              console.log(index);
              
                return (
                   <input type="text" 
                   key={index}
                   ref={(e)=>{otpRef.current[index] = e}}
                   onKeyDown={(e)=>{onKeyDownFunc(e,index)}}
                   value={theOtp[index]}
                   onChange={(e)=>{otpOnChange(e.currentTarget.value,index)}}
                   className='w-[40px] border-2 border-slate-300 p-1 text-center' />
                )
            })}

          
               </form>

               {
                OtpChance <= 2 && <p className='text-red-500 mt-5 text-sm sm:text-base' > {otpWarning} </p>
               }
               
               <button onClick={onSubmitOtp} className='p-2 px-3 text-sm sm:text-base font-semibold rounded-sm mt-5 cursor-pointer bg-[#635BFF]  border-2 border-[#635BFF] text-white ' >SUBMIT</button>
               <button onClick={resendOtp} disabled={resendOtp ? false : true} className={`ml-5 border-2 ${otpResend ? "cursor-pointer hover:bg-green-500 hover:text-white hover:border-green-500 active:bg-white active:text-black active:border-black" : "cursor-not-allowed border-slate-300 text-slate-400"}  py-2 px-3 rounded-sm text-sm sm:text-base`} >Resend</button>

        </div> ) }
      
    </div>
  
  
  )
} 

export default OtpChecker






  // <input 
  //              type="number" 
  //              name="" 
  //              value={one} 
  //              className={`border-2 p-1 ${one ? "border-green-500" : "border-black"} text-center w-[40px]`} 
  //              inputMode='numeric' 
  //              pattern='[0-9]*' 
  //              onChange={(e)=>{setOne(e.currentTarget.value.slice(0,1))}} 
  //              min={0} 
  //              max={9} 
  //              maxLength={1} 
  //              required 
  //              id="one" />

  //               <input 
  //              type="number" 
  //              name="" 
  //              value={two} 
  //              className={`border-2 p-1 ${two ? "border-green-500" : "border-black"} text-center w-[40px]`} 
  //              inputMode='numeric' 
  //              pattern='[0-9]*' 
  //              onChange={(e)=>{setTwo(e.currentTarget.value.slice(0,1))}} 
  //              min={0} 
  //              max={9} 
  //              maxLength={1} 
  //              required 
  //              id="two" />

  //               <input 
  //              type="number" 
  //              name="" 
  //              value={three} 
  //              className={`border-2 p-1 ${three ? "border-green-500" : "border-black"} text-center w-[40px]`} 
  //              inputMode='numeric' 
  //              pattern='[0-9]*' 
  //              onChange={(e)=>{setThree(e.currentTarget.value.slice(0,1))}} 
  //              min={0} 
  //              max={9} 
  //              maxLength={1} 
  //              required 
  //              id="three" />

  //               <input 
  //              type="number" 
  //              name="" 
  //              value={four} 
  //              className={`border-2 p-1 ${four ? "border-green-500" : "border-black"} text-center w-[40px]`} 
  //              inputMode='numeric' 
  //              pattern='[0-9]*' 
  //              onChange={(e)=>{setFour(e.currentTarget.value.slice(0,1))}} 
  //              min={0} 
  //              max={9} 
  //              maxLength={1} 
  //              required 
  //              id="four" />

  //               <input 
  //              type="number" 
  //              name="" 
  //              value={five} 
  //              className={`border-2 p-1 ${five ? "border-green-500" : "border-black"} text-center w-[40px]`} 
  //              inputMode='numeric' 
  //              pattern='[0-9]*' 
  //              onChange={(e)=>{setFive(e.currentTarget.value.slice(0,1))}} 
  //              min={0} 
  //              max={9} 
  //              maxLength={1} 
  //              required 
  //              id="five" />

  //               <input 
  //              type="number" 
  //              name="" 
  //              value={six} 
  //              className={`border-2 focus:shadow-2xl ${six ? "border-green-500" : "border-black"} p-1 text-center w-[40px]`} 
  //              inputMode='numeric' 
  //              pattern='[0-9]*' 
  //              onChange={(e)=>{setSix(e.currentTarget.value.slice(0,1))}} 
  //              min={0} 
  //              max={9} 
  //              maxLength={1} 
  //              required 
  //              id="six" />
