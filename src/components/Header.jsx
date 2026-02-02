import React, { memo } from 'react'
// import { FaRegUserCircle } from "react-icons/fa";
import { FaRegUser } from 'react-icons/fa6';
import { IoMdNotifications } from 'react-icons/io';
import { useSelector } from 'react-redux';
import AuthLayout from '../Layout/AuthLayout';










const Header = () => {

    // const userLogined = localStorage.getItem("UserLogined");
    // const currentLink = window.location.href.split("/")[3];

  const User = useSelector((state) => state.User);
  console.log(User);
  // const User=true;
  
  // const name = useSelector(state => state.User.name);
  // const pofession = useSelector(state => state.User.profession);
  //   console.log(name);
    


  return (
    <header className='bg-white  shadow-lg -2 py-2 sticky top-0 z-30 flex justify-between items-center px-10' >
            
            <section className='flex items-center' >
             <span className='text-3xl bg-purple-600 p-1 rounded-sm' >🪙</span>   
             <section className=' p-4' >
               <h1 className=' text-xl font-bold  b-red-200 sm:text-2xl ' >FinPocket </h1>
               <p className='text-xs text-slate-500' >Your Finance Dashboard</p>
             </section>
            </section>
            
            { User?.isLoggedIn && 
            <section className='flex gap-5 items-center' >
              <IoMdNotifications size={28} />
              <section className='flex bg-slate-200 px-2 py-1 rounded-md items-center gap-2' >
                <span className='bg-purple-700 p-2 rounded-md' >
                  <FaRegUser size={15} color='white'  />
                </span>
                <section className='hidden sm:block' >
                  <h3 className='font-semi-bold' >{User.name}</h3>
                  <p className='text-xs text-slate-500' >{User.profession}</p>
                </section>
              </section>
            </section>  }
            {/* <p>{currentLink}</p> */}
                                                                                                                            

    </header>
  )
}

export default memo(Header)

{/* {
  userLogined && currentLink !== "login" && currentLink !== "signup" ? (
    <section className='text-md b-red-200 sm:text-lg flex items-center gap-2 p-4' > <div className='size-10 rounded-full bg-black' ></div> User</section>
  ): (
     <></>
  )
} */}