import FeatureCard, { FeatureItem } from './client/FeatureCard';

const featuresData: FeatureItem[] = [
  {
    title: 'Feature Commercial Listings',
    description: 'Explore our premium selection of commercial properties and business opportunities in prime locations.',
    backgroundImage: '/images/slide1.jpg',
    link: '/listings'
  },
  {
    title: 'Businesses Available',
    description: 'Discover turn-key business opportunities and established enterprises ready for new ownership.',
    backgroundImage: '/images/slide2.jpg',
    link: '/businesses'
  },
  {
    title: 'Investor\'s Development',
    description: 'Connect with AJ Rana for expert guidance on funding solutions and portfolio enhancement strategies.',
    backgroundImage: '/images/slide3.jpg',
    link: '/quote'
  }
];

const Features = () => {
  return (
    <div className="relative -mt-32 z-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
