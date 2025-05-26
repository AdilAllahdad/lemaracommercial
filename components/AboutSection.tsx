import Image from 'next/image';
import Link from 'next/link';

const AboutSection = () => {
  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            We are here
          </h2>
          <div className="h-1 w-24 bg-red-900 mx-auto"></div>
        </div>

        {/* Row 1: Text Left, Image Right */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
             Providing Customized, Strategic Brokerage Solutions
            </h3>
            <p className="text-lg text-gray-600">
             Our structured services platform allows our clients to focus on their own business operations, knowing that Lemara Commercial’s team of real estate and retail business experts is taking care of all of the strategic and operational real estate and business details.
            </p>
            <Link 
              href="/services" 
              className="inline-block bg-red-900 text-white px-8 py-3 
                       rounded-md font-semibold hover:bg-red-800 
                       transition-all duration-300"
            >
              Our Services
            </Link>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="/images/service1.jpg"
              alt="Commercial Real Estate"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Row 2: Image Left, Text Right */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-[400px] md:order-1">
            <Image
              src="/images/service2.jpg"
              alt="Business Opportunities"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="space-y-6 md:order-2">
            <h3 className="text-3xl font-bold text-gray-900">
              Full-Service Strategic and Corporate Model
            </h3>
            <p className="text-lg text-gray-600">
              Our knowledge and expertise in all areas of buy-sell business, multi-family apartment buildings, and commercial real estate provides our clients with a comprehensive approach to their business and real estate needs.
            </p>
            <Link 
              href="/opportunities" 
              className="inline-block bg-red-900 text-white px-8 py-3 
                       rounded-md font-semibold hover:bg-red-800 
                       transition-all duration-300"
            >
              Explore Opportunities
            </Link>
          </div>
        </div>

        {/* Row 3: Text Left, Image Right */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
             Interested in an Investment Property?
            </h3>
            <p className="text-lg text-gray-600">
              If you’re interested in an investment property, acquiring an industrial property, or any other commercial purchase, and you’d like to talk to a commercial real estate agent, Contact Lemara Commercial today!
            </p>
            <Link 
              href="/investment" 
              className="inline-block bg-red-900 text-white px-8 py-3 
                       rounded-md font-semibold hover:bg-red-800 
                       transition-all duration-300"
            >
              Investment Services
            </Link>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="/images/service3.jpg"
              alt="Investment Solutions"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
