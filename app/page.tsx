import HeroSection from '@/components/features/home/HeroSection'
import AboutSection from '@/components/features/home/AboutSection'
import HowWeWork from '@/components/features/home/HowWeWork'
import CategoriesSection from '@/components/features/home/CategoriesSection'
import TestimonialsSection from '@/components/features/home/TestimonialsSection'
import NewsletterSection from '@/components/features/home/NewsletterSection'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <HowWeWork />
      <CategoriesSection />
      <TestimonialsSection />
      <NewsletterSection />
    </main>
  )
}