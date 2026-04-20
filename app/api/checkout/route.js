import { NextResponse } from 'next/server'

const ALLOWED_ORIGINS = ['https://dashidar.com', 'https://www.dashidar.com', 'https://dashidar.vercel.app']

export async function POST(request) {
  const requestOrigin = request.headers.get('origin')
  const origin = ALLOWED_ORIGINS.includes(requestOrigin) ? requestOrigin : 'https://dashidar.com'

  const body = [
    'mode=payment',
    'payment_method_types[]=card',
    'line_items[0][price_data][currency]=usd',
    `line_items[0][price_data][product_data][name]=${encodeURIComponent('Dashidar Table')}`,
    `line_items[0][price_data][product_data][description]=${encodeURIComponent('Custom solid wood table, handcrafted in Brooklyn NY. Made to order — 6 to 8 weeks.')}`,
    'line_items[0][price_data][unit_amount]=75000',
    'line_items[0][quantity]=1',
    `success_url=${encodeURIComponent(`${origin}/success`)}`,
    `cancel_url=${encodeURIComponent(`${origin}/#order`)}`,
  ].join('&')

  const res = await fetch('https://api.stripe.com/v1/checkout/sessions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body,
  })

  const session = await res.json()

  if (!res.ok) {
    console.error('Stripe checkout error:', session.error)
    return NextResponse.json({ error: 'Unable to create checkout session. Please try again.' }, { status: 500 })
  }

  return NextResponse.json({ url: session.url })
}
