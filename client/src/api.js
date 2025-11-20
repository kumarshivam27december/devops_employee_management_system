const API_BASE = window.location.hostname === 'localhost' ? 'http://localhost:5000' : '';
async function handleResponse(res) {
  let parsed = null
  try { parsed = await res.json() } catch (e) { parsed = null }

  if (Array.isArray(parsed)) {
    return { ok: res.ok, status: res.status, data: parsed }
  }

  if (parsed && typeof parsed === 'object') {
    // spread object properties (token, user, message, _id, etc.)
    return { ok: res.ok, status: res.status, ...parsed }
  }

  return { ok: res.ok, status: res.status, data: parsed }
}

export async function register(data) {
  const res = await fetch(`${API_BASE}/api/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  return handleResponse(res)
}

export async function login(data) {
  const res = await fetch(`${API_BASE}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  return handleResponse(res)
}

export async function getEmployees(token) {
  const res = await fetch(`${API_BASE}/api/employees`, {
    headers: { Authorization: `Bearer ${token}` }
  })
  return handleResponse(res)
}

export async function createEmployee(token, data) {
  const res = await fetch(`${API_BASE}/api/employees`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify(data)
  })
  return handleResponse(res)
}

export async function updateEmployee(token, id, data) {
  const res = await fetch(`${API_BASE}/api/employees/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify(data)
  })
  return handleResponse(res)
}

export async function deleteEmployee(token, id) {
  const res = await fetch(`${API_BASE}/api/employees/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` }
  })
  return handleResponse(res)
}
