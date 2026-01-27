import Header from '../components/Header'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import { MdLogout, MdOutlineHistory, MdOutlineSettings } from 'react-icons/md'
import { RiHome3Line } from 'react-icons/ri'
import { TbDeviceDesktopAnalytics } from 'react-icons/tb'
import { GoDotFill } from "react-icons/go";
// import axios from 'axios'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { UpdateLoggedIn } from '../features/Auth/Auth.slice'
import api from '../config/axios.config'
// import { isAction } from '@reduxjs/toolkit'

const DashboardLayout = () => {


    const navigate = useNavigate();
    const dispatch = useDispatch();
    const User = useSelector((state) => state.User);
    
    // alert(Location);

    const logoutFunc = async()=>{
       try {
        const res = await api.get(`/finPocket/api/auth/logout`,{withCredentials:true});
        
        if(res.status === 200){
           toast("User logged out successfully !!");
           dispatch(UpdateLoggedIn({isLoggedIn:false}));
           navigate("/login");
        }
        

       } catch (error) {
          toast(error.response.msg);
       }
    }

    // bg-purple-500 text-white

  return (
    <div>
       <Header/>
       <section className='flex' >
        
          <aside className='w-1/5 border-r min-h-screen border-slate-400' >
            <ul className='sm:p-4 p-2 flex text-md flex-col gap-2 sm:mx-4 my-3 font-semibold' >
                <li  className={` `} > 
                <NavLink to={`/`} className={({isActive})=>  isActive ? "bg-purple-500 flex p-4 text-white rounded-md items-center gap-2" : "bg-white flex p-4 text-slate-700 rounded-md items-center gap-2"} > <RiHome3Line size={22} /> <span className='hidden sm:block' >Dashboard</span>  </NavLink>
                </li>

{/* `flex p-4 hover:bg-slate-200 bg-white text-slate-700 rounded-md items-center gap-2` */}

                <li className='' > 
                  <NavLink to={`/history`} className={({isActive})=>  isActive ? "bg-purple-500 flex p-4 text-white rounded-md items-center gap-2" : "bg-white flex p-4 text-slate-700 rounded-md items-center gap-2"} > <MdOutlineHistory size={22} /> <span className='hidden sm:block' > History </span></NavLink>
                </li>
                <li className='' > 
                  <NavLink to={`/analysis`} className={({isActive})=>  isActive ? "bg-purple-500 flex p-4 text-white rounded-md items-center gap-2" : "bg-white flex p-4 text-slate-700 rounded-md items-center gap-2"} > <TbDeviceDesktopAnalytics size={22} /> <span className='hidden sm:block' > Analytics </span></NavLink> 
                </li>

                <li className='' >
                  <NavLink to={`/setting`} className={({isActive})=>  isActive ? "bg-purple-500 flex p-4 text-white rounded-md items-center gap-2" : "bg-white flex p-4 text-slate-700 rounded-md items-center gap-2"} > <MdOutlineSettings size={22} /> <span className='hidden sm:block' > Setting </span></NavLink> 
                </li>


                <hr className='px-3 mx-4 mt-8' />

                <button type='button' onClick={logoutFunc} className='py-4 text-md sm:px-3 mx-4  hover:bg-red-100 text-red-500 font-semibold rounded-md' >  <NavLink className={"flex items-center gap-2"}> <MdLogout size={22} /> <span className='hidden sm:block' >Logout </span>  </NavLink> </button>  

                <section className='py-4 px-2 sm:px-3 sm:mx-4 border rounded-md mt-5 bg-slate-200 border-slate-400 ' >
                    <h3 className='text-slate-800 font-light font-xs hidden sm:block' >Monthly Income</h3>
                    <h2 className='text-2xl font-bold hidden sm:block' > ₹ {User?.monthlyIncome}</h2>
                    <h3 className='flex items-center text-xs text-green-500' > <GoDotFill className='animate-bounce' /> Active</h3>
                </section>
                
            </ul>   
          </aside>

          <section className='w-4/5 bg-slate-100 ' > 
         <Outlet/>
         </section>

       </section>

      
    </div>
  )
}

export default DashboardLayout
