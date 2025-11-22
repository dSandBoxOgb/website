import NewsLetterFrom from './NewsLetterFrom'

export default function NewsletterSection() {

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
          <NewsLetterFrom />
        </div>
      </div>
    </section>
  )
}