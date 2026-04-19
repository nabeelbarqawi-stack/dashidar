import { NextResponse } from 'next/server'

export async function POST(request) {
  const origin = request.headers.get('origin') ?? 'https://dashidar.vercel.app'

  const params = new URLSearchParams({
    mode: 'payment',
    'automatic_payment_methods[enabled]': 'true',
    'line_items[0][price_data][currency]': 'usd',
    'line_items[0][price_data][product_data][name]': 'Dashidar Table',
    'line_items[0][price_data][product_data][description]': 'Custom solid wood table, handcrafted in Brooklyn NY. Made to order — 6 to 8 weeks.',
    'line_items[0][price_data][unit_amount]': '75000',
    'line_items[0][quantity]': '1',
    success_url: `${origin}/success`,
    cancel_url: `${origin}/#order`,
  })

  const res = await fetch('https://api.stripe.com/v1/checkout/sessions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params.toString(),
  })

  const session = await res.json()

  if (!res.ok) {
    return NextResponse.json({ error: session.error?.message }, { status: 500 })
  }

  return NextResponse.json({ url: session.url })
}
