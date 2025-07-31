import React, { useState } from 'react'

const OtpChecker = ({visibility}) => {

    console.log("too", visibility);

    const [one,setOne] = useState();
    const [two,setTwo] = useState();
    const [three,setThree] = useState();
    const [four,setFour] = useState();
    const [five,setFive] = useState();
    const [six,setSix] = useState();    

    
  return (
    <div className={`w-[100vw]  ${visibility ? "flex" : "hidden"} h-[100vh]  justify-center items-center`}>

        <div>
               
            <h1>OTP is send to your email.</h1>
            <p className='mb-5' >Enter the your OTP</p>
             
             <section className='flex shadow-2xl gap-2' >
            <input 
               type="number" 
               name="" 
               value={one} 
               className='border-2 p-1 text-center w-[40px]' 
               inputMode='numeric' 
               pattern='[0-9]*' 
               onChange={(e)=>{setOne(e.currentTarget.value.slice(0,1))}} 
               min={0} 
               max={9} 
               maxLength={1} 
               required 
               id="" />

                <input 
               type="number" 
               name="" 
               value={two} 
               className='border-2 p-1 text-center w-[40px]' 
               inputMode='numeric' 
               pattern='[0-9]*' 
               onChange={(e)=>{setTwo(e.currentTarget.value.slice(0,1))}} 
               min={0} 
               max={9} 
               maxLength={1} 
               required 
               id="" />

                <input 
               type="number" 
               name="" 
               value={three} 
               className='border-2 p-1 text-center w-[40px]' 
               inputMode='numeric' 
               pattern='[0-9]*' 
               onChange={(e)=>{setThree(e.currentTarget.value.slice(0,1))}} 
               min={0} 
               max={9} 
               maxLength={1} 
               required 
               id="" />

                <input 
               type="number" 
               name="" 
               value={four} 
               className='border-2 p-1 text-center w-[40px]' 
               inputMode='numeric' 
               pattern='[0-9]*' 
               onChange={(e)=>{setFour(e.currentTarget.value.slice(0,1))}} 
               min={0} 
               max={9} 
               maxLength={1} 
               required 
               id="" />

                <input 
               type="number" 
               name="" 
               value={five} 
               className='border-2 p-1 text-center w-[40px]' 
               inputMode='numeric' 
               pattern='[0-9]*' 
               onChange={(e)=>{setFive(e.currentTarget.value.slice(0,1))}} 
               min={0} 
               max={9} 
               maxLength={1} 
               required 
               id="" />

                <input 
               type="number" 
               name="" 
               value={six} 
               className='border-2 focus:shadow-2xl p-1 text-center w-[40px]' 
               inputMode='numeric' 
               pattern='[0-9]*' 
               onChange={(e)=>{setSix(e.currentTarget.value.slice(0,1))}} 
               min={0} 
               max={9} 
               maxLength={1} 
               required 
               id="" />

               </section>
               <button className='p-2 px-3 font-semibold rounded-sm mt-5 cursor-pointer bg-[#635BFF]  border-2 border-[#635BFF] text-white ' >SUBMIT</button>
               <button className='ml-5 border-2  py-2 px-3 rounded-sm' >Resend</button>

        </div>
      
    </div>
  )
}

export default OtpChecker
