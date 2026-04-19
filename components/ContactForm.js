'use client'
import { useForm, ValidationError } from '@formspree/react'

export default function ContactForm() {
  const [formState, submit] = useForm(process.env.NEXT_PUBLIC_FORM)

  if (formState.succeeded) {
    return (
      <p className="contact-success">Thank you — Dana will be in touch shortly.</p>
    )
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="contact-form-row">
        <div>
          <input type="text" name="name" placeholder="Your name" required />
          <ValidationError field="name" prefix="Name" errors={formState.errors} className="form-error" />
        </div>
        <div>
          <input type="email" name="email" placeholder="Email address" required />
          <ValidationError field="email" prefix="Email" errors={formState.errors} className="form-error" />
        </div>
      </div>
      <div>
        <textarea name="message" placeholder="Your message..." required />
        <ValidationError field="message" prefix="Message" errors={formState.errors} className="form-error" />
      </div>
      <button type="submit" disabled={formState.submitting} className="btn-contact-submit">
        {formState.submitting ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  )
}
