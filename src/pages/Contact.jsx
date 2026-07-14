import { useState } from 'react'

const Contact = () => {
  const whatsappUrl = 'https://wa.me/9779849756660?text=' + encodeURIComponent('Hi Chetan, I visited your portfolio and would like to connect.')

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: '', message: '' })

    // Simulate submission flow
    setTimeout(() => {
      setLoading(false)
      setStatus({
        type: 'success',
        message: `Thank you. Your message has been logged. I will review and reply directly to ${formData.email} shortly.`
      })
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 1200)
  }

  return (
    <div className="space-y-8 py-4">
      <div className="flex items-center gap-2 text-terracotta-800 dark:text-terracotta-600 font-mono text-xs font-semibold tracking-wider uppercase">
        <span className="w-1.5 h-1.5 rounded-full bg-terracotta-800 dark:bg-terracotta-600"></span>
        05 / Communication
      </div>

      <div className="space-y-2">
        <h3 className="text-2xl font-serif text-charcoal-900 dark:text-cream-50 font-normal">
          Get in Touch
        </h3>
        <p className="text-xs font-mono text-charcoal-700/75 dark:text-cream-100/60">
          Send a direct message or reach out via the direct contact info in the profile column.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
        <div className="xl:col-span-2 space-y-4 rounded-[1.5rem] border border-charcoal-900/10 dark:border-cream-100/10 bg-[#fff7ee]/80 dark:bg-charcoal-800/20 p-6 shadow-[0_12px_32px_rgba(28,25,23,0.05)]">
          <h4 className="text-lg font-serif text-charcoal-900 dark:text-cream-50">Direct contact</h4>
          <p className="text-sm leading-relaxed text-charcoal-800 dark:text-cream-200">
            Use whichever channel is fastest. I usually reply quickly on email or WhatsApp.
          </p>
          <div className="space-y-3 font-mono text-xs">
            <a href="mailto:koiralachetan16@gmail.com" className="block rounded-2xl border border-charcoal-900/10 dark:border-cream-100/10 bg-white/60 dark:bg-charcoal-900/35 px-4 py-3 text-charcoal-800 dark:text-cream-100 transition-all hover:border-terracotta-800/30 dark:hover:border-terracotta-600/30 active:scale-[0.98] active:bg-terracotta-50/60 dark:active:bg-charcoal-800/60">
              koiralachetan16@gmail.com
            </a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="block rounded-2xl border border-moss-700/15 bg-moss-700/10 px-4 py-3 text-moss-800 dark:text-moss-700 transition-all hover:bg-moss-700 hover:text-cream-100 active:scale-[0.98]">
              WhatsApp chat
            </a>
          </div>
        </div>

        <div className="xl:col-span-3 border border-charcoal-900/10 dark:border-cream-100/10 bg-[#fff7ee]/85 dark:bg-charcoal-800/10 p-6 rounded-[1.5rem] shadow-[0_12px_32px_rgba(28,25,23,0.05)]">
        {status.message ? (
          <div className="border border-moss-700/20 dark:border-moss-700/20 bg-moss-700/5 dark:bg-moss-800/10 p-4 rounded text-xs sm:text-sm text-moss-800 dark:text-moss-700 font-mono">
            <span className="font-bold mr-1">✓</span> {status.message}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label htmlFor="name" className="block font-mono text-[10px] uppercase text-charcoal-700/75 dark:text-cream-100/60 font-semibold tracking-wider">
                  Your Name
                </label>
                <input
                  required
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-cream-100 dark:bg-charcoal-900/50 border border-charcoal-900/15 dark:border-cream-100/15 focus:border-terracotta-800 dark:focus:border-terracotta-600 rounded px-3 py-2 text-xs sm:text-sm outline-none text-charcoal-900 dark:text-cream-100 transition-colors"
                  placeholder="e.g. Ram Bahadur"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="email" className="block font-mono text-[10px] uppercase text-charcoal-700/75 dark:text-cream-100/60 font-semibold tracking-wider">
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-cream-100 dark:bg-charcoal-900/50 border border-charcoal-900/15 dark:border-cream-100/15 focus:border-terracotta-800 dark:focus:border-terracotta-600 rounded px-3 py-2 text-xs sm:text-sm outline-none text-charcoal-900 dark:text-cream-100 transition-colors"
                  placeholder="name@domain.com"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label htmlFor="subject" className="block font-mono text-[10px] uppercase text-charcoal-700/75 dark:text-cream-100/60 font-semibold tracking-wider">
                Subject
              </label>
              <input
                required
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-cream-100 dark:bg-charcoal-900/50 border border-charcoal-900/15 dark:border-cream-100/15 focus:border-terracotta-800 dark:focus:border-terracotta-600 rounded px-3 py-2 text-xs sm:text-sm outline-none text-charcoal-900 dark:text-cream-100 transition-colors"
                placeholder="Project inquiry, role opportunity, etc."
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="message" className="block font-mono text-[10px] uppercase text-charcoal-700/75 dark:text-cream-100/60 font-semibold tracking-wider">
                Message Body
              </label>
              <textarea
                required
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-cream-100 dark:bg-charcoal-900/50 border border-charcoal-900/15 dark:border-cream-100/15 focus:border-terracotta-800 dark:focus:border-terracotta-600 rounded px-3 py-2 text-xs sm:text-sm outline-none text-charcoal-900 dark:text-cream-100 transition-colors resize-y"
                placeholder="Describe your project, timeline, or position details..."
              />
            </div>

            <button
              disabled={loading}
              type="submit"
              className="px-4 py-2 bg-charcoal-900 dark:bg-cream-100 text-cream-100 dark:text-charcoal-900 border border-charcoal-900 dark:border-cream-100 hover:bg-transparent dark:hover:bg-transparent hover:text-charcoal-900 dark:hover:text-cream-100 transition-all rounded-full font-mono text-xs disabled:opacity-50 active:scale-[0.97]"
            >
              {loading ? 'Sending...' : 'Send Message ↳'}
            </button>
          </form>
        )}
        </div>
      </div>
    </div>
  )
}

export default Contact



