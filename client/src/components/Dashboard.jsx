import React, { useEffect, useState } from 'react'
import { getEmployees, createEmployee, updateEmployee, deleteEmployee } from '../api'
import ConfirmModal from './ConfirmModal'
import Notification from './Notification'
import '../dashboard-styles.css'

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

  const stats = {
    total: employees.length,
    active: filtered.length,
    departments: new Set(employees.map(e => e.department || 'Unassigned')).size,
    avgSalary: employees.length > 0 ? Math.round(employees.reduce((sum, e) => sum + (parseInt(e.salary) || 0), 0) / employees.length) : 0
  }

  return (
    <div className="dashboard-modern">
      <Notification message={notif.message} type={notif.type} onClose={()=>setNotif({message:'',type:'info'})} />
      <ConfirmModal open={confirm.open} title="Delete Employee" message="Are you sure you want to delete this employee?" onConfirm={doDelete} onCancel={()=>setConfirm({open:false,id:null})} />

      <div className="dash-hero">
        <div className="dash-hero-content">
          <h1>📊 Dashboard</h1>
          <p>Manage your team efficiently and effectively</p>
        </div>
      </div>

      <div className="dash-container">
        <div className="dash-header-modern">
          <div className="welcome-card">
            <div className="welcome-icon">👋</div>
            <div>
              <h2>Welcome back, {user.name}!</h2>
              <p>You have <strong>{filtered.length}</strong> active employee records</p>
            </div>
          </div>
          <div className="search-modern">
            <input placeholder="🔍 Search by name or position..." value={query} onChange={e=>setQuery(e.target.value)} />
            {query && <button onClick={()=>{setQuery('')}} className="btn btn-sm">✕ Clear</button>}
          </div>
        </div>

        <div className="dash-stats">
          <div className="stat-card">
            <div className="stat-icon">👥</div>
            <div className="stat-content">
              <p className="stat-label">Total Employees</p>
              <p className="stat-value">{stats.total}</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">📋</div>
            <div className="stat-content">
              <p className="stat-label">Active Records</p>
              <p className="stat-value">{stats.active}</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🏢</div>
            <div className="stat-content">
              <p className="stat-label">Departments</p>
              <p className="stat-value">{stats.departments}</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">💰</div>
            <div className="stat-content">
              <p className="stat-label">Avg Salary</p>
              <p className="stat-value">₹{stats.avgSalary.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <section className="emp-form-modern">
          <div className="form-header">
            <h3>{editId ? '✏️ Edit Employee' : '➕ Add New Employee'}</h3>
            <p>{editId ? 'Update employee information' : 'Add a new team member to your organization'}</p>
          </div>
          <form onSubmit={submit} className="form-grid-modern">
            <input className="form-input" placeholder="Full Name *" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required />
            <input className="form-input" placeholder="Position" value={form.position} onChange={e=>setForm({...form,position:e.target.value})} />
            <input className="form-input" placeholder="Department" value={form.department} onChange={e=>setForm({...form,department:e.target.value})} />
            <input className="form-input" placeholder="Salary" type="number" value={form.salary} onChange={e=>setForm({...form,salary:e.target.value})} />
            <div className="form-actions-modern">
              <button type="submit" className="btn btn-primary btn-lg">{loading ? '⏳ Saving...' : (editId ? '💾 Update Employee' : '➕ Add Employee')}</button>
              {editId && <button type="button" className="btn btn-secondary btn-lg" onClick={()=>{setEditId(null); setForm({name:'',position:'',department:'',salary:''})}}>❌ Cancel</button>}
            </div>
          </form>
        </section>

        <section className="emp-list-modern">
          <div className="list-header">
            <h3>👥 Employee Directory</h3>
            <span className="emp-count">{filtered.length} of {employees.length} employees</span>
          </div>
          {loading ? (
            <div className="loading-state">
              <div className="spinner"></div>
              <p>Loading employees...</p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">📭</div>
              <p>No employees found</p>
              <small>Add your first employee to get started</small>
            </div>
          ) : (
            <div className="table-wrap-modern">
              <table className="modern-table">
                <thead>
                  <tr>
                    <th>👤 Name</th>
                    <th>💼 Position</th>
                    <th>🏢 Department</th>
                    <th>💰 Salary</th>
                    <th>⚙️ Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map(e => (
                    <tr key={e._id} className="table-row">
                      <td className="name-cell">{e.name}</td>
                      <td>{e.position || '—'}</td>
                      <td><span className="dept-badge">{e.department || 'Unassigned'}</span></td>
                      <td className="salary-cell">{e.salary ? `₹${parseInt(e.salary).toLocaleString()}` : '—'}</td>
                      <td className="actions-cell">
                        <button className="btn btn-sm btn-edit" onClick={()=>startEdit(e)}>✏️ Edit</button>
                        <button className="btn btn-sm btn-delete" onClick={()=>confirmDelete(e._id)}>🗑️ Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}
