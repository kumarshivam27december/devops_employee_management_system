import React from 'react';

export default function Careers() {
  const jobs = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      salary: '$120k - $160k',
      description: 'We are looking for an experienced Full Stack Developer to join our team. You will work on building scalable cloud solutions.',
      requirements: ['5+ years experience', 'MERN Stack', 'AWS/Cloud', 'DevOps knowledge']
    },
    {
      id: 2,
      title: 'Product Manager',
      department: 'Product',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$130k - $170k',
      description: 'Lead our product vision and strategy. Work with engineering and design teams to deliver world-class solutions.',
      requirements: ['3+ years PM experience', 'SaaS background', 'Data-driven mindset', 'Leadership skills']
    },
    {
      id: 3,
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote',
      type: 'Full-time',
      salary: '$110k - $150k',
      description: 'Build and maintain our cloud infrastructure. Ensure system reliability, scalability, and security.',
      requirements: ['3+ years DevOps', 'Kubernetes', 'CI/CD pipelines', 'AWS/GCP']
    },
    {
      id: 4,
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$90k - $130k',
      description: 'Design beautiful and intuitive user interfaces. Create exceptional user experiences for our platform.',
      requirements: ['3+ years design', 'Figma expertise', 'Design systems', 'User research']
    },
    {
      id: 5,
      title: 'QA Engineer',
      department: 'Quality Assurance',
      location: 'Remote',
      type: 'Full-time',
      salary: '$80k - $110k',
      description: 'Ensure product quality through comprehensive testing. Develop and execute test strategies.',
      requirements: ['2+ years QA', 'Automation testing', 'Manual testing', 'Test frameworks']
    },
    {
      id: 6,
      title: 'Internship - Software Development',
      department: 'Engineering',
      location: 'Remote',
      type: 'Internship',
      salary: 'Stipend + Benefits',
      description: 'Join our team as an intern and gain real-world experience building cloud solutions. 3-6 month program.',
      requirements: ['Currently enrolled in CS/IT', 'Basic programming', 'Eager to learn', 'Communication skills']
    }
  ];

  const benefits = [
    { icon: '💰', title: 'Competitive Salary', desc: 'Industry-leading compensation packages' },
    { icon: '🏥', title: 'Health Insurance', desc: 'Comprehensive medical, dental, and vision coverage' },
    { icon: '🏠', title: 'Remote Work', desc: 'Work from anywhere with flexible schedules' },
    { icon: '📚', title: 'Learning Budget', desc: '$2000/year for courses and certifications' },
    { icon: '🎉', title: 'Team Events', desc: 'Regular team outings and company celebrations' },
    { icon: '⏰', title: 'Flexible Hours', desc: 'Work-life balance with flexible working hours' }
  ];

  return (
    <div className="page">
      <h2>Careers at CloudOps360</h2>
      <p>Join our team and help us revolutionize employee management. We're looking for talented individuals who are passionate about technology and innovation.</p>

      <section className="benefits-section">
        <h3>Why Work With Us?</h3>
        <div className="benefits-grid">
          {benefits.map((benefit, i) => (
            <div key={i} className="benefit-card">
              <div className="benefit-icon">{benefit.icon}</div>
              <h4>{benefit.title}</h4>
              <p>{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="jobs-section">
        <h3>Open Positions</h3>
        <div className="jobs-list">
          {jobs.map((job) => (
            <div key={job.id} className="job-card">
              <div className="job-header">
                <div>
                  <h4>{job.title}</h4>
                  <p className="job-meta">{job.department} • {job.location}</p>
                </div>
                <div className="job-tags">
                  <span className="tag">{job.type}</span>
                  <span className="tag salary">{job.salary}</span>
                </div>
              </div>
              <p className="job-description">{job.description}</p>
              <div className="job-requirements">
                <strong>Requirements:</strong>
                <ul>
                  {job.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </div>
              <button className="btn btn-primary">Apply Now</button>
            </div>
          ))}
        </div>
      </section>

      <section className="internship-section">
        <h3>Internship Program</h3>
        <p>
          We offer a comprehensive internship program for students interested in software development, design, and product management. 
          Interns work on real projects, receive mentorship from experienced professionals, and have the opportunity to convert to full-time roles.
        </p>
        <p><strong>Duration:</strong> 3-6 months | <strong>Stipend:</strong> Competitive + Benefits</p>
        <button className="btn btn-primary">Apply for Internship</button>
      </section>
    </div>
  );
}
