import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import AddProduct from './Admin/AddProduct'
import User from './Admin/auth/User'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import UpdateProduct from './Admin/UpdateProduct'
import ProductPage from './pages/ProductPage'
import ProductDetail from './pages/ProductDetail'
import ListProduct from './Admin/ProductList'
import BaseLayout from './Layout/Base'
import AdminLayout from './Layout/Admin'
import Signin from './Components/Auth/SignIn'
import Signup from './Components/Auth/SignUp'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<BaseLayout />}>
          <Route path='' element={<Home />} />
          <Route path='product' element={<ProductPage />} />
          <Route path='products/detail/:id' element={<ProductDetail />} />
          <Route path='signup' element={< Signup/>} />
          <Route path='signin' element={< Signin/>} />
        </Route>
        <Route path='/admin' element={<AdminLayout />}>
          <Route path='product' element={<ListProduct />} />
          <Route path='product/edit/:id' element={<UpdateProduct />} />
          <Route path='product/add' element={<AddProduct />} />
          <Route path='user' element={<User />} />
        </Route>
      </Routes>
      <ToastContainer  />
    </>



  )
}

export default App
