'use client'
import { useForm, ValidationError } from '@formspree/react'

export default function ContactForm() {
  const [formState, submit] = useForm(process.env.NEXT_PUBLIC_FORM)

  if (formState.succeeded) {
    return (
      <p className="contact-success" role="status">Thank you — Dana will be in touch shortly.</p>
    )
  }

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <div className="contact-form-row">
        <div>
          <label htmlFor="contact-name" className="sr-only">Your name</label>
          <input
            id="contact-name"
            type="text"
            name="name"
            placeholder="Your name"
            autoComplete="name"
            required
            aria-required="true"
          />
          <ValidationError field="name" prefix="Name" errors={formState.errors} className="form-error" />
        </div>
        <div>
          <label htmlFor="contact-email" className="sr-only">Email address</label>
          <input
            id="contact-email"
            type="email"
            name="email"
            placeholder="Email address"
            autoComplete="email"
            required
            aria-required="true"
          />
          <ValidationError field="email" prefix="Email" errors={formState.errors} className="form-error" />
        </div>
      </div>
      <div>
        <label htmlFor="contact-message" className="sr-only">Your message</label>
        <textarea
          id="contact-message"
          name="message"
          placeholder="Your message…"
          required
          aria-required="true"
        />
        <ValidationError field="message" prefix="Message" errors={formState.errors} className="form-error" />
      </div>
      <button
        type="submit"
        disabled={formState.submitting}
        className="btn-contact-submit"
        aria-label={formState.submitting ? 'Sending message…' : 'Send message'}
      >
        {formState.submitting ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  )
}
