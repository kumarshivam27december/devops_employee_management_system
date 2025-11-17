import React from 'react'

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h4>CloudOps360</h4>
          <p>Automated Enterprise Management — built with MERN and DevOps-ready.</p>
        </div>
        <div>
          <h4>Links</h4>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/dashboard">Dashboard</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <p>email@example.com</p>
        </div>
      </div>
      <div className="footer-bottom">© {new Date().getFullYear()} CloudOps360</div>
    </footer>
  )
}
