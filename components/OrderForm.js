'use client'
import { useForm, ValidationError } from '@formspree/react'

export default function OrderForm() {
  const [formState, submit] = useForm(process.env.NEXT_PUBLIC_FORM)

  if (formState.succeeded) {
    return (
      <div className="form-success">
        <p>Thank you — Dana will be in touch within 2–3 business days.</p>
      </div>
    )
  }

  return (
    <form className="order-form" onSubmit={submit}>
      <div className="form-row">
        <div>
          <input type="text" name="name" placeholder="Your name" required />
          <ValidationError field="name" prefix="Name" errors={formState.errors} className="form-error" />
        </div>
        <div>
          <input type="email" name="email" placeholder="Email address" required />
          <ValidationError field="email" prefix="Email" errors={formState.errors} className="form-error" />
        </div>
      </div>
      <input type="text" name="location" placeholder="City / Location" />
      <select name="finish" defaultValue="">
        <option value="" disabled>Preferred wood — White Oak / Walnut / Maple / Unsure</option>
        <option>White Oak</option>
        <option>Walnut</option>
        <option>Maple</option>
        <option>Open to suggestions</option>
      </select>
      <div>
        <textarea name="message" placeholder="Tell me about your space, any custom dimensions, or questions you have..." />
        <ValidationError field="message" prefix="Message" errors={formState.errors} className="form-error" />
      </div>
      <button type="submit" className="btn-submit" disabled={formState.submitting}>
        {formState.submitting ? 'Sending…' : 'Send Inquiry'}
      </button>
    </form>
  )
}
