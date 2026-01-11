import React from 'react'
import Loader from '../components/Loader'
import { TbDeviceDesktopAnalytics } from 'react-icons/tb';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const Analysis = () => {


  const colors = ["blue", "green", "red", "purple", "orange", "yellow", "pink"];

  const getAnalysisData = async ()=>{
    const data = await axios.get("http://localhost:4040/finPocket/api/transaction/analyticSummary",
                 { headers:{"Content-Type":"application/json"},
                   withCredentials:true
             });
         
             return data?.data;

            }; 

  const {isPending, data, isError} = useQuery({ queryKey: ['analysis'], queryFn: getAnalysisData}); // to be implemented

  if(isPending){
    return (
    <section className='flex justify-center items-center h-full'> <Loader /> </section>
    )
  };

  if(isError){
    return (
      <section className='m-5' >
        <h1 className='text-red-500 font-semibold text-lg' >Error Loading Analytics Data!</h1>
      </section>
    )
  };

  console.log(data);
  

  return (

    <section className='m-5'>
     
    <h1 className='font-semibold flex gap-2 items-center text-3xl' >Analytics <TbDeviceDesktopAnalytics size={30}/> </h1>
     <section className='flex gap-5' >
     <section className='w-1/2 mt-5 h-full rounded-md shadow-md bg-white' >
      <h1 className='p-5 text-lg font-semibold' >Spending Breakdown</h1>
     <section className='flex flex-col justify-center items-center ' >
      <ResponsiveContainer width="100%" height={280} >
        <PieChart>
          <Pie dataKey="totalAmount" nameKey="category" isAnimationActive={true} data={data?.data} cx="50%" cy="50%" outerRadius={100} innerRadius={60} paddingAngle={5} fill="#8884d8"  >
            
            {data?.data?.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]} />
            ))};
            </Pie>
            <Tooltip isAnimationActive={true} />
        </PieChart>
      </ResponsiveContainer>

      <section className='grid gap-2 grid-cols-3 h-fit grid-rows-3 w-full pt-5 px-10'> 
        {data?.data?.map((val, index)=>{
          return <section key={val.category} className='flex gap-2 items-center mb-2' >
            <div className='w-4 h-4 ' style={{backgroundColor: colors[index]}} ></div>
            <span className='font-semibold' > {val.category} : </span> <span> ₹{val.totalAmount} </span>
          </section>
        })} 
      </section>

    
      <p className='w-full border-t px-10 py-5 font-semibold' >Total Amount :  ₹{data?.data?.reduce((acc, val) => acc + val.totalAmount, 0)} </p>

      </section>
      </section>

      <section className='w-1/2 bg-white mt-5 h-full rounded-md shadow-md ' >
      <h1 className='p-5 text-lg font-semibold' >Last 10 Days Spending</h1>

      </section>
      </section>
      
    
    </section>
  )
}

export default Analysis
