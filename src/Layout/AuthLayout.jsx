// import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';
import Loader from '../components/Loader';
import { useDispatch } from 'react-redux';
import { UpdateLoggedIn } from '../features/Auth/Auth.slice';
import api from '../config/axios.config';

const AuthLayout = ({children}) => {
   
 const [loading, setLoading] = useState(true);
 const [data, setData] = useState(false);
     const dispatch = useDispatch();

  useEffect(()=>{
    (async()=>{
      try {
      const res = await api.get(`/finPocket/api/auth/profile`,{withCredentials:true});
    if(res.status===200){
      setData(res.data);
      console.log(res.data.user);
      
      dispatch(UpdateLoggedIn({isLoggedIn:true,name:res.data.user.name,email:res?.data?.user?.email,profession:res.data.user.Profession,monthlyIncome:res.data.user.MonthlyIncome}));
      // dispatch(UpdateLoggedIn({}))
      setLoading(false);
    } 
    
    }catch (error) {
      setData(false);
      dispatch(UpdateLoggedIn({isLoggedIn:false}));
      setLoading(false);
      console.log(error);
     }
    })();


        
  },[]);


if(loading) return <div className='h-screen w-screen flex justify-center items-center' > <Loader/> </div>  

  return (
    <main>
       { data ? children : <Navigate to={'/login'} replace /> }
    </main>
  )
}

export default AuthLayout
