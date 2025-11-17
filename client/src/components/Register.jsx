import React, { useState } from 'react'
import { register } from '../api'

export default function Register({ onRegister }) {
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [err, setErr] = useState('')

  const submit = async (e) => {
    e.preventDefault(); setErr('')
    const res = await register(form)
    if (res.ok && res.token) {
      onRegister({ ...res.user, token: res.token })
    } else {
      setErr(res.message || 'Registration failed')
    }
  }

  return (
    <form onSubmit={submit} className="form">
      <input placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} />
      <button type="submit">Register</button>
      {err && <div className="error">{err}</div>}
    </form>
  )
}
