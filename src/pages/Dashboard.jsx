// import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { UpdateLoggedIn } from '../features/Auth/Auth.slice';
// import UserDetail from '../components/UserDetail';
// import Header from '../components/Header';
// import UserForm from '../components/UserForm';
// import axios from 'axios';
// import { toast } from 'react-toastify';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { useState } from 'react';
import AddExpense from '../components/AddExpense';
import api from '../config/axios.config';
import { useQuery } from '@tanstack/react-query';
import Loader from '../components/Loader';

const Dashboard = () => {

  

  // const userName = user?.user_metadata.full_name;


  // console.log(user?.user_metadata.full_name);

  // const navigate = useNavigate();

  // const dispatch = useDispatch();
  const User = useSelector((state) => state.User);

  const [addExpense, setAddExpense] = useState(false);
  // const [data, setData] = useState(null);

  console.log(User);

  const fetchData = async ()=>{
    try {
      const res = await api.get(`/finPocket/api/transaction/getBalanceDetail`,{withCredentials:true});
      return res.data;
    } catch (error) {
      console.error(error);
      return;
    }
  };

  const {data:balanceData,isLoading, isError} = useQuery({queryKey:['balanceData'],queryFn:fetchData,retry:2});
  

  // const userName = localStorage.getItem("UserName");
  console.log(balanceData?.monthlyIncome );
  

  const Months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  // const SavingGoalPercent = Math.floor(Math.random() * 100);
  // const MonthlySpendingPercent = Math.floor(Math.random() * 100);


  //  useEffect(()=>{
  //    async function fetchData(){
  //     try {
  //       const data = await api.get(`/finPocket/api/transaction/getBalanceDetail`,{withCredentials:true});
  //       setData(data?.data);
        
  //     } catch (error) {
  //       setData(null);
  //       console.log(error);  
  //     }};

  //     fetchData();

  //  },[])



  // useEffect(()=>{})  

   


    if(addExpense) return <AddExpense closeFunc={() => setAddExpense(false)} />
  console.log(((balanceData?.totalSpend / Number(User?.monthlyIncome) || 0) * 100).toFixed(2));


   if (isLoading) {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }


  if(isError){
    return <div className="h-screen w-screen flex justify-center items-center" >
       <h1>There is error in loading this page, plz try! later...</h1>
    </div>
  }

  

  return (
    <>
         {/* <Header/>   */}
      <main className='text-white' >
      
      <section className='bg-purple-500 m-5 p-4 rounded-md' >
      <h1 className='text-3xl font-bold mb-3' >Welcome back, {User?.name} ! </h1>
      <p className='text-lg' >Here is your financial overview for {Months[new Date().getMonth()] + " " + new Date().getFullYear()} </p>
      </section>

      <section className='flex flex-col sm:flex-row gap-3 justify-between m-5' >
        <section className='bg-green-500 w-full sm:w-1/3  p-4 px-10 rounded-md' >
          <p className='text-lg font-light' >Current Balance</p>
          <h2 className='text-2xl font-bold' >{`₹${balanceData === null ? "Loading..." : balanceData?.totalAmountRemaining}`}</h2>
        </section>
        <section className='bg-blue-500 w-full sm:w-1/3 sm:mx-5 p-4 px-10 rounded-md'>
          <p className='text-lg font-light' >Total Spend</p>
          <h2 className='text-2xl font-bold' >{`₹${balanceData === null ? "Loading..." : balanceData?.totalSpend}`}</h2>
        </section>
        <section className='bg-purple-500 w-full sm:w-1/3 p-4 px-10 rounded-md'>
          <p className='text-lg font-light' >Saved This Month</p>
          <h2 className='text-2xl font-bold' >{`₹${balanceData === null ? "Loading..." : balanceData?.SavedThisMonth}`}</h2>
        </section>
      </section>

      <section className='text-black m-5 bg-white p-5 rounded-md shadow-sm' >
        <h2 className='text-xl font-semibold' >Monthly Progress</h2>

        <section className='mt-8' >
          <section className='flex justify-between' >
          <p>Monthly Saving</p>
          <span className='text-blue-500' >{(((User?.monthlyIncome - balanceData?.totalSpend) / User?.monthlyIncome) * 100).toFixed(2)}%</span>
          </section>
          <div className='w-full bg-slate-200 h-4 rounded-md mt-2' >
            <div className='bg-green-600 h-4 rounded-md ' style={{width:`${(((User?.monthlyIncome - balanceData?.totalSpend) / balanceData?.monthlyIncome) * 100).toFixed(2)}%`}} ></div>
          </div>
          <p className='text-xs text-slate-600 mt-1' >₹{balanceData?.totalSpend} of ₹{User?.monthlyIncome}</p>
        </section>

        <section className='mt-8' >
          <section className='flex justify-between' >
          <p>Monthly Spending</p>
          <span className='text-blue-500' >{ User?.monthlyIncome > 0 ? ((balanceData?.totalSpend / Number(User?.monthlyIncome) || 0) * 100).toFixed(2) : 0}%</span>
          </section>
          <div className='w-full bg-slate-200 h-4 rounded-md mt-2' >
            <div className='bg-blue-600 h-4 rounded-md ' style={{width:`${ User?.monthlyIncome > 0 ? ((balanceData?.totalSpend / User?.monthlyIncome || 0) * 100).toFixed(2) : 0}%`}} ></div>
          </div>
          <p className='text-xs text-slate-600 mt-1' >₹{balanceData?.totalSpend} of ₹{User?.monthlyIncome}</p>
        </section>

      </section>


      <section className='px-5 pb-5' >
        <button onClick={()=>{setAddExpense(true)}} className=' w-full text-2xl font-bold cursor-pointer flex justify-center bg-purple-500 items-center rounded-md py-3 gap-2' > <span> Add Expense </span> <IoIosAddCircleOutline size={30} fontSize={25} /> </button>
      </section>
     
      {/* <header> */}
         {/* <h1 className=' sm:left-24 left-2 text-xl sm:text-2xl top-1 sm:top-8 ml-10  p-10' >FinPocket 🪙 </h1> */}
        

      {/* </header> */}


    {/* <button onClick={LogOut} className='border-2 cursor-pointer p-2 m-10' >Sign out</button> */}

   {/* <UserDetail/> */}

 </main>
    </>
  )
}

export default Dashboard
