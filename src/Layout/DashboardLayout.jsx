import React from 'react'
import Header from '../components/Header'
import { NavLink, Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div>
       <Header/>
       <section className='flex' >
          <aside className='w-1/5' >
            <ul>
                <li className='py-4 text-md px-3 mx-4 my-3 bg-amber-200 font-semibold rounded-md' > <NavLink> Dashboard </NavLink></li>
                <li className='py-4 text-md px-3 mx-4 mb-3 bg-amber-200 font-semibold rounded-md' > <NavLink> History </NavLink></li>
                <li className='py-4 text-md px-3 mx-4 mb-3 bg-amber-200 font-semibold rounded-md' > <NavLink> Analytics </NavLink> </li>
                <li className='py-4 text-md px-3 mx-4 mb-3 bg-amber-200 font-semibold rounded-md' > <NavLink> Setting </NavLink> </li>

                <hr className='px-3 mx-4 mt-8' />

                <li className='py-4 text-md px-3 mx-4 mt-5 bg-amber-200 text-red-500 font-semibold rounded-md' > <NavLink> Logout </NavLink> </li>  
                
            </ul>   
          </aside>

          <section className='w-4/5 mt-4' > 
         <Outlet/>
         </section>

       </section>

      
    </div>
  )
}

export default DashboardLayout
