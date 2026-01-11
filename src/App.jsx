import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Setting from './pages/Setting.jsx'
import Analysis from './pages/Analysis.jsx'
// import { useEffect, useState } from 'react'
// import { supabase } from './supabase'
// import { useSelector } from 'react-redux'
import FinPocketDashboard from './pages/FinPocketDashboard.jsx'
// import UserForm from './components/UserForm'
import DashboardLayout from './Layout/DashboardLayout.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import History from './pages/History'

function App() {

  // const [user, setUser] = useState(null); 
  
  const userLogined = localStorage.getItem("UserLogined");

//   const QueryClient= new QueryClient({
//   defaultOptions: {
//     queries: {
//       staleTime: 5 * 60 * 1000,   // 5 minutes
//       retry: 1,
//       refetchOnWindowFocus: false
//     }
//   }
// });

  // const isLoggedIn = useSelector(state => state.User.isLoggedIn)

  // console.log("the statue : "+isLoggedIn);
  

  // const userSession = async()=>{

  //   const {data,error} = await supabase.auth.getSession()     

  //   if(data?.session){
  //     setUser(data.session.user)
  //     // console.log(data);
      
  //   }else{
  //     setUser(null)
  //   }
  // }


  // useEffect(()=>{
  //   userSession();
  // },[])

  return (
    <>
    <BrowserRouter>
      {/* <QueryClientProvider client={QueryClient} > */}
      <Routes>
        {
          // user ? <Route path='/' element={<Dashboard/>}  /> :  <Route path='/login' element={<Login user={user} />} />
        }
        {/* <Route index element={ userLogined ? <Dashboard/> : <Login/> } /> */}
        <Route path='/' element={ <DashboardLayout/> }>
        <Route index element={ <Dashboard/> } />
        <Route path='history' element={<History/>} />
        <Route path='setting' element={<Setting/>} />
        <Route path='analysis' element={<Analysis/> } />
        </Route>
        <Route path='/findash' element={<FinPocketDashboard/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />

      </Routes>
      {/* </QueryClientProvider> */}
    </BrowserRouter>
    </>
  )
}


export default App




// personal-finance-project - project name
// r0Dw4lZUM4hEMBV7  - database password