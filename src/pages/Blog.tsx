
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Cloud Computing: Trends to Watch",
    category: "Cloud Computing",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "June 15, 2023",
    readTime: "5 min read",
    excerpt: "Explore the emerging trends in cloud computing that are shaping the future of business technology infrastructure.",
    delay: 0.1,
  },
  {
    id: 2,
    title: "Cybersecurity Best Practices for Remote Workforces",
    category: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "May 22, 2023",
    readTime: "7 min read",
    excerpt: "Learn how to protect your organization's data while supporting a distributed workforce in today's hybrid work environment.",
    delay: 0.2,
  },
  {
    id: 3,
    title: "The Role of AI in Modern Software Development",
    category: "Software Development",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "April 10, 2023",
    readTime: "6 min read",
    excerpt: "Discover how artificial intelligence is revolutionizing the way we approach software development and increasing efficiency.",
    delay: 0.3,
  },
  {
    id: 4,
    title: "Digital Transformation: A Roadmap for Success",
    category: "IT Consultancy",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "March 5, 2023",
    readTime: "8 min read",
    excerpt: "A comprehensive guide to navigating the challenges of digital transformation and achieving sustainable business growth.",
    delay: 0.4,
  },
  {
    id: 5,
    title: "The Importance of Data Analytics in Business Decision Making",
    category: "Database Management",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "February 18, 2023",
    readTime: "5 min read",
    excerpt: "How leveraging data analytics can provide valuable insights and drive more informed business decisions.",
    delay: 0.5,
  },
  {
    id: 6,
    title: "Optimizing Web Performance for Better User Experience",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "January 30, 2023",
    readTime: "6 min read",
    excerpt: "Strategies and techniques to enhance your website's performance and provide a superior user experience.",
    delay: 0.6,
  },
];

const Blog = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-black"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-gold">
                  Tech Insights
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8">
                Stay informed with the latest trends, insights, and best practices in the world of technology.
              </p>
              <div className="relative max-w-xl mx-auto">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full px-5 py-3 pr-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-golden-500 focus:border-transparent"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-golden-500">
                  <Search size={20} />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Latest Articles"
            subtitle="Explore our collection of articles covering various aspects of technology and business."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: post.delay }}
                viewport={{ once: true }}
                className="glass-card overflow-hidden group hover-scale hover-glow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3 text-sm text-gray-500">
                    <span className="inline-flex items-center">
                      <Calendar size={14} className="mr-1" /> {post.date}
                    </span>
                    <span className="inline-flex items-center">
                      <Clock size={14} className="mr-1" /> {post.readTime}
                    </span>
                  </div>
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-golden-100 text-golden-800 rounded-full mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {post.excerpt}
                  </p>
                  <Link
                    to="#"
                    className="flex items-center text-golden-500 font-medium hover:underline"
                  >
                    Read More <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="button-outline">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              title="Stay Updated"
              subtitle="Subscribe to our newsletter to receive the latest updates, insights, and special offers."
            />
            <div className="mt-8">
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-5 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-golden-500 focus:border-transparent"
                  required
                />
                <button type="submit" className="button-golden">
                  Subscribe
                </button>
              </form>
              <p className="text-sm text-gray-500 mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
