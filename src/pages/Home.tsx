
import { motion } from "framer-motion";
import { ArrowRight, Code, Cloud, ShieldCheck, Database, BarChart } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import AnimatedCard from "@/components/AnimatedCard";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-black"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 lg:pr-12">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Transforming Businesses with{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-gold">
                    Premium IT Solutions
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8">
                  Golden Age Infotech delivers cutting-edge technology services and expert consultancy to help your business thrive in the digital era.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link to="/contact" className="button-golden">
                    Get Started
                  </Link>
                  <Link to="/services" className="button-outline">
                    Explore Services
                  </Link>
                </div>
              </motion.div>
            </div>
            <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1581092921461-39b9d08a9b1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="IT Solutions"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-golden-500/30 to-transparent"></div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-gold rounded-full blur-2xl opacity-40"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-gold rounded-full blur-2xl opacity-40"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Premium Services"
            subtitle="Comprehensive IT solutions tailored to meet your business needs and drive growth."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Custom Software Development"
              description="Tailor-made software solutions designed to address your specific business challenges and requirements."
              icon={Code}
              delay={0.1}
            />
            <ServiceCard
              title="Cloud Computing"
              description="Scalable and secure cloud infrastructure to boost efficiency and reduce operational costs."
              icon={Cloud}
              delay={0.2}
            />
            <ServiceCard
              title="Cybersecurity"
              description="Comprehensive security solutions to protect your valuable data and digital assets."
              icon={ShieldCheck}
              delay={0.3}
            />
            <ServiceCard
              title="Database Management"
              description="Efficient database design, implementation, and maintenance for optimal performance."
              icon={Database}
              delay={0.4}
            />
            <ServiceCard
              title="IT Consultancy"
              description="Strategic technology guidance to help you make informed decisions and achieve your goals."
              icon={BarChart}
              delay={0.5}
            />
            <div className="glass-card p-6 flex flex-col items-center justify-center text-center">
              <h3 className="text-xl font-bold mb-3">Explore More</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Discover our full range of IT services and solutions.
              </p>
              <Link
                to="/services"
                className="flex items-center text-golden-500 font-medium hover:underline"
              >
                View all services <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="About Golden Age Infotech"
                  className="rounded-xl shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-gold rounded-full blur-2xl opacity-40"></div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <SectionHeading
                title="Who We Are"
                subtitle="Golden Age Infotech is a leading IT services and consultancy firm dedicated to empowering businesses with innovative technology solutions."
                centered={false}
              />
              
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                With years of industry experience and a team of skilled professionals, we deliver cutting-edge IT solutions that help businesses streamline operations, enhance productivity, and achieve their strategic goals.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-golden-500/20 flex items-center justify-center flex-shrink-0 mr-3">
                    <span className="text-golden-500 font-bold">01</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Innovation</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Pioneering solutions at the forefront of technology
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-golden-500/20 flex items-center justify-center flex-shrink-0 mr-3">
                    <span className="text-golden-500 font-bold">02</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Excellence</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Committed to delivering exceptional quality in every project
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-golden-500/20 flex items-center justify-center flex-shrink-0 mr-3">
                    <span className="text-golden-500 font-bold">03</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Reliability</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Trustworthy partner for your technology needs
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-golden-500/20 flex items-center justify-center flex-shrink-0 mr-3">
                    <span className="text-golden-500 font-bold">04</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Client-Focused</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Tailored solutions designed around your business goals
                    </p>
                  </div>
                </div>
              </div>
              
              <Link to="/about" className="button-golden">
                Learn More About Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Hear from businesses that have transformed their operations with our IT solutions."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="Sarah Johnson"
              position="CTO"
              company="Quantum Enterprises"
              content="Golden Age Infotech transformed our outdated systems into a streamlined digital ecosystem. Their expertise in cloud solutions saved us time and resources while improving overall efficiency."
              rating={5}
              delay={0.1}
            />
            <TestimonialCard
              name="Michael Davis"
              position="CEO"
              company="InnovateTech"
              content="The cybersecurity solutions provided by Golden Age Infotech have given us peace of mind. Their proactive approach to security has protected us from multiple threats."
              rating={5}
              delay={0.2}
            />
            <TestimonialCard
              name="Jennifer Lee"
              position="Operations Director"
              company="Nexus Systems"
              content="Working with Golden Age Infotech has been a game-changer for our business. Their custom software development addressed our specific needs perfectly."
              rating={4}
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-golden-500/10 to-golden-200/5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedCard className="max-w-4xl mx-auto text-center py-12 px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business with Premium IT Solutions?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Get in touch with our team of experts to discuss your IT needs and discover how Golden Age Infotech can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/contact" className="button-golden">
                Contact Us
              </Link>
              <Link to="/services" className="button-outline">
                Explore Our Services
              </Link>
            </div>
          </AnimatedCard>
        </div>
      </section>
    </>
  );
};

export default Home;
