import React from 'react';

const images = [
  {
    title: 'Scalable Cloud Infrastructure',
    src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=a1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6'
  },
  {
    title: 'Automation & DevOps',
    src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=b2f7a9d8f1b0c4a9e7f4c1f3b9d5a3c2'
  },
  {
    title: 'Team Collaboration',
    src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=a1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6'
  }
];

export default function Home(){
  return (
    <div>
      <section className="hero card">
        <div className="hero-inner">
          <div className="hero-text">
            <h2>CloudOps360 — Enterprise Management </h2>
            <p>A modern MERN application with automation-ready pipelines. Manage employees, deploy with confidence, and monitor with ease.</p>
            <a className="btn btn-primary" href="/dashboard">Go to Dashboard</a>
          </div>
          <div className="hero-media">
            <img alt="cloud" src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=a1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6"/>
          </div>
        </div>
      </section>

      <section className="cards-grid">
        {images.map((img, i) => (
          <article className="info-card" key={i}>
            <img src={img.src} alt={img.title} />
            <h3>{img.title}</h3>
            <p>Practical tooling for real-world operations: automation, monitoring, and deployment workflows.</p>
          </article>
        ))}
      </section>
    </div>
  );
}