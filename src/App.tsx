import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom"
import "./App.css"
import Register from "./features/register"
import Login from "./features/login"
import Renew from "./features/renew"
import Home from "./features/home"
import GetOtp from "./features/renew/get-otp"

const AuthCheckerRoutes = () => {
  let auth = { 'token': true }
  return (
    auth.token ? <Outlet /> : <Navigate to='/login' />
  )
}

const App = () => {
  return (
    <BrowserRouter >
      <Routes>

        <Route element={<AuthCheckerRoutes />} >
          <Route path='/home' element={<Home />} />
          <Route path='/' element={<Home />} />
        </Route>

        <Route path='/login' element={<Login />} />
        <Route path='/registery' element={<Register />} />
        <Route path='/otp' element={<GetOtp />} />
        <Route path='/revoke' element={<Renew />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
