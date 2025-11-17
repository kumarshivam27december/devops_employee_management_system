import React, { useState } from 'react';

export default function Contact(){
  const [form, setForm] = useState({ name:'', email:'', message:'' });
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    // This is a demo form; in a real app you'd send to a server or 3rd-party form processor.
    setSent(true);
    setTimeout(()=>setSent(false), 4000);
  };

  return (
    <div className="page card">
      <h2>Contact Us</h2>
      <p>Have questions or want help integrating DevOps tools? Drop a message.</p>

      <form className="contact-form" onSubmit={submit}>
        <input placeholder="Your name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required />
        <input placeholder="Your email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} required />
        <textarea placeholder="Message" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} rows={6} required />
        <div style={{display:'flex',gap:8,alignItems:'center'}}>
          <button className="btn btn-primary" type="submit">Send</button>
          {sent && <div className="muted">Message queued (demo)</div>}
        </div>
      </form>
    </div>
  );
}