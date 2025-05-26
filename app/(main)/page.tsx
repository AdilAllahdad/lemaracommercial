import Hero from '@/components/Hero';
import Features from '@/components/Features';
import AboutSection from '@/components/AboutSection';
import BlogSection from '@/components/server/BlogSection';
import CallToAction from '@/components/server/CallToAction';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <AboutSection />
      <BlogSection />
      <CallToAction />
    </>
  );
}
