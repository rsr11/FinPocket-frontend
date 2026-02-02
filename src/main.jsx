import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './app/store.js'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient= new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,   // 5 minutes
      retry: 1,
      refetchOnWindowFocus: false
    }
  }
});


const ToastContainerr = lazy(() => 
  import('react-toastify').then(module => ({ 
    default: module.ToastContainer 
  }))
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store} >
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<h1>Loading</h1>}>
       <ToastContainerr />
      </Suspense>
      <App />
    </QueryClientProvider>
    </Provider>
  </StrictMode>,
)
