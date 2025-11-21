

// components/features/home/NewsletterSection.tsx
'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { subscribe as subscribeFn } from '@/services/subscription'
import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { toast } from 'sonner'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const { mutate: subscribe, isPending } = useMutation({
    mutationFn: subscribeFn,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return;

    subscribe({ email }, {
      onSuccess: () => {
        setEmail('')
        toast.success(
          "Thank you for subscribing to our newsletter!"
        );
      },
      onError: () => {
        toast.error("Failed to subscribe. Please try again.");
      },
    });
  }

  return (
    <section className="py-32 relative overflow-hidden">

      <div className="">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Subscribe to our Newsletter
          </h2>

          <p className="text-xl mb-16 max-w-2xl mx-auto leading-relaxed">
            Subscribe for Updates: Stay informed about the latest investor updates,
            financial results, and announcements by subscribing to our newsletter.
          </p>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="flex max-w-2xl mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12 rounded-r-none"
            />
            <Button
              type="submit"
              size="lg"
              disabled={isPending}
              className='rounded-l-none h-12'
            >
              {isPending ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}