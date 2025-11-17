import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h4>CloudOps360</h4>
          <p>Automated Enterprise Management — built with MERN and DevOps-ready.</p>
        </div>
        <div>
          <h4>Product</h4>
          <ul>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
          </ul>
        </div>
        <div>
          <h4>Resources</h4>
          <ul>
            <li><Link to="/documentation">Documentation</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/support">Support</Link></li>
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
          </ul>
        </div>
        <div>
          <h4>Legal</h4>
          <ul>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">© {new Date().getFullYear()} CloudOps360. All rights reserved.</div>
    </footer>
  )
}
