import React, { useState } from 'react';

export default function Contact(){
  const [form, setForm] = useState({ name:'', email:'', message:'' });
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(()=>setSent(false), 4000);
  };

  return (
    <div className="page card contact-page">
      <h2 className="contact-title">Contact Us</h2>
      <p className="contact-sub">Have questions or want help integrating DevOps tools? Drop a message.</p>

      <form className="contact-form" onSubmit={submit}>
        <input className="contact-input" placeholder="Your name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required />
        <input className="contact-input" placeholder="Your email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} required />
        <textarea className="contact-textarea" placeholder="Message" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} rows={6} required />
        <div className="contact-row">
          <button className="btn btn-primary contact-btn" type="submit">Send</button>
          {sent && <div className="muted fade-msg">Message queued (demo)</div>}
        </div>
      </form>

      {/* Inline CSS */}
      <style>{`
        .contact-page {
          max-width: 600px;
          margin: auto;
          padding: 30px;
          border-radius: 20px;
          background: url('https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1200&q=80'), linear-gradient(135deg, #ffffffaa 0%, #f3f6ffaa 100%);
          background-size: cover;
          background-position: center;
          backdrop-filter: blur(4px);
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          animation: fadeIn 0.4s ease-in-out;
        }

        .contact-title {
          font-size: 2rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 5px;
          color: #2c3e50;
        }

        .contact-sub {
          text-align: center;
          color: #6b7280;
          margin-bottom: 20px;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .contact-input,
        .contact-textarea {
          width: 100%;
          padding: 14px;
          border-radius: 10px;
          border: 1px solid #d1d5db;
          font-size: 1rem;
          transition: 0.25s;
          background: #fff;
        }

        .contact-input:focus,
        .contact-textarea:focus {
          border-color: #6366f1;
          box-shadow: 0 0 0 3px rgba(99,102,241,0.2);
          outline: none;
        }

        .contact-row {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .contact-btn {
          padding: 10px 20px;
          border-radius: 10px;
          font-size: 1rem;
          font-weight: 600;
          background: #6366f1;
          border: none;
          cursor: pointer;
          transition: 0.25s;
        }

        .contact-btn:hover {
          background: #4f46e5;
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(0,0,0,0.15);
        }

        .fade-msg {
          opacity: 0;
          animation: fadeOutMsg 4s forwards;
        }

        @keyframes fadeOutMsg {
          0% { opacity: 1; }
          90% { opacity: 1; }
          100% { opacity: 0; }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
