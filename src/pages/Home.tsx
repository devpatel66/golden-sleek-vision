import { motion } from "framer-motion";
import { ArrowRight, Code, Cloud, ShieldCheck, Database, BarChart, Users, Award, Target, CheckCircle, Mail, TrendingUp, Globe, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import AnimatedCard from "@/components/AnimatedCard";

const Home = () => {
  // Fetch published services
  const { data: services } = useQuery({
    queryKey: ['services-published'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .eq('status', 'published')
        .limit(5);
      
      if (error) throw error;
      return data;
    },
  });

  // Fetch recent projects
  const { data: projects } = useQuery({
    queryKey: ['projects-recent'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('status', 'completed')
        .order('created_at', { ascending: false })
        .limit(3);
      
      if (error) throw error;
      return data;
    },
  });

  // Fetch recent blog posts
  const { data: blogs } = useQuery({
    queryKey: ['blogs-recent'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('status', 'published')
        .order('published_at', { ascending: false })
        .limit(3);
      
      if (error) throw error;
      return data;
    },
  });

  // Fetch published testimonials
  const { data: testimonials } = useQuery({
    queryKey: ['testimonials-published'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .eq('status', 'published')
        .order('created_at', { ascending: false })
        .limit(3);
      
      if (error) throw error;
      return data;
    },
  });

  // Icon mapping for services
  const getServiceIcon = (category: string) => {
    const iconMap: { [key: string]: any } = {
      'Software Development': Code,
      'Cloud Computing': Cloud,
      'Cybersecurity': ShieldCheck,
      'Database Management': Database,
      'IT Consultancy': BarChart,
    };
    return iconMap[category] || Code;
  };

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

      {/* Company Stats Section */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-golden-500 mb-2">500+</div>
              <p className="text-gray-600 dark:text-gray-400">Projects Completed</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-golden-500 mb-2">200+</div>
              <p className="text-gray-600 dark:text-gray-400">Happy Clients</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-golden-500 mb-2">10+</div>
              <p className="text-gray-600 dark:text-gray-400">Years Experience</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-golden-500 mb-2">24/7</div>
              <p className="text-gray-600 dark:text-gray-400">Support Available</p>
            </motion.div>
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
            {services?.map((service, index) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description || ''}
                icon={getServiceIcon(service.category)}
                delay={index * 0.1}
              />
            ))}
            
            {/* Show "Explore More" card if there are services */}
            {services && services.length > 0 && (
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
            )}
          </div>

          {/* Fallback if no services */}
          {(!services || services.length === 0) && (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Services will appear here once they are published.
              </p>
              <Link to="/services" className="button-golden">
                Learn More About Our Services
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Technologies We Master"
            subtitle="Our expertise spans across the latest technologies and frameworks to deliver cutting-edge solutions."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "React", logo: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=100&h=100&fit=crop" },
              { name: "Node.js", logo: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=100&h=100&fit=crop" },
              { name: "Python", logo: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=100&h=100&fit=crop" },
              { name: "AWS", logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100&h=100&fit=crop" },
              { name: "Docker", logo: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=100&h=100&fit=crop" },
              { name: "MongoDB", logo: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop" }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center p-4 glass-card hover-scale"
              >
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="w-16 h-16 rounded-lg mb-3 object-cover"
                />
                <span className="text-sm font-medium text-center">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Why Choose Golden Age Infotech?"
            subtitle="We combine technical expertise with business acumen to deliver solutions that drive real results."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedCard delay={0.1}>
              <div className="text-center">
                <div className="w-16 h-16 bg-golden-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-golden-500" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Industry Expertise</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Deep domain knowledge across multiple industries with proven track record of successful implementations.
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.2}>
              <div className="text-center">
                <div className="w-16 h-16 bg-golden-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-golden-500" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Dedicated Team</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Skilled professionals committed to your success with 24/7 support and maintenance services.
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.3}>
              <div className="text-center">
                <div className="w-16 h-16 bg-golden-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="text-golden-500" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Results-Driven</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Focus on delivering measurable business value through technology solutions that scale with your growth.
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.4}>
              <div className="text-center">
                <div className="w-16 h-16 bg-golden-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="text-golden-500" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Scalable Solutions</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Future-proof architectures designed to grow with your business needs and handle increasing demands.
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.5}>
              <div className="text-center">
                <div className="w-16 h-16 bg-golden-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="text-golden-500" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Global Reach</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Serving clients worldwide with remote collaboration tools and flexible engagement models.
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.6}>
              <div className="text-center">
                <div className="w-16 h-16 bg-golden-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-golden-500" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Rapid Delivery</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Agile development methodologies ensure quick turnaround times without compromising on quality.
                </p>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      {projects && projects.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Recent Projects"
              subtitle="Take a look at some of our latest successful projects and implementations."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card overflow-hidden group hover:shadow-xl transition-shadow duration-300"
                >
                  {project.image_url && (
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image_url}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-golden-500 font-medium">{project.category}</span>
                      {project.client && (
                        <span className="text-sm text-gray-500">{project.client}</span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                    {project.description && (
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {project.description.length > 100 
                          ? `${project.description.substring(0, 100)}...` 
                          : project.description}
                      </p>
                    )}
                    {project.live_url && (
                      <a
                        href={project.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-golden-500 font-medium hover:underline"
                      >
                        View Project <ArrowRight size={16} className="ml-2" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/portfolio" className="button-golden">
                View All Projects
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Development Process"
            subtitle="A proven methodology that ensures successful project delivery from concept to deployment."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative">
                <div className="w-20 h-20 bg-golden-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-black">1</span>
                </div>
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-golden-500/30"></div>
              </div>
              <h3 className="text-xl font-bold mb-3">Discovery</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Understanding your business needs, goals, and technical requirements through detailed consultation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative">
                <div className="w-20 h-20 bg-golden-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-black">2</span>
                </div>
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-golden-500/30"></div>
              </div>
              <h3 className="text-xl font-bold mb-3">Planning</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Creating detailed project roadmaps, technical architecture, and resource allocation strategies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative">
                <div className="w-20 h-20 bg-golden-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-black">3</span>
                </div>
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-golden-500/30"></div>
              </div>
              <h3 className="text-xl font-bold mb-3">Development</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Agile development with regular updates, testing, and client feedback integration throughout the process.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-golden-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-black">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Deployment</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Seamless deployment with comprehensive testing, training, and ongoing support for your team.
              </p>
            </motion.div>
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
                  src="https://images.unsplash.com/photo-1600880292203-39b9d08a9b1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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

      {/* Client Logos Section */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Trusted by Leading Companies"
            subtitle="We're proud to work with innovative companies across various industries."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-70">
            {[
              "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=150&h=80&fit=crop",
              "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=150&h=80&fit=crop",
              "https://images.unsplash.com/photo-1516321335469-31706a17aaef?w=150&h=80&fit=crop",
              "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=150&h=80&fit=crop",
              "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=150&h=80&fit=crop",
              "https://images.unsplash.com/photo-1560472355-536de3962603?w=150&h=80&fit=crop"
            ].map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.7, scale: 1 }}
                whileHover={{ opacity: 1, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center justify-center p-4"
              >
                <img
                  src={logo}
                  alt={`Client ${index + 1}`}
                  className="max-w-full h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
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
            {testimonials && testimonials.length > 0 ? (
              testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={testimonial.id}
                  name={testimonial.name}
                  position={testimonial.position}
                  company={testimonial.company}
                  content={testimonial.content}
                  rating={testimonial.rating}
                  image={testimonial.image_url || undefined}
                  delay={index * 0.1}
                />
              ))
            ) : (
              // Fallback testimonials if none in database
              <>
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
              </>
            )}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      {blogs && blogs.length > 0 && (
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Latest from Our Blog"
              subtitle="Stay updated with the latest trends, insights, and news from the world of technology."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog, index) => (
                <motion.article
                  key={blog.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card overflow-hidden group hover:shadow-xl transition-shadow duration-300"
                >
                  {blog.image_url && (
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={blog.image_url}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-golden-500 font-medium">{blog.category}</span>
                      <span className="text-sm text-gray-500">
                        {blog.published_at ? new Date(blog.published_at).toLocaleDateString() : ''}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-golden-500 transition-colors">
                      {blog.title}
                    </h3>
                    {blog.excerpt && (
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {blog.excerpt.length > 120 
                          ? `${blog.excerpt.substring(0, 120)}...` 
                          : blog.excerpt}
                      </p>
                    )}
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">By {blog.author}</span>
                      {blog.views && (
                        <span className="text-sm text-gray-500">{blog.views} views</span>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/blog" className="button-golden">
                Read More Articles
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard className="max-w-4xl mx-auto text-center py-12 px-8 bg-gradient-to-r from-golden-500/10 to-golden-200/5">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-golden-500/20 rounded-full flex items-center justify-center">
                <Mail className="text-golden-500" size={32} />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated with Tech Insights
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest technology trends, industry insights, and exclusive updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-golden-500"
              />
              <button className="button-golden whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </AnimatedCard>
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
