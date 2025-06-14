import Image from 'next/image';
import { CtaButton } from '../client/CtaButton';

const CallToAction = () => {
  return (
    <div className="relative py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">        <Image
          src="/images/slide2.jpg"
          alt="Background"
          fill
          sizes="100vw"
          quality={85}
          className="object-cover scale-105 transform transition-transform duration-[2s] hover:scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-900/85 to-blue-900/95 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 animate-fade-in">
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Look like a pro when you&apos;re just starting out
            </h2>
              <div className="h-1 w-24 bg-red-600 mx-auto mt-6"></div>
          </div>
          
          <p className="text-xl text-white/90 leading-relaxed">
            Let our expertise guide you through every step of your commercial real estate journey.
            From finding the perfect location to securing funding, we&apos;ve got you covered.
          </p>

          <div className="pt-4">
            <CtaButton href="/contact">
              Subscribe
            </CtaButton>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-red-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full filter blur-3xl"></div>
    </div>
  );
};

export default CallToAction;
