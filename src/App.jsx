import './App.css'
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom'
import LoginPage from './pages/loginpage'
import RegisterPage from './pages/register'
import HomePage from './pages/homePage'


function App() {

  return (
    <>
      <BrowserRouter> <nav className="navbar">
        <NavLink to="/home" className="nav-link">Home</NavLink>
        <NavLink to="/login" className="nav-link">Login</NavLink>
        <NavLink to="/register" className="nav-link">Register</NavLink>
      </nav>
        <Routes>
          <Route path='/login' Component={LoginPage} />
          <Route path='/home' Component={HomePage} />
          <Route path='/register' Component={RegisterPage} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
