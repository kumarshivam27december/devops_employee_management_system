import React, { useState } from 'react'
import { login } from '../api'

export default function Login({ onLogin }) {
  const [form, setForm] = useState({ email: '', password: '' })
  const [err, setErr] = useState('')

  const submit = async (e) => {
    e.preventDefault(); setErr('')
    const res = await login(form)
    if (res.ok && res.token) {
      onLogin({ ...res.user, token: res.token })
    } else {
      setErr(res.message || 'Login failed')
    }
  }

  return (
    <form onSubmit={submit} className="form">
      <input placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} />
      <button type="submit">Login</button>
      {err && <div className="error">{err}</div>}
    </form>
  )
}
