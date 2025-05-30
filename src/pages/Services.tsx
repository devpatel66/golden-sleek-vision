import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Star } from "lucide-react";
import { useState, useEffect } from "react";
import SectionHeading from "@/components/SectionHeading";
import { supabase } from "@/integrations/supabase/client";
import { Tables } from "@/integrations/supabase/types";

type Service = Tables<'services'>;

const Services = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .eq('status', 'published')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setServices(data || []);
    } catch (error) {
      console.error('Error fetching services:', error);
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
                  Premium Services
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
                Comprehensive IT solutions designed to accelerate your business growth and digital transformation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What We Offer"
            subtitle={`Discover our comprehensive range of ${services.length} IT services tailored to meet your business needs.`}
          />

          {loading ? (
            <div className="flex h-64 items-center justify-center">
              <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-t-2 border-golden-500"></div>
            </div>
          ) : (
            <>
              {services.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-600 dark:text-gray-400 text-lg">
                    No services available at the moment.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {services.map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="glass-card p-6 hover-scale hover-glow"
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-golden-100 dark:bg-golden-900 rounded-lg flex items-center justify-center mr-4">
                          <Star className="w-6 h-6 text-golden-600 dark:text-golden-400" />
                        </div>
                        <div>
                          <span className="inline-block px-3 py-1 text-xs font-semibold bg-golden-100 text-golden-800 rounded-full">
                            {service.category}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">
                        {service.description || 'No description available.'}
                      </p>
                      <a
                        href="/contact"
                        className="flex items-center text-golden-500 font-medium hover:underline"
                      >
                        Learn More <ArrowRight size={16} className="ml-2" />
                      </a>
                    </motion.div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Why Choose Us"
            subtitle="We deliver exceptional results through our proven methodology and expertise."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "Proven Track Record",
                description: "Over 200+ successful projects delivered across various industries.",
              },
              {
                icon: Star,
                title: "Expert Team",
                description: "Certified professionals with years of experience in their respective fields.",
              },
              {
                icon: CheckCircle,
                title: "24/7 Support",
                description: "Round-the-clock technical support to ensure your business never stops.",
              },
              {
                icon: Star,
                title: "Scalable Solutions",
                description: "Future-proof solutions that grow with your business needs.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-golden-100 dark:bg-golden-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-golden-600 dark:text-golden-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your goals. Contact us today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="/contact" className="button-golden">
                Get Started Today
              </a>
              <a href="/portfolio" className="button-outline">
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
