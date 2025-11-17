import React from 'react';

export default function About(){
  return (
    <div className="page card">
      <h2>About CloudOps360</h2>
      <p>
        CloudOps360 is a learning and demo platform that combines a full-stack MERN application with DevOps automation in mind.
        The application demonstrates configuration management, deployment automation and monitoring patterns used in enterprise environments.
      </p>

      <div className="about-grid">
        <div className="about-card">
          <h3>Mission</h3>
          <p>Provide a reproducible, automated and monitored platform that helps teams deliver reliable software quickly.</p>
        </div>

        <div className="about-card">
          <h3>Stack</h3>
          <ul>
            <li>MongoDB (Atlas)</li>
            <li>Express + Node</li>
            <li>React (Vite)</li>
            <li>DevOps: Puppet, Ansible, Nagios (to be integrated)</li>
          </ul>
        </div>

        <div className="about-card">
          <h3>Contribute</h3>
          <p>Extend the app, add CI/CD steps, or integrate infrastructure-as-code — it’s designed to be a foundation for DevOps experiments.</p>
        </div>
      </div>
    </div>
  );
}