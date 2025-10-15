import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Account from './pages/Account.jsx'
import Index from './pages/Index.jsx'
import Login from './pages/Login.jsx'
import Plans from './pages/Plans.jsx'
import Register from './pages/Register.jsx'

export default function App(){
  return (
    <BrowserRouter>
      <nav style={{padding:'10px'}}>
        <Link to="/account" style={{marginRight:12}}>/account</Link>
        <Link to="/" style={{marginRight:12}}>/</Link>
        <Link to="/login" style={{marginRight:12}}>/login</Link>
        <Link to="/plans" style={{marginRight:12}}>/plans</Link>
        <Link to="/register" style={{marginRight:12}}>/register</Link>
      </nav>
      <Routes>
        <Route path="/account" element={<Account />} />
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}
