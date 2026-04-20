import { NextResponse } from 'next/server'

export async function POST() {
  const body = [
    'amount=75000',
    'currency=usd',
    `description=${encodeURIComponent('Dashidar Table — custom solid wood, Brooklyn NY')}`,
    'payment_method_types[]=card',
  ].join('&')

  const res = await fetch('https://api.stripe.com/v1/payment_intents', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body,
  })

  const intent = await res.json()

  if (!res.ok) {
    console.error('Stripe payment intent error:', intent.error)
    return NextResponse.json({ error: 'Unable to initialise payment. Please try again.' }, { status: 500 })
  }

  return NextResponse.json({ clientSecret: intent.client_secret })
}
