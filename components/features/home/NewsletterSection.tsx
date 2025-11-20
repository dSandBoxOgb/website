

// components/features/home/NewsletterSection.tsx
'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Subscribed with:', email)
    setEmail('')
  }

  return (
    <section className="py-32 relative overflow-hidden">

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Main Heading */}
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Subscribe to our Newsletter
          </h2>

          {/* Description */}
          <p className="text-xl  mb-16 max-w-2xl mx-auto leading-relaxed">
            Subscribe for Updates: Stay informed about the latest investor updates,
            financial results, and announcements by subscribing to our newsletter.
          </p>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-6 py-4 h-10 bg-black border border-gray-700 text-white rounded-xl focus:outline-none focus:border-gray-500 placeholder-gray-500 text-lg"
            />
            <Button
              type="submit"
              size="lg"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}