'use client'
import { useState } from 'react'

export default function PayButton() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function handleClick() {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/checkout', { method: 'POST' })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        setError('Something went wrong. Please try again.')
        setLoading(false)
      }
    } catch {
      setError('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <>
      <button onClick={handleClick} disabled={loading} className="btn-pay">
        {loading ? 'Redirecting…' : 'Buy Now — $750'}
      </button>
      {error && <p className="form-error" style={{ textAlign: 'center', marginTop: '0.5rem' }}>{error}</p>}
    </>
  )
}
