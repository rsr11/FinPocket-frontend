import { FiEdit } from "react-icons/fi";
import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { UpdateAvator, UpdateLoggedIn } from "../features/Auth/Auth.slice";

const Setting = () => {

  const User = useSelector((state) => state.User);
  const dispatch = useDispatch();
  const [image,setImg] = useState();

  console.log( "the avator ",User?.avatar);
  

   const handleAvatarImg = (e) => {
    const file = e.target.files[0]; 
    setImg(file);
    console.log(e.target.files[0]);
    const imgUrl = URL.createObjectURL(file);
    dispatch(UpdateAvator(imgUrl));
    console.log(imgUrl);
    setImg(imgUrl);
  }

  
  return (
    <section className='m-5 flex flex-col gap-5 sm:flex-row' >
      <section className='flex gap-3 items-center sm:flex-col' >
        <div className='bg-re-500 border rounded-full relative p-2' >
          <div className='size-20 rounded-full bg-pink-400 flex justify-center items-center text-xl font-bold' > {image || User?.avatar?.length > 0 ? <img src={image || User?.avatar} alt="Avatar" className="size-20 rounded-full object-cover" /> : "R"} </div>
          <label htmlFor="pofilePic" className="absolute bg-white cursor-pointer bottom-2 right-2" ><FiEdit size={25} /></label>
          <input type="file" className="hidden" accept="image/*" onChange={handleAvatarImg} name="pofilePic" id="pofilePic" />
        </div>
        <div>
          <p className="font-bold text-xl" >{User?.name?.toUpperCase()}</p>
          <p>{User?.email}</p>
          <p className="bg-slate-300 px-2" >{User?.profession}</p>
        </div>
      </section>
      <section>
        <form action="" className='flex flex-col gap-4 mr-15' >
          <h1 className='text-lg font-semibold' >User Details</h1>
          <input type="text" className='border border-slate-300 py-1 pl-2' value={User?.name} disabled placeholder='Name' />
          <input type="text" className='border border-slate-300 py-1 pl-2' value={`************`} disabled placeholder='password' />
          <input type="text" className='border border-slate-300 py-1 pl-2' value={User?.profession} disabled  placeholder='profession' />
          <input type="text" className='border border-slate-300 py-1 pl-2' value={User.monthlyIncome} disabled placeholder='Monthly Income' />
          <button type="submit" className='text-start bg-blue-600 text-white py-2 pl-3' >Update</button>
        </form>
        

      </section>
    </section>
  )
}

export default Setting
