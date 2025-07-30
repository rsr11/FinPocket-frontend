import React, { useEffect } from 'react'

const Dashboard = ({user}) => {

  const userName = user.user_metadata.full_name;

  console.log(user.user_metadata.full_name);


  // useEffect(()=>{})  
  

  return (
    <>
      <h1>Welcome {userName} </h1>

    <button className='border-2 p-2 m-10' >Sign out</button>

    </>
  )
}

export default Dashboard
