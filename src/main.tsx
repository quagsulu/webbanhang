import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  // useQuery,
  // useMutation,
  // useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import ProductContext from './Context/Context.tsx'
import { AuthProvider } from './Context/AuthContex.tsx'

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
      <ProductContext>
      <App />
      </ProductContext>
      </AuthProvider>
    </QueryClientProvider>
    </BrowserRouter>
    
  </React.StrictMode>,
)
