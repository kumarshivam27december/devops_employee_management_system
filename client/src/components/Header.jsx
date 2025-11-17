import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header({ user, onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header card">
      <div className="brand">
        <Link to="/" className="logo">CloudOps360</Link>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/documentation">Docs</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
          {user && <Link to="/dashboard">Dashboard</Link>}
        </nav>
      </div>
      <div className="header-actions">
        {user ? (
          <>
            <span className="user-name">{user.name}</span>
            <button className="btn btn-secondary" onClick={onLogout}>Logout</button>
          </>
        ) : (
          <div className="auth-links">
            <Link to="/login" className="btn">Login</Link>
            <Link to="/register" className="btn btn-primary">Register</Link>
          </div>
        )}
      </div>
    </header>
  )
}
