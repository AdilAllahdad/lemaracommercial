import { BlogCard } from '../client/BlogCard';

// Blog post type definition
type BlogPost = {
  id: number;
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
  link: string;
};

// Sample blog posts data
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'How to Check If Your Commercial Real Estate Broker Is Trustworthy',
    date: 'January 29, 2024',
    category: 'Real Estate',
    image: '/images/post1.jpg',
    excerpt: 'Learn the essential qualities and red flags to look for when choosing a commercial real estate broker for your business ventures.',
    link: '/blog/broker-trustworthiness'
  },
  {
    id: 2,
    title: 'The Difference between A, B, and C Class Buildings',
    date: 'January 29, 2024',
    category: 'Real Estate',
    image: '/images/post2.jpg',
    excerpt: 'Understanding building classifications in commercial real estate and how they affect your investment decisions.',
    link: '/blog/building-classifications'
  },
  {
    id: 3,
    title: 'Things You Should Consider When Hiring a Commercial Real Estate Agent',
    date: 'January 29, 2024',
    category: 'Real Estate',
    image: '/images/post3.jpg',
    excerpt: 'Essential factors to evaluate when selecting a commercial real estate agent for your property needs.',
    link: '/blog/hiring-agent-tips'
  }
];

const BlogSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Blogs</h2>
              <div className="h-1 w-24 bg-red-900 mx-auto my-6"></div>

          <p className="text-lg text-gray-600">
            Stay informed with our latest insights and updates in commercial real estate
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
