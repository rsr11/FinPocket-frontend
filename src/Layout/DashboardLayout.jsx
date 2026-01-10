import React from 'react'
import Header from '../components/Header'
import { NavLink, Outlet } from 'react-router-dom'
import { MdLogout, MdOutlineHistory, MdOutlineSettings } from 'react-icons/md'
import { RiHome3Line } from 'react-icons/ri'
import { TbDeviceDesktopAnalytics } from 'react-icons/tb'
import { GoDotFill } from "react-icons/go";

const DashboardLayout = () => {
  return (
    <div>
       <Header/>
       <section className='flex' >
          <aside className='w-1/5 border-r  border-slate-400' >
            <ul>
                <li className='py-4 text-md px-3 mx-4 my-3 hover:bg-slate-200 bg-purple-500 text-white font-semibold rounded-md' > <NavLink className={"flex items-center gap-2"} > <RiHome3Line size={22} /> Dashboard </NavLink></li>
                <li className='py-4 text-md px-3 mx-4 mb-3 hover:bg-slate-200 text-slate-700 font-semibold rounded-md' > <NavLink className={"flex items-center gap-2"} > <MdOutlineHistory size={22} /> History </NavLink></li>
                <li className='py-4 text-md px-3 mx-4 mb-3 hover:bg-slate-200 text-slate-700 font-semibold rounded-md' > <NavLink className={"flex items-center gap-2"} > <TbDeviceDesktopAnalytics size={22} /> Analytics </NavLink> </li>
                <li className='py-4 text-md px-3 mx-4 mb-3 hover:bg-slate-200 text-slate-700 font-semibold rounded-md' > <NavLink className={"flex items-center gap-2"} > <MdOutlineSettings size={22} /> Setting </NavLink> </li>

                <hr className='px-3 mx-4 mt-8' />

                <li className='py-4 text-md px-3 mx-4 mt-5 hover:bg-red-100 text-red-500 font-semibold rounded-md' > <NavLink className={"flex items-center gap-2"}> <MdLogout size={22} /> Logout </NavLink> </li>  

                <section className='py-4 px-3 mx-4 border rounded-md bg-slate-200 border-slate-400 mt-5' >
                    <h3 className='text-slate-800 font-light font-xs' >Monthly Income</h3>
                    <h2 className='text-2xl font-bold' > ₹ 20,000</h2>
                    <h3 className='flex items-center text-green-500' > <GoDotFill className='animate-bounce' /> Active</h3>
                </section>
                
            </ul>   
          </aside>

          <section className='w-4/5 ' > 
         <Outlet/>
         </section>

       </section>

      
    </div>
  )
}

export default DashboardLayout
