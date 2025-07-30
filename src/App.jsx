import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { useEffect, useState } from 'react'
import { supabase } from './supabase'

function App() {

  const [user, setUser] = useState(null);

  const userSession = async()=>{
    const {data,error} = await supabase.auth.getSession()

    if(data?.session){
      setUser(data.session.user)
      // console.log(data);
      
    }else{
      setUser(null)
    }
  }


  useEffect(()=>{
    userSession();
  },[])

  return (
    <>
    <BrowserRouter>
      <Routes>
        {
          // user ? <Route path='/' element={<Dashboard/>}  /> :  <Route path='/login' element={<Login user={user} />} />
        }
        <Route path='/' element={ user ? <Dashboard user={user} /> : <Login /> }  />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App


// personal-finance-project - project name
// r0Dw4lZUM4hEMBV7  - database password