// import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { UpdateLoggedIn } from '../features/Auth/Auth.slice';
// import UserDetail from '../components/UserDetail';
// import Header from '../components/Header';
// import UserForm from '../components/UserForm';
import axios from 'axios';
import { toast } from 'react-toastify';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { useState } from 'react';
import AddExpense from '../components/AddExpense';

const Dashboard = () => {

  // const userName = user?.user_metadata.full_name;

  // console.log(user?.user_metadata.full_name);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [addExpense, setAddExpense] = useState(false);

  // const userName = localStorage.getItem("UserName");

  const Months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  const SavingGoalPercent = Math.floor(Math.random() * 100);
  const MonthlySpendingPercent = Math.floor(Math.random() * 100);


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


    if(addExpense) return <AddExpense closeFunc={() => setAddExpense(false)} />
  

  return (
    <>
         {/* <Header/>   */}
      <main className='bg-slate-100 text-white' >
      
      <section className='bg-purple-500 m-5 p-4 rounded-md' >
      <h1 className='text-3xl font-bold mb-3' >Welcome back, {`Rajeshwar Singh`} ! </h1>
      <p className='text-lg' >Here is your financial overview for {Months[new Date().getMonth()] + " " + new Date().getFullYear()} </p>
      </section>

      <section className='flex justify-between m-5' >
        <section className='bg-green-500 w-1/3  p-4 px-10 rounded-md' >
          <p className='text-lg font-light' >Current Balance</p>
          <h2 className='text-2xl font-bold' >{`₹${Math.floor(Math.random() * 10000)}`}</h2>
        </section>
        <section className='bg-blue-500 w-1/3 mx-5 p-4 px-10 rounded-md'>
          <p className='text-lg font-light' >Total Spend</p>
          <h2 className='text-2xl font-bold' >{`₹${Math.floor(Math.random() * 5000)}`}</h2>
        </section>
        <section className='bg-purple-500 w-1/3 p-4 px-10 rounded-md'>
          <p className='text-lg font-light' >Saved This Month</p>
          <h2 className='text-2xl font-bold' >{`₹${Math.floor(Math.random() * 5000)}`}</h2>
        </section>
      </section>

      <section className='text-black m-5 bg-white p-5 rounded-md shadow-sm' >
        <h2 className='text-xl font-semibold' >Monthly Progress</h2>

        <section className='mt-8' >
          <section className='flex justify-between' >
          <p>Saving Goal</p>
          <span className='text-blue-500' >{SavingGoalPercent}%</span>
          </section>
          <div className='w-full bg-slate-200 h-4 rounded-md mt-2' >
            <div className='bg-purple-600 h-4 rounded-md ' style={{width:`${SavingGoalPercent}%`}} ></div>
          </div>
          <p className='text-xs text-slate-600 mt-1' >₹8,500 of ₹15,000</p>
        </section>

        <section className='mt-8' >
          <section className='flex justify-between' >
          <p>Monthly Spending</p>
          <span className='text-blue-500' >{MonthlySpendingPercent}%</span>
          </section>
          <div className='w-full bg-slate-200 h-4 rounded-md mt-2' >
            <div className='bg-blue-600 h-4 rounded-md ' style={{width:`${MonthlySpendingPercent}%`}} ></div>
          </div>
          <p className='text-xs text-slate-600 mt-1' >₹8,500 of ₹15,000</p>
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
