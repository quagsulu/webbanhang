import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import AddProduct from './Admin/product/AddProduct'
import User from './Admin/auth/User'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import UpdateProduct from './Admin/product/UpdateProduct'
import ProductPage from './pages/ProductPage'
import ProductDetail from './pages/ProductDetail'
import ListProduct from './Admin/product/ProductList'
import BaseLayout from './Layout/Base'
import AdminLayout from './Layout/Admin'
import Signin from './Components/Auth/SignIn'
import Signup from './Components/Auth/SignUp'
import ProfilePage from './pages/ProfilePage'
import CartPage from './pages/Cart'
import BillPage from './pages/Bill'
import PurchaseHistory from './pages/PurchaseHistory'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<BaseLayout />}>
          <Route path='' element={<Home />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/p' element={<PurchaseHistory />} />
          <Route path='/bill' element={<BillPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='product' element={<ProductPage />} />
          <Route path='product/detail/:id' element={<ProductDetail />} />
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
