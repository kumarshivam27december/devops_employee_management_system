import React, { useState } from 'react';

export default function Support() {
  const [ticketForm, setTicketForm] = useState({
    name: '',
    email: '',
    category: 'general',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setTicketForm({ name: '', email: '', category: 'general', subject: '', message: '' });
    }, 3000);
  };

  const categories = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'technical', label: 'Technical Issue' },
    { value: 'billing', label: 'Billing & Subscription' },
    { value: 'feature', label: 'Feature Request' },
    { value: 'bug', label: 'Bug Report' },
    { value: 'account', label: 'Account & Login' }
  ];

  const supportChannels = [
    {
      icon: '📧',
      title: 'Email Support',
      description: 'Send us an email and we\'ll respond within 24 hours',
      contact: 'support@cloudops360.com'
    },
    {
      icon: '💬',
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      contact: 'Available 9 AM - 6 PM EST'
    },
    {
      icon: '📞',
      title: 'Phone Support',
      description: 'Call our helpline for urgent issues',
      contact: '+1-800-CLOUDOPS'
    },
    {
      icon: '📚',
      title: 'Knowledge Base',
      description: 'Browse our comprehensive documentation',
      contact: 'Visit Documentation'
    }
  ];

  const faqs = [
    { q: 'How do I reset my password?', a: 'Click "Forgot Password" on the login page and follow the email instructions.' },
    { q: 'Can I export my data?', a: 'Yes, go to Settings → Export Data to download your records in CSV format.' },
    { q: 'What is your uptime guarantee?', a: 'We guarantee 99.9% uptime with automatic failover and redundancy.' },
    { q: 'How often is my data backed up?', a: 'Your data is backed up every 6 hours to geographically distributed servers.' }
  ];

  return (
    <div className="page">
      <h2>Support Center</h2>
      <p>We're here to help! Choose your preferred support channel or submit a ticket below.</p>

      <section className="support-channels">
        <h3>Get Help</h3>
        <div className="channels-grid">
          {supportChannels.map((channel, i) => (
            <div key={i} className="channel-card">
              <div className="channel-icon">{channel.icon}</div>
              <h4>{channel.title}</h4>
              <p>{channel.description}</p>
              <p className="channel-contact">{channel.contact}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="ticket-section">
        <h3>Raise a Support Ticket</h3>
        <form className="support-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              placeholder="Your Name"
              value={ticketForm.name}
              onChange={(e) => setTicketForm({ ...ticketForm, name: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={ticketForm.email}
              onChange={(e) => setTicketForm({ ...ticketForm, email: e.target.value })}
              required
            />
          </div>

          <div className="form-row">
            <select
              value={ticketForm.category}
              onChange={(e) => setTicketForm({ ...ticketForm, category: e.target.value })}
            >
              {categories.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Subject"
              value={ticketForm.subject}
              onChange={(e) => setTicketForm({ ...ticketForm, subject: e.target.value })}
              required
            />
          </div>

          <textarea
            placeholder="Describe your issue in detail..."
            rows="6"
            value={ticketForm.message}
            onChange={(e) => setTicketForm({ ...ticketForm, message: e.target.value })}
            required
          />

          <button type="submit" className="btn btn-primary">Submit Ticket</button>
          {submitted && <p className="success-message">✓ Ticket submitted successfully! We'll respond soon.</p>}
        </form>
      </section>

      <section className="faq-quick">
        <h3>Quick Answers</h3>
        <div className="faq-quick-grid">
          {faqs.map((item, i) => (
            <div key={i} className="faq-quick-item">
              <h4>{item.q}</h4>
              <p>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="support-status">
        <h3>System Status</h3>
        <div className="status-grid">
          <div className="status-item">
            <span className="status-badge online">●</span>
            <div>
              <p className="status-name">API Server</p>
              <p className="status-time">All systems operational</p>
            </div>
          </div>
          <div className="status-item">
            <span className="status-badge online">●</span>
            <div>
              <p className="status-name">Database</p>
              <p className="status-time">All systems operational</p>
            </div>
          </div>
          <div className="status-item">
            <span className="status-badge online">●</span>
            <div>
              <p className="status-name">Web Application</p>
              <p className="status-time">All systems operational</p>
            </div>
          </div>
          <div className="status-item">
            <span className="status-badge online">●</span>
            <div>
              <p className="status-name">Mobile App</p>
              <p className="status-time">All systems operational</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
