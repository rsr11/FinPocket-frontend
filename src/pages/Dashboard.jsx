// import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { UpdateLoggedIn } from '../features/Auth/Auth.slice';
import UserDetail from '../components/UserDetail';
import Header from '../components/Header';
import UserForm from '../components/UserForm';
import axios from 'axios';
import { toast } from 'react-toastify';

const Dashboard = () => {

  // const userName = user?.user_metadata.full_name;

  // console.log(user?.user_metadata.full_name);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const userName = localStorage.getItem("UserName");


  // useEffect(()=>{})  

    const LogOut = async ()=>{
      console.log("clicked");

     try {
      const data = await axios.get("http://localhost:4040/finPocket/api/auth/logout",{
        withCredentials:true
      });

      if(data.status === 200){
        console.log("logged out successfully");
        toast.success("logged out successfully",{autoClose:1000});
        localStorage.removeItem("UserLogined");
        dispatch(UpdateLoggedIn(false));
        navigate("/login");
        };
      }catch(error) {
         console.log(error); 
      }      
    };
  

  return (
    <>
         <Header/>  
      <main className='blu' >

      <h1>Welcome {userName} </h1>
     
      {/* <header> */}
         {/* <h1 className=' sm:left-24 left-2 text-xl sm:text-2xl top-1 sm:top-8 ml-10  p-10' >FinPocket 🪙 </h1> */}
        

      {/* </header> */}


    <button onClick={LogOut} className='border-2 cursor-pointer p-2 m-10' >Sign out</button>

   {/* <UserDetail/> */}

 </main>
    </>
  )
}

export default Dashboard
