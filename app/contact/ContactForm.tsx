'use client'

import { useState } from 'react'

const FORM_ACTION = process.env.NEXT_PUBLIC_FORMSPREE_ACTION || ''

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!FORM_ACTION) return

    setStatus('sending')
    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const res = await fetch(FORM_ACTION, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })

      if (!res.ok) throw new Error('Bad response')
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  // If you haven't created the Formspree endpoint yet, show mailto-only UI.
//   if (!FORM_ACTION) {
//     return (
//       <div className="text-sm text-white/70">
//         Contact form is not connected yet. Add de className="text-white/90">NEXT_PUBLIC_FORMSPREE_ACTION</code> to enable it.
//       </div>
//     )
//   }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div>
        <label className="text-xs uppercase tracking-widest text-white/60">Name</label>
        <input
          name="name"
          required
          className="mt-2 w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none focus:border-amber-300"
        />
      </div>

      <div>
        <label className="text-xs uppercase tracking-widest text-white/60">Email</label>
        <input
          name="email"
          type="email"
          required
          className="mt-2 w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none focus:border-amber-300"
        />
      </div>

      <div>
        <label className="text-xs uppercase tracking-widest text-white/60">Message</label>
        <textarea
          name="message"
          required
          rows={5}
          className="mt-2 w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none focus:border-amber-300"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="inline-flex w-fit items-center justify-center rounded-md bg-amber-300 px-4 py-2 text-xs font-semibold text-black hover:bg-amber-200 disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>

      {status === 'sent' ? (
        <p className="text-sm text-white/70">Message sent.</p>
      ) : null}

      {status === 'error' ? (
        <p className="text-sm text-red-300">Something went wrong. Try again.</p>
      ) : null}
    </form>
  )
}
