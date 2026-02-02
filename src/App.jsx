import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import  Loader  from './components/Loader.jsx';



// Lazy load all pages
const Dashboard = lazy(() => import('./pages/Dashboard.jsx'));
const Login = lazy(() => import('./pages/Login.jsx'));
const Signup = lazy(() => import('./pages/Signup.jsx'));
const Setting = lazy(() => import('./pages/Setting.jsx'));
const Analysis = lazy(() => import('./pages/Analysis.jsx'));
const FinPocketDashboard = lazy(() => import('./pages/FinPocketDashboard.jsx'));
const History = lazy(() => import('./pages/History'));

// Layouts - keep these eager or lazy load them too
const DashboardLayout = lazy(() => import('./Layout/DashboardLayout.jsx'));
const AuthLayout = lazy(() => import('./Layout/AuthLayout.jsx'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={ <div className="h-screen w-screen flex justify-center items-center"><Loader /> </div>}>
        <Routes>
          <Route path='/' element={
            <AuthLayout>
              <DashboardLayout />
            </AuthLayout>
          }>
            <Route index element={<Dashboard />} />
            <Route path='history' element={<History />} />
            <Route path='setting' element={<Setting />} />
            <Route path='analysis' element={<Analysis />} />
          </Route>
          
          <Route path='/findash' element={<FinPocketDashboard />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;