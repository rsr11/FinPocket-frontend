import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';
import React from 'react'
import { IoClose } from 'react-icons/io5'
import api from '../config/axios.config';




const AddExpense = ({closeFunc}) => {
   
    const getExpensesData = async ()=>{

        const data = await api.get("/finPocket/api/transaction/categoryListing",
                     { headers:{"Content-Type":"application/json"},
                       withCredentials:true
                 });

        return data.data;

    };

    const {isPending, data, error} = useQuery({ queryKey: ['expenses'], queryFn: getExpensesData }); // to be implemented
    
  return (
    <section className='sm:w-full w-full h-[80%] flex justify-center items-center bg-slate-100'>

     <form action="" className='bg-white sm:p-5 mx-2 p-2 w-[90%] sm:w-fit rounded-md flex flex-col' >
        <section className='flex justify-between ' >
        <h1 className='font-bold text-lg mb-8' >Add Expense</h1>
        <IoClose className='font-bold cursor-pointer' size={25} onClick={closeFunc} />
        </section>

        <label htmlFor="amount">Amount :{`(₹)`} </label>
        <input type="number" id='amount' className='mb-5 p-2 border rounded-sm' name='amount' min={1} max={200000} required />

        <label htmlFor="category"  >Category :</label>
        <select className='mb-5 sm:min-w-80 border rounded-sm p-2' name="category" id="category" >

            { isPending && <option value="Loading" >Loading..</option> }
            { error && <option value="Error" >Error Loading Categories</option> }
            {/* { data && data.map((val)=>{
                return <option key={val} value={val} >{val}</option>
            }) }; */}
            {data && data?.data?.map((val)=>{
                return <option key={val} value={val} >{val}</option>
            }) };
            {/* // <option value="Food" >Food</option>  */}
            </select>

        <button type='submit' className='bg-blue-500 p-2 text-white rounded-sm' >Add Expenses</button>


     </form>

      
    </section>
  )
}

export default AddExpense
