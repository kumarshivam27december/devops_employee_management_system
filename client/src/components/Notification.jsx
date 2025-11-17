import React from 'react'

export default function Notification({ message, type = 'info', onClose }) {
  if (!message) return null
  return (
    <div className={`toast ${type}`} onClick={onClose} role="alert" aria-live="assertive">
      <div className="toast-body">{message}</div>
      <button className="toast-close" onClick={onClose} aria-label="close">×</button>
    </div>
  )
}
