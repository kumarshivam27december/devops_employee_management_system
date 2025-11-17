import React, { useEffect, useState } from 'react'
import { getEmployees, createEmployee, updateEmployee, deleteEmployee } from '../api'
import ConfirmModal from './ConfirmModal'
import Notification from './Notification'

export default function Dashboard({ user, token }) {
  const [employees, setEmployees] = useState([])
  const [form, setForm] = useState({ name: '', position: '', department: '', salary: '' })
  const [editId, setEditId] = useState(null)
  const [loading, setLoading] = useState(false)
  const [notif, setNotif] = useState({ message: '', type: 'info' })
  const [confirm, setConfirm] = useState({ open: false, id: null })
  const [query, setQuery] = useState('')

  const show = (message, type = 'info') => {
    setNotif({ message, type })
    setTimeout(() => setNotif({ message: '', type: 'info' }), 4000)
  }

  const load = async () => {
    setLoading(true)
    const res = await getEmployees(token)
    setLoading(false)
    if (res.ok) {
      // API returns array under `data` when payload is an array.
      const list = Array.isArray(res.data) ? res.data : []
      setEmployees(list)
    } else show(res.message || 'Failed to load employees', 'danger')
  }

  useEffect(() => { load() }, [])

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name.trim()) return show('Employee name is required', 'danger')
    setLoading(true)
    if (editId) {
      const res = await updateEmployee(token, editId, form)
      setLoading(false)
      if (res.ok) { show('Employee updated', 'success'); setForm({ name: '', position: '', department: '', salary: '' }); setEditId(null); load() }
      else show(res.message || 'Update failed', 'danger')
    } else {
      const res = await createEmployee(token, form)
      setLoading(false)
      if (res.ok) { show('Employee added', 'success'); setForm({ name: '', position: '', department: '', salary: '' }); load() }
      else show(res.message || 'Create failed', 'danger')
    }
  }

  const startEdit = (emp) => { setEditId(emp._id); setForm({ name: emp.name, position: emp.position || '', department: emp.department || '', salary: emp.salary || '' }) }

  const confirmDelete = (id) => setConfirm({ open: true, id })
  const doDelete = async () => {
    setConfirm({ open: false, id: null })
    setLoading(true)
    const res = await deleteEmployee(token, confirm.id)
    setLoading(false)
    if (res.ok) { show('Employee removed', 'success'); load() }
    else show(res.message || 'Delete failed', 'danger')
  }

  const filtered = employees.filter(e => e.name.toLowerCase().includes(query.toLowerCase()) || (e.position || '').toLowerCase().includes(query.toLowerCase()) )

  return (
    <div className="dashboard">
      <Notification message={notif.message} type={notif.type} onClose={()=>setNotif({message:'',type:'info'})} />
      <ConfirmModal open={confirm.open} title="Delete Employee" message="Are you sure you want to delete this employee?" onConfirm={doDelete} onCancel={()=>setConfirm({open:false,id:null})} />

      <div className="dash-header">
        <h2>Welcome, {user.name}</h2>
        <div className="search">
          <input placeholder="Search by name or position..." value={query} onChange={e=>setQuery(e.target.value)} />
          <button onClick={()=>{setQuery('')}} className="btn">Clear</button>
        </div>
      </div>

      <section className="emp-form card">
        <h3>{editId ? 'Edit Employee' : 'Add Employee'}</h3>
        <form onSubmit={submit} className="form-grid">
          <input placeholder="Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} />
          <input placeholder="Position" value={form.position} onChange={e=>setForm({...form,position:e.target.value})} />
          <input placeholder="Department" value={form.department} onChange={e=>setForm({...form,department:e.target.value})} />
          <input placeholder="Salary" type="number" value={form.salary} onChange={e=>setForm({...form,salary:e.target.value})} />
          <div className="form-actions">
            <button type="submit" className="btn btn-primary">{loading ? 'Saving...' : (editId ? 'Update' : 'Add')}</button>
            {editId && <button type="button" className="btn btn-secondary" onClick={()=>{setEditId(null); setForm({name:'',position:'',department:'',salary:''})}}>Cancel</button>}
          </div>
        </form>
      </section>

      <section className="emp-list card">
        <h3>Employees ({filtered.length})</h3>
        {loading ? <div className="muted">Loading...</div> : (
          <div className="table-wrap">
            <table>
              <thead>
                <tr><th>Name</th><th>Position</th><th>Dept</th><th>Salary</th><th>Actions</th></tr>
              </thead>
              <tbody>
                {filtered.map(e => (
                  <tr key={e._id}>
                    <td>{e.name}</td>
                    <td>{e.position}</td>
                    <td>{e.department}</td>
                    <td>{e.salary}</td>
                    <td className="actions">
                      <button className="btn btn-sm" onClick={()=>startEdit(e)}>Edit</button>
                      <button className="btn btn-sm btn-danger" onClick={()=>confirmDelete(e._id)}>Delete</button>
                    </td>
                  </tr>
                ))}
                {filtered.length === 0 && <tr><td colSpan={5} className="muted">No employees found.</td></tr>}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  )
}
