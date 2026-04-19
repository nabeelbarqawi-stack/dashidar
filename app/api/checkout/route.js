import Stripe from 'stripe'
import { NextResponse } from 'next/server'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export async function POST() {
  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    automatic_payment_methods: { enabled: true },
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Dashidar Table — 50% Deposit',
            description: 'Custom solid wood table, handcrafted in Brooklyn NY. Balance of $375 due upon completion.',
          },
          unit_amount: 37500,
        },
        quantity: 1,
      },
    ],
    success_url: `${process.env.NEXT_PUBLIC_URL}/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_URL}/#order`,
  })

  return NextResponse.json({ url: session.url })
}
