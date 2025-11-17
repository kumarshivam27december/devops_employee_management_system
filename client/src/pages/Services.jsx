import React from 'react';

export default function Services() {
  const services = [
    {
      icon: '👥',
      title: 'Employee Management',
      description: 'Complete CRUD operations for employee records. Add, update, delete, and manage all employee information in one centralized system.',
      features: ['Add/Edit/Delete Employees', 'Store Position & Department', 'Salary Management', 'Quick Search & Filter']
    },
    {
      icon: '📋',
      title: 'Attendance System',
      description: 'Track employee attendance with real-time updates. Monitor daily check-ins and generate attendance reports.',
      features: ['Daily Check-in', 'Attendance Reports', 'Leave Management', 'Attendance Analytics']
    },
    {
      icon: '💰',
      title: 'Payroll Management',
      description: 'Automated payroll processing with salary calculations, deductions, and payment tracking.',
      features: ['Salary Calculation', 'Deduction Management', 'Payment History', 'Tax Compliance']
    },
    {
      icon: '📊',
      title: 'Analytics & Reports',
      description: 'Comprehensive dashboards and reports for data-driven decision making.',
      features: ['Employee Statistics', 'Attendance Trends', 'Payroll Reports', 'Custom Reports']
    },
    {
      icon: '🔐',
      title: 'Role-Based Access Control',
      description: 'Secure access management with different permission levels for Admin, HR, and Employees.',
      features: ['Admin Dashboard', 'HR Portal', 'Employee Self-Service', 'Permission Management']
    },
    {
      icon: '⚙️',
      title: 'System Integration',
      description: 'Seamless integration with third-party tools and services for enhanced functionality.',
      features: ['API Support', 'Data Export', 'Cloud Sync', 'Backup & Recovery']
    }
  ];

  return (
    <div className="page">
      <h2>Our Services & Features</h2>
      <p>CloudOps360 provides comprehensive employee management solutions designed for modern enterprises.</p>

      <div className="services-grid">
        {services.map((service, i) => (
          <div className="service-card" key={i}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ul className="feature-list">
              {service.features.map((feature, j) => (
                <li key={j}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <section className="service-highlight">
        <h3>Why Choose CloudOps360?</h3>
        <div className="highlight-grid">
          <div className="highlight-item">
            <span className="highlight-number">100%</span>
            <p>Cloud-Based</p>
          </div>
          <div className="highlight-item">
            <span className="highlight-number">24/7</span>
            <p>Availability</p>
          </div>
          <div className="highlight-item">
            <span className="highlight-number">99.9%</span>
            <p>Uptime</p>
          </div>
          <div className="highlight-item">
            <span className="highlight-number">∞</span>
            <p>Scalability</p>
          </div>
        </div>
      </section>
    </div>
  );
}
