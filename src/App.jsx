import './App.css'
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom'
import LoginPage from './pages/loginpage'
import RegisterPage from './pages/register'
import HomePage from './pages/homePage'
import ProductPost from './pages/uploadProduct'


function App() {

  return (
    <>
      <nav className="navbar">
        <NavLink to="/home" className="nav-link">Home</NavLink>
        <NavLink to="/login" className="nav-link">Login</NavLink>
        <NavLink to="/register" className="nav-link">Register</NavLink>
        <NavLink to="/upload-product" className="nav-link"> Create Product </NavLink>
      </nav>
      <Routes>
        <Route path='/login' Component={LoginPage} />
        <Route path='/home' Component={HomePage} />
        <Route path='/register' Component={RegisterPage} />
        <Route path='/upload-product' Component={ProductPost} />
      </Routes>
    </>
  )
}

export default App
