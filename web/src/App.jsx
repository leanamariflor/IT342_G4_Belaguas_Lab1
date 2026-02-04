import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header className="app-header">
          <div className="brand">
            <span className="brand-badge">UI</span>
            <div>
              <p className="brand-title">Belaguas Portal</p>
              <p className="brand-subtitle">Login • Register • Dashboard • Profile</p>
            </div>
          </div>
          <nav className="nav">
            <NavLink className={({ isActive }) => `nav-btn${isActive ? ' active' : ''}`} to="/">Login</NavLink>
            <NavLink className={({ isActive }) => `nav-btn${isActive ? ' active' : ''}`} to="/register">Register</NavLink>
            <NavLink className={({ isActive }) => `nav-btn${isActive ? ' active' : ''}`} to="/dashboard">Dashboard</NavLink>
            <NavLink className={({ isActive }) => `nav-btn${isActive ? ' active' : ''}`} to="/profile">Profile</NavLink>
          </nav>
        </header>

        <main className="page">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
