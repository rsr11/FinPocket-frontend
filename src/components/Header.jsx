import React from 'react'

const Header = () => {

    const userLogined = localStorage.getItem("UserLogined");
    const currentLink = window.location.href.split("/")[3];

  return (
    <header className='b-red-400 border-b -2 py-5 flex justify-between items-center px-10' >
            <h1 className=' text-xl b-red-200 sm:text-2xl  p-4' >FinPocket 🪙 </h1>
            {/* <p>{currentLink}</p> */}
           
         {
           userLogined && currentLink !== "login" && currentLink !== "signup" ? (
             <section className='text-md b-red-200 sm:text-lg flex items-center gap-2 p-4' > <div className='size-10 rounded-full bg-black' ></div> User</section>
           ): (
              <></>
           )
         }

    </header>
  )
}

export default Header
