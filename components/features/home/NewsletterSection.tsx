import NewsLetterFrom from "./NewsLetterFrom";

export default function NewsletterSection() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="subtitle">Design Smarter Every Day</h2>

          <p className="text-xl mb-16 max-w-2xl mx-auto leading-relaxed">
            Subscribe for daily design tips, inspiration, events, and
            opportunities tailored for all designers.
          </p>
          <NewsLetterFrom />
        </div>
      </div>
    </section>
  );
}
