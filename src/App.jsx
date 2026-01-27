import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Setting from './pages/Setting.jsx'
import Analysis from './pages/Analysis.jsx'
import FinPocketDashboard from './pages/FinPocketDashboard.jsx'
import DashboardLayout from './Layout/DashboardLayout.jsx'
  import History from './pages/History'
import AuthLayout from './Layout/AuthLayout.jsx'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <AuthLayout><DashboardLayout/> </AuthLayout> }>
        <Route index element={ <Dashboard/> } />
        <Route path='history' element={<History/>} />
        <Route path='setting' element={<Setting/>} />
        <Route path='analysis' element={<Analysis/> } />
        </Route>
        <Route path='/findash' element={<FinPocketDashboard/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />

      </Routes>
    </BrowserRouter>
    </>
  )
}


export default App




// personal-finance-project - project name
// r0Dw4lZUM4hEMBV7  - database password