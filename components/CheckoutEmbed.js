'use client'
import { useState, useEffect, useRef } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js'

let stripePromise = null
function getStripe() {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
  }
  return stripePromise
}

function PaymentForm() {
  const stripe = useStripe()
  const elements = useElements()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    if (!stripe || !elements) return

    setLoading(true)
    setError(null)

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/success`,
      },
    })

    if (error) {
      setError(error.message)
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="stripe-form" aria-label="Payment form">
      <PaymentElement
        options={{
          layout: 'tabs',
          paymentMethodOrder: ['card'],
          wallets: { applePay: 'auto', googlePay: 'never' },
        }}
      />
      {error && (
        <p className="form-error" style={{ marginTop: '0.75rem' }} role="alert">
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={loading || !stripe}
        className="btn-pay"
        aria-label={loading ? 'Processing payment…' : 'Pay $750'}
      >
        {loading ? 'Processing…' : 'Pay $750'}
      </button>
    </form>
  )
}

export default function CheckoutEmbed() {
  const [clientSecret, setClientSecret] = useState(null)
  const [error, setError] = useState(null)
  const [triggered, setTriggered] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true)
          observer.disconnect()
        }
      },
      { rootMargin: '400px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!triggered) return
    fetch('/api/payment-intent', { method: 'POST' })
      .then(r => r.json())
      .then(d => {
        if (d.clientSecret) setClientSecret(d.clientSecret)
        else setError('Could not load checkout. Please refresh.')
      })
      .catch(() => setError('Could not load checkout. Please refresh.'))
  }, [triggered])

  if (error) {
    return (
      <p className="form-error" style={{ textAlign: 'center' }} role="alert">
        {error}
      </p>
    )
  }

  if (!clientSecret) {
    return (
      <div ref={containerRef} className="stripe-loading" aria-label="Loading payment form" role="status">
        <div className="stripe-spinner" aria-hidden="true" />
      </div>
    )
  }

  return (
    <div ref={containerRef}>
      <Elements
        stripe={getStripe()}
        options={{
          clientSecret,
          appearance: {
            theme: 'flat',
            variables: {
              colorPrimary: '#8B6845',
              colorBackground: '#F6F1EC',
              colorText: '#1C1510',
              colorDanger: '#c0392b',
              fontFamily: 'Inter, sans-serif',
              borderRadius: '0px',
              fontSizeBase: '14px',
            },
            rules: {
              '.Input': {
                border: '1px solid #C9B99F',
                padding: '12px',
                boxShadow: 'none',
              },
              '.Input:focus': {
                border: '1px solid #8B6845',
                boxShadow: 'none',
                outline: 'none',
              },
              '.Label': {
                fontSize: '11px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#5C4A38',
                marginBottom: '6px',
              },
              '.Tab': { border: '1px solid #C9B99F', boxShadow: 'none' },
              '.Tab--selected': { border: '1px solid #8B6845', boxShadow: 'none' },
            },
          },
        }}
      >
        <PaymentForm />
      </Elements>
    </div>
  )
}
