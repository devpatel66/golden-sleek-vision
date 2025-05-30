import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import SectionHeading from "@/components/SectionHeading";
import { supabase } from "@/integrations/supabase/client";
import { Tables } from "@/integrations/supabase/types";

type Project = Tables<'projects'>;

const portfolioItems = [
  {
    id: 1,
    title: "NexusConnect ERP System",
    category: "Software Development",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "A comprehensive ERP solution developed for Nexus Industries to streamline operations across multiple departments.",
    delay: 0.1,
  },
  {
    id: 2,
    title: "SecureVault Data Protection",
    category: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Implementation of advanced security measures to protect sensitive client data for a financial institution.",
    delay: 0.2,
  },
  {
    id: 3,
    title: "CloudSphere Migration",
    category: "Cloud Computing",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Seamless migration of legacy systems to a cloud-based infrastructure for improved scalability and performance.",
    delay: 0.3,
  },
  {
    id: 4,
    title: "DataFlow Analytics Platform",
    category: "Database Management",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Custom analytics platform designed to process and visualize complex data sets for actionable insights.",
    delay: 0.4,
  },
  {
    id: 5,
    title: "TechVision E-Commerce",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Feature-rich e-commerce platform with integrated payment systems and inventory management.",
    delay: 0.5,
  },
  {
    id: 6,
    title: "InnovateTech Digital Transformation",
    category: "IT Consultancy",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Comprehensive digital transformation strategy and implementation for a manufacturing firm.",
    delay: 0.6,
  },
];

const Portfolio = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('status', 'completed')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProjects(data || []);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

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
                  Project Portfolio
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
                Explore our successful projects and discover how we've helped businesses transform their IT infrastructure.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Case Studies"
            subtitle={`A showcase of our ${projects.length} recent projects and the impact they've made for our clients.`}
          />

          {loading ? (
            <div className="flex h-64 items-center justify-center">
              <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-t-2 border-golden-500"></div>
            </div>
          ) : (
            <>
              {projects.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-600 dark:text-gray-400 text-lg">
                    No completed projects to showcase at the moment.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="glass-card overflow-hidden group hover-scale hover-glow"
                    >
                      <div className="h-48 overflow-hidden">
                        {project.image_url ? (
                          <img
                            src={project.image_url}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-golden-100 to-golden-200 flex items-center justify-center">
                            <div className="text-golden-600 text-4xl font-bold">
                              {project.category.charAt(0).toUpperCase()}
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="p-6">
                        <span className="inline-block px-3 py-1 text-xs font-semibold bg-golden-100 text-golden-800 rounded-full mb-3">
                          {project.category}
                        </span>
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          {project.description || 'No description available.'}
                        </p>
                        {project.client && (
                          <p className="text-sm text-gray-500 mb-4">
                            Client: {project.client}
                          </p>
                        )}
                        {project.live_url ? (
                          <a
                            href={project.live_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-golden-500 font-medium hover:underline"
                          >
                            View Project <ArrowRight size={16} className="ml-2" />
                          </a>
                        ) : (
                          <a
                            href="#"
                            className="flex items-center text-golden-500 font-medium hover:underline"
                          >
                            View Case Study <ArrowRight size={16} className="ml-2" />
                          </a>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Trusted By"
            subtitle="We've worked with a diverse range of clients across various industries."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex items-center justify-center"
              >
                <div className="h-16 flex items-center justify-center">
                  <div className="w-32 h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-golden-400/10 to-golden-500/10 rounded-xl shadow-lg p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Get in touch with our team to discuss how we can help transform your business with our premium IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="/contact" className="button-golden">
                Contact Us
              </a>
              <a href="/services" className="button-outline">
                Explore Our Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
