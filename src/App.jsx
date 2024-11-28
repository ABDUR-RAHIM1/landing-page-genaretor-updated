import React from 'react'
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'
import AdminProtected from './ProtectedRoute/AdminProtected'
import Auth from './pages/auth/Auth'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import Notfound from './pages/Notfound/Notfound'
import CreatePage from './pages/Dashboard/CreatePage'
import Orders from './pages/Dashboard/pages/Orders'
import PageDetails from './pages/Dashboard/pages/PageDetails'
import ManagePage from './pages/Dashboard/pages/ManagePage'
import OrderDetails from './pages/Dashboard/pages/OrderDetails'
import EditPage from './pages/Dashboard/pages/EditPage'
import Themes from './pages/Dashboard/pages/Themes'


export default function App() {

  return (
    <>
      <ToastContainer />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/page/:username/:id' element={<PageDetails />} />
        <Route path='/auth' element={<Auth />} />


        {/* Dashboard start */}

        <Route element={<AdminProtected />}>
          <Route
            path="/dashboard/:username"
            element={<Dashboard />}
          />
          <Route
            path="/dashboard/:username/themes"
            element={<Themes />}
          />
          <Route
            path="/dashboard/:username/create-page"
            element={<CreatePage />}
          />
          <Route
            path="/dashboard/:username/edit-page"
            element={<EditPage />}
          />
          <Route
            path="/dashboard/:username/page-manage"
            element={<ManagePage />}
          />
          <Route
            path="/dashboard/:username/orders"
            element={<Orders />}
          />
          <Route
            path="/dashboard/:username/order-details/:orderId"
            element={<OrderDetails />}
          />

        </Route>

        {/* Dashboard end */}
        <Route path='/*' element={<Notfound />} />
      </Routes>
    </>
  )
}

