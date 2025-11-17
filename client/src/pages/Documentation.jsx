import React, { useState } from 'react';

export default function Documentation() {
  const [activeTab, setActiveTab] = useState('overview');

  const docs = {
    overview: {
      title: 'System Overview',
      content: `
        CloudOps360 is a comprehensive Employee Management System built with modern web technologies.
        
        **Technology Stack:**
        - Frontend: React with Vite
        - Backend: Node.js with Express
        - Database: MongoDB
        - Deployment: Cloud-based infrastructure
        
        **Core Features:**
        1. Employee Management - Add, edit, delete employee records
        2. Attendance Tracking - Real-time attendance monitoring
        3. Payroll Management - Automated salary calculations
        4. Analytics - Comprehensive reporting and insights
        5. Role-Based Access - Secure permission management
      `
    },
    dashboard: {
      title: 'Dashboard Guide',
      content: `
        **Accessing the Dashboard:**
        1. Log in with your credentials
        2. Click "Dashboard" in the navigation menu
        3. You'll see the main dashboard with employee list and quick actions
        
        **Dashboard Components:**
        - Welcome Message: Personalized greeting with your name
        - Employee List: View all employees with search functionality
        - Add Employee Form: Quick form to add new employees
        - Action Buttons: Edit or delete employee records
        
        **Search & Filter:**
        - Use the search bar to find employees by name or position
        - Results update in real-time as you type
        - Click "Clear" to reset the search
      `
    },
    employee: {
      title: 'Employee Management',
      content: `
        **Adding a New Employee:**
        1. Navigate to Dashboard
        2. Fill in the "Add Employee" form with:
           - Name (required)
           - Position (optional)
           - Department (optional)
           - Salary (optional)
        3. Click "Add" button
        4. Employee is instantly added to the system
        
        **Editing Employee Information:**
        1. Find the employee in the list
        2. Click the "Edit" button
        3. Modify the desired fields
        4. Click "Update" to save changes
        
        **Deleting an Employee:**
        1. Click the "Delete" button next to the employee
        2. Confirm the deletion in the popup
        3. Employee record is permanently removed
        
        **Best Practices:**
        - Always fill in the Name field
        - Keep department names consistent
        - Update salary information regularly
      `
    },
    attendance: {
      title: 'Attendance System',
      content: `
        **How Attendance Works:**
        - Employees check in daily through the mobile app or web portal
        - System automatically records check-in time and date
        - Attendance is tracked for payroll and analytics
        
        **Attendance Rules:**
        - Standard working hours: 9 AM - 6 PM
        - Late arrival: After 9:30 AM
        - Early departure: Before 5:30 PM
        - Full day attendance: 8+ hours
        
        **Viewing Attendance Reports:**
        1. Go to Reports section
        2. Select "Attendance Report"
        3. Choose date range
        4. View attendance statistics and trends
        
        **Leave Management:**
        - Employees can request leave through the portal
        - HR approves/rejects leave requests
        - Leave is deducted from attendance records
      `
    },
    payroll: {
      title: 'Payroll Management',
      content: `
        **Payroll Calculation:**
        - Base Salary: Set during employee creation
        - Deductions: Taxes, insurance, etc.
        - Bonuses: Performance-based incentives
        - Final Salary = Base - Deductions + Bonuses
        
        **Processing Payroll:**
        1. Go to Payroll section
        2. Select the month and year
        3. Review employee salaries
        4. Apply any adjustments or bonuses
        5. Generate payroll report
        6. Process payments
        
        **Payroll Reports:**
        - Monthly payroll summary
        - Individual salary slips
        - Tax compliance reports
        - Deduction breakdown
        
        **Compliance:**
        - Automatic tax calculations
        - Compliance with labor laws
        - Audit trail for all transactions
      `
    },
    security: {
      title: 'Security & Compliance',
      content: `
        **Account Security:**
        - Use strong passwords (8+ characters, mix of letters/numbers/symbols)
        - Enable two-factor authentication
        - Never share your login credentials
        - Log out after each session
        
        **Data Protection:**
        - All data is encrypted in transit (SSL/TLS)
        - Data at rest is encrypted with AES-256
        - Regular security audits
        - GDPR compliant
        
        **Access Control:**
        - Role-based permissions
        - Admin: Full system access
        - HR: Employee and payroll management
        - Employee: Self-service portal access
        
        **Compliance Standards:**
        - GDPR (General Data Protection Regulation)
        - CCPA (California Consumer Privacy Act)
        - SOC 2 Type II certified
        - ISO 27001 compliant
      `
    }
  };

  return (
    <div className="page">
      <h2>Documentation</h2>
      <p>Complete guide to using CloudOps360. Find answers to common questions and learn best practices.</p>

      <div className="doc-tabs">
        {Object.keys(docs).map((key) => (
          <button
            key={key}
            className={`doc-tab ${activeTab === key ? 'active' : ''}`}
            onClick={() => setActiveTab(key)}
          >
            {docs[key].title}
          </button>
        ))}
      </div>

      <div className="doc-content">
        <h3>{docs[activeTab].title}</h3>
        <div className="doc-text">
          {docs[activeTab].content.split('\n').map((line, i) => {
            if (line.startsWith('**') && line.endsWith('**')) {
              return <strong key={i}>{line.replace(/\*\*/g, '')}</strong>;
            }
            if (line.startsWith('-')) {
              return <li key={i}>{line.substring(1).trim()}</li>;
            }
            if (line.startsWith('1.') || line.startsWith('2.') || line.startsWith('3.') || line.match(/^\d+\./)) {
              return <li key={i}>{line.replace(/^\d+\.\s/, '')}</li>;
            }
            return line.trim() ? <p key={i}>{line}</p> : null;
          })}
        </div>
      </div>

      <section className="doc-tips">
        <h3>Quick Tips</h3>
        <div className="tips-grid">
          <div className="tip-card">
            <h4>💡 Tip 1</h4>
            <p>Use keyboard shortcuts to speed up navigation. Press '?' to see all available shortcuts.</p>
          </div>
          <div className="tip-card">
            <h4>💡 Tip 2</h4>
            <p>Export reports as PDF or CSV for offline access and sharing with stakeholders.</p>
          </div>
          <div className="tip-card">
            <h4>💡 Tip 3</h4>
            <p>Set up automated backups to ensure your data is always safe and recoverable.</p>
          </div>
          <div className="tip-card">
            <h4>💡 Tip 4</h4>
            <p>Use the mobile app for on-the-go access to employee records and approvals.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
