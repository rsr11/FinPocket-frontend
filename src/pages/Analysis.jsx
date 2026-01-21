import React from 'react'
import Loader from '../components/Loader'
import { TbDeviceDesktopAnalytics } from 'react-icons/tb';
import { Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
// import { X } from 'lucide-react';
import { RechartsDevtools } from '@recharts/devtools';

const Analysis = () => {


  const colors = ["blue", "green", "red", "purple", "orange", "yellow", "pink"];

  const getAnalysisData = async ()=>{

    try {
      const data = await axios.get("http://localhost:4040/finPocket/api/analytics/analyticSummary",
                 { headers:{"Content-Type":"application/json"},
                   withCredentials:true });
            return data?.data;  

    }catch (error) {
        console.log("error in getAnalysisData"+" "+ error);
    }
     
          }; 

  const getLast10DaysSpending = async ()=>{       
      try {
             const data = await axios.get("http://localhost:4040/finPocket/api/analytics/last-10-day-data",
              {withCredentials:true});             
              // console.log(data);
              
              return data?.data;

      } catch (error) {
         console.log("error in getLast10DaysSpendingFunction"+" "+ error);
         
      }  
  };
    
    

  const {isPending: isLast10DaysPending , data: last10DaysData, isError: isLast10DaysError} = useQuery({ queryKey: ['last10DaysSpending'], queryFn: getLast10DaysSpending});
  const {isPending: isSummaryPending , data, isError} = useQuery({ queryKey: ['analysis'], queryFn: getAnalysisData});

  if(isSummaryPending || isLast10DaysPending){
    return (
    <section className='flex justify-center items-center h-full'> <Loader /> </section>
    )
  };

  if(isError || isLast10DaysError){
    return (
      <section className='m-5' >
        <h1 className='text-red-500 font-semibold text-lg' >Error Loading Analytics Data!</h1>
      </section>
    )
  };

  // console.log(data);
  // console.log(last10DaysData);
  
  

  return (

    <section className='m-5'>
     
    <h1 className='font-semibold flex gap-2 items-center text-3xl' >Analytics <TbDeviceDesktopAnalytics size={30}/> </h1>
     <section className='flex flex-col sm:flex-row gap-5' >
     <section className='w-full  sm:w-1/2 mt-5 h-full rounded-md shadow-md bg-white' >
      <h1 className='p-2 sm:p-5 text-[16px] sm:text-lg font-semibold' >Spending Breakdown</h1>
     <section className='flex flex-col justify-center items-center ' >

      { isSummaryPending && <p className='text-red-500' >Error Loading Data!</p>  }
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

      <section className='grid gap-2 grid-cols-2 sm:grid-cols-3 h-fit w-full pt-5 px-2 sm:px-10'> 
        {data?.data?.map((val, index)=>{
          return <section key={val.category} className='flex gap-2 items-center mb-2' >
            <div className='w-4 h-4 ' style={{backgroundColor: colors[index]}} ></div>
            <span className='font-semibold text-xs sm:text-sm' > {val.category}:</span> <span className='text-xs sm:text-sm' > ₹{val.totalAmount} </span>
          </section>
        })} 
      </section>

    
      <p className='w-full border-t px-3 sm:px-10 py-5 font-semibold' >Total Amount :  ₹{data?.data?.reduce((acc, val) => acc + val.totalAmount, 0)} </p>

      </section>
      </section>

      <section className=' w-full  sm:w-1/2 bg-white mt-5 h-full rounded-md shadow-md ' >
      <h1 className=' p-3 sm:p-5 text-lg font-semibold' >Last 10 Days Spending</h1>

      <section>
        <ResponsiveContainer width="100%" height={280} >

          <LineChart width={150} className='p-3 sm:p-5' responsive height={50} data={last10DaysData?.data}>
               <XAxis dataKey="date" 
               tickFormatter={(dateStr) => {
                const date = new Date(dateStr);
                return date.toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'short',
                });
                 }} />
               <YAxis />
                <Line
                  type="monotone"
                  name='Total Spending'
                  glyphName='date'
                  dataKey="amount"
                  strokeWidth={2}
                  dot={true}
                />
                <Tooltip isAnimationActive={true} />
              </LineChart>
           <RechartsDevtools/>
          </ResponsiveContainer>
      </section>

      </section>
      </section>
      
    
    </section>
  )
}

export default Analysis
