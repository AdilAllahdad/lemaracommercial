import Hero from '@/components/Hero';
import Features from '@/components/Features';
import AboutSection from '@/components/AboutSection';
import CallToAction from '@/components/server/CallToAction';
import BlogSection from '@/components/server/BlogSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <AboutSection />
      <BlogSection />
      <CallToAction />
    </main>
  );
}
