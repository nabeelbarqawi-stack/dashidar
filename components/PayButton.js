'use client'
import { useState } from 'react'

export default function PayButton() {
  const [loading, setLoading] = useState(false)

  async function handleClick() {
    setLoading(true)
    try {
      const res = await fetch('/api/checkout', { method: 'POST' })
      const { url } = await res.json()
      window.location.href = url
    } catch {
      setLoading(false)
    }
  }

  return (
    <button onClick={handleClick} disabled={loading} className="btn-pay">
      {loading ? 'Redirecting…' : 'Buy Now — $750'}
    </button>
  )
}
