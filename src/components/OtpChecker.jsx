import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const OtpChecker = ({visibility, otp}) => {

    const navigate = useNavigate();

    console.log("too", visibility);

    const [one,setOne] = useState();
    const [two,setTwo] = useState();
    const [three,setThree] = useState();
    const [four,setFour] = useState();
    const [five,setFive] = useState();
    const [six,setSix] = useState();    

    const[OtpChance, setOtpChance] = useState(2);
    const[otpWarning,setOtpWarning] = useState("");
    const[otpConformed, setOtpConformed] = useState(false);

    
    
    console.log(otp);
    
    function AllEmpty(){
      console.log("all empty");
      
      setOne("");
      setTwo("");
      setThree("");
      setFour("");
      setFive("");
      setSix("");
    }

    function CheckOtpChance(){
         if(OtpChance === 0){
             navigate(0);
         }else{
            setOtpChance((prev)=> prev-=1);

            setOtpWarning(` ⚠️ ${OtpChance} chance is left, after that you are not allowed to enter otp!`)


         }
    };
   
    function onSubmitOtp(otp){
      
      // console.log(Number(one));
      if(one === undefined || two === undefined || three === undefined || four === undefined || five === undefined || six === undefined){
           alert("Enter the otp first!");
           return; }
      
      if(one === "" || two === "" || three === "" || four === "" || five === "" || six === "" ){
        alert("enter the opt first!");
        return;  }
      
        if(one != otp[0] || two != otp[1] || three != otp[2] || four != otp[3] || five != otp[4] || six != otp[5] ){
            alert("opt is wrong");
            AllEmpty();
            CheckOtpChance();
            return;  }

      setOtpConformed(true);
      localStorage.setItem("UserLogined",true);

      setTimeout(() => {
         setOtpConformed(false);
         navigate("/");
      }, 1000);
      
        
    
}

// user can try three time only then redirect to signup page and after 1min otp will be changed!

    
  return (

    
    
      <div className={`w-[100vw]  ${visibility ? "flex" : "hidden"} h-[100vh]  justify-center items-center`}>

      {  otpConformed ? (
            <div className='shadow-2xl shadow-green-400 text-white font-semibold text-xl p-5 border-t-2 bg-green-500' > Otp is Conformed ! 😃 </div>
      )
          
       : ( <div className='shadow-2xl p-5 mx-10 sm:mx-0 pt-8 rounded-sm' >
               
            <h1 className='  sm:text-xl underline mb-2' >OTP is send to your Gmail</h1>
            <p className='text-sm sm:text-base mb-2' >Enter the your OTP</p>
             
             <form className='flex  gap-2' >
            <input 
               type="number" 
               name="" 
               value={one} 
               className={`border-2 p-1 ${one ? "border-green-500" : "border-black"} text-center w-[40px]`} 
               inputMode='numeric' 
               pattern='[0-9]*' 
               onChange={(e)=>{setOne(e.currentTarget.value.slice(0,1))}} 
               min={0} 
               max={9} 
               maxLength={1} 
               required 
               id="one" />

                <input 
               type="number" 
               name="" 
               value={two} 
               className={`border-2 p-1 ${two ? "border-green-500" : "border-black"} text-center w-[40px]`} 
               inputMode='numeric' 
               pattern='[0-9]*' 
               onChange={(e)=>{setTwo(e.currentTarget.value.slice(0,1))}} 
               min={0} 
               max={9} 
               maxLength={1} 
               required 
               id="two" />

                <input 
               type="number" 
               name="" 
               value={three} 
               className={`border-2 p-1 ${three ? "border-green-500" : "border-black"} text-center w-[40px]`} 
               inputMode='numeric' 
               pattern='[0-9]*' 
               onChange={(e)=>{setThree(e.currentTarget.value.slice(0,1))}} 
               min={0} 
               max={9} 
               maxLength={1} 
               required 
               id="three" />

                <input 
               type="number" 
               name="" 
               value={four} 
               className={`border-2 p-1 ${four ? "border-green-500" : "border-black"} text-center w-[40px]`} 
               inputMode='numeric' 
               pattern='[0-9]*' 
               onChange={(e)=>{setFour(e.currentTarget.value.slice(0,1))}} 
               min={0} 
               max={9} 
               maxLength={1} 
               required 
               id="four" />

                <input 
               type="number" 
               name="" 
               value={five} 
               className={`border-2 p-1 ${five ? "border-green-500" : "border-black"} text-center w-[40px]`} 
               inputMode='numeric' 
               pattern='[0-9]*' 
               onChange={(e)=>{setFive(e.currentTarget.value.slice(0,1))}} 
               min={0} 
               max={9} 
               maxLength={1} 
               required 
               id="five" />

                <input 
               type="number" 
               name="" 
               value={six} 
               className={`border-2 focus:shadow-2xl ${six ? "border-green-500" : "border-black"} p-1 text-center w-[40px]`} 
               inputMode='numeric' 
               pattern='[0-9]*' 
               onChange={(e)=>{setSix(e.currentTarget.value.slice(0,1))}} 
               min={0} 
               max={9} 
               maxLength={1} 
               required 
               id="six" />

               </form>

               {
                OtpChance <= 2 && <p className='text-red-500 mt-5 text-sm sm:text-base' > {otpWarning} </p>
               }
               
               <button onClick={()=>{onSubmitOtp(otp)}} className='p-2 px-3 text-sm sm:text-base font-semibold rounded-sm mt-5 cursor-pointer bg-[#635BFF]  border-2 border-[#635BFF] text-white ' >SUBMIT</button>
               <button className='ml-5 border-2  py-2 px-3 rounded-sm text-sm sm:text-base' >Resend</button>

        </div> ) }
      
    </div>
  
  
  )
}

export default OtpChecker
