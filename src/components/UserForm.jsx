import React, { useState } from 'react'

const UserForm = () => {

    const [monthlyEarn, setMonthlyEarn] = useState(5000);
    const [monthlySaving, SetMonthySaving] = useState(1);
    const [Profession, setProfession] = useState(`Student`);

    const Professions = [`Student`,`Freelancer`,`Private Sector`,`Govt Sector`,`Other`];

  return (
    <section className='absolute top-0 min-w-screen min-h-screen flex items-center justify-center bg-cover bg-center' > 
       

        <div className="absolute inset-0 backdrop-blur-md bg-black/40"></div>
  
  
       <form className='border-2 relative z-10 bg-white shadow-lg  rounded-md flex flex-col w-[24vw] p-10'  >
       <label className='text-md' htmlFor="earn-money">How much you earn Monthly : </label>

       
       <input type="number" name="earn-money" value={monthlyEarn} onChange={(e)=>{setMonthlyEarn(e.target.value)}} min={5000}  className='border p-1 mb-5' id="earn-money" />

        <label className='text-md' htmlFor="prof">Your Pofession :</label>
        <select name="prof" className='border mb-5 p-1' value={Profession} onChange={(e)=>{setProfession(e.target.value)}}  id="prof">
            {
                Professions?.map((e)=>{
                    return <option key={e} value={e}>{e}</option>
                })
            }
          
        </select>
       {/* <input type="number" name="earn-money" className='border-2 border-slate-200' id="earn-money" /> */}

        <label className='text-md' htmlFor="earn-money">How much you wanna save this month ?</label>
       <input  type="number" name="earn-money" value={monthlySaving} min={1} onChange={(e)=>{SetMonthySaving(e.target.value)}} className='border p-1 mb-5 border-' id="earn-money" />

       <button className='border-2 bg-[#8b5cf6] text-white p-1 border-[#8b5cf6]' >Next {`>`}</button>


    </form>
    </section>
  )
}

export default UserForm
