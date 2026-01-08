// import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { UpdateLoggedIn } from '../features/Auth/Auth.slice';
import UserDetail from '../components/UserDetail';
import Header from '../components/Header';
import UserForm from '../components/UserForm';

const Dashboard = () => {

  // const userName = user?.user_metadata.full_name;

  // console.log(user?.user_metadata.full_name);

  const navigate = useNavigate();

  const dispatch = useDispatch();


  // useEffect(()=>{})  

    const LogOut = ()=>{
      console.log("clicked");
      
        localStorage.removeItem("UserLogined");
        dispatch(UpdateLoggedIn(false));
        navigate("/login");
        
    }
  

  return (
    <>
         <Header/>  
      <main className='blu' >

      <h1>Welcome {} </h1>
     
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
