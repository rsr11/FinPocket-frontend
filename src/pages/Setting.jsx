import { FiEdit } from "react-icons/fi";
import React, { useState } from 'react'

const Setting = () => {

  const [image,setImg] = useState();

  
  return (
    <section className='m-5 flex flex-col gap-5 sm:flex-row' >
      <section className='flex gap-3 items-center sm:flex-col' >
        <div className='bg-re-500 border rounded-full relative p-2' >
          <div className='size-20 rounded-full bg-pink-400 flex justify-center items-center text-xl font-bold' > R </div>
          <label htmlFor="pofilePic" className="absolute bg-white cursor-pointer bottom-2 right-2" ><FiEdit size={25} /></label>
          <input type="file" className="hidden" accept="image/*" name="pofilePic" id="pofilePic" />
        </div>
        <div>
          <p>Name</p>
          <p>Email</p>
          <p>Student</p>
        </div>
      </section>
      <section>
        <form action="" className='flex flex-col gap-4 mr-15' >
          <h1 className='text-lg font-semibold' >User Details</h1>
          <input type="text" className='border border-slate-300 py-1 pl-2'  placeholder='Name' />
          <input type="text" className='border border-slate-300 py-1 pl-2'  placeholder='password' />
          <input type="text" className='border border-slate-300 py-1 pl-2'  placeholder='profession' />
          <input type="text" className='border border-slate-300 py-1 pl-2'  placeholder='Monthly Income' />
          <button type="submit" className='text-start bg-blue-300 py-2 pl-3' >Update</button>
        </form>
        

      </section>
    </section>
  )
}

export default Setting
