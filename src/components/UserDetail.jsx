import React from 'react'
import WelcomeBoy from "../assest/welcome-boy.svg";
import CoinMascot from './CoinMascot';


const UserDetail = () => {
  return (
    <section className='flex absolute  w-[80%] rounded-md h-[80%] top-[50%]  translate-[-50%] left-[50%]  flex-col items-center' >

      {/* <CoinMascot/> */}
   
   <section className='flex items-center' >
    <h1 className='text-5xl font-bold' > </h1> 
   </section>
    {/* <img src={WelcomeBoy} alt="" className=''  srcSet="" /> */}



    <form className='border-2 bg-slate-50 rounded-md mt-28 flex flex-col w-[24vw] p-10'  >
       <label htmlFor="earn-money">How much you earn Monthly : </label>
       
       <input type="number" name="earn-money" className='border p-1 mb-5' id="earn-money" />

        <label htmlFor="prof">Your Pofession :</label>
        <select name="prof" className='border mb-5 p-1' id="prof">
            <option value="">Student</option>
            <option value="">Freelancer</option>
            <option value="">Private Sector</option>
            <option value="">Govt Sector</option>
            <option value="">Other</option>
        </select>
       {/* <input type="number" name="earn-money" className='border-2 border-slate-200' id="earn-money" /> */}

        <label htmlFor="earn-money">How much you wanna save this month ?</label>
       <input type="number" name="earn-money" className='border p-1 mb-5 border-' id="earn-money" />

       <button className='border-2 bg-[#8b5cf6] text-white p-1 border-[#8b5cf6]' >Next {`>`}</button>


    </form>
    
    </section>
  )
}

export default UserDetail
