// import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

  // const userName = user?.user_metadata.full_name;

  // console.log(user?.user_metadata.full_name);

  const navigate = useNavigate();


  // useEffect(()=>{})  

    const LogOut = ()=>{
      console.log("clicked");
      
        localStorage.removeItem("UserLogined");
        navigate("/login");
        
    }
  

  return (
    <>
      <h1>Welcome </h1>

    <button onClick={LogOut} className='border-2 cursor-pointer p-2 m-10' >Sign out</button>

    </>
  )
}

export default Dashboard
