import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import FAQ from './pages/FAQ'
import TermsConditions from './pages/TermsConditions'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Careers from './pages/Careers'
import Testimonials from './pages/Testimonials'
import Documentation from './pages/Documentation'
import Support from './pages/Support'
import Blog from './pages/Blog'
import Gallery from './pages/Gallery'
import Register from './components/Register'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

export default function App() {
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem('user')) || null } catch { return null }
  })

  useEffect(() => {
    if (user) localStorage.setItem('user', JSON.stringify(user));
    else localStorage.removeItem('user');
  }, [user])

  return (
    <BrowserRouter>
      <div className="app">
        <Header user={user} onLogout={() => setUser(null)} />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/terms" element={<TermsConditions />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/support" element={<Support />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/register" element={<Register onRegister={(u) => setUser(u)} />} />
            <Route path="/login" element={<Login onLogin={(u) => setUser(u)} />} />
            <Route path="/dashboard" element={user ? <Dashboard user={user} token={user.token} /> : <Navigate to="/login" />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
