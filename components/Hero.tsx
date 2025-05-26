import Link from 'next/link'
import HeroSlider from './client/HeroSlider'

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <HeroSlider />
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-primary-500 font-semibold mb-4 uppercase tracking-wider">
              Welcome to Lemara Commercial
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              A commercial real estate firm located in California
            </h1>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              We provide the professional services for healthcare industry, commercial real estate, multi-family units, apartment buildings, hotels, gas stations and help with buy-sell retail center and retail businesses.
            </p>
            <div className="space-x-4">
              <Link 
                href="/contact"
                className="inline-block bg-transparent text-white px-8 py-3 
                         font-semibold transition-all duration-300
                         border-2 border-white rounded-full
                         hover:bg-white hover:text-gray-900"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero