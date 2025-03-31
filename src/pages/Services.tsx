
import { motion } from "framer-motion";
import { Code, Cloud, ShieldCheck, Database, BarChart, Monitor, Server, Cpu } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";

const Services = () => {
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
                  Premium IT Services
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
                Comprehensive technology solutions designed to drive innovation, enhance efficiency, and accelerate growth for your business.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
            <ServiceCard
              title="Web Development"
              description="Creating stunning, responsive websites and web applications that engage users and drive conversions."
              icon={Monitor}
              delay={0.6}
            />
            <ServiceCard
              title="Infrastructure Management"
              description="End-to-end management of your IT infrastructure to ensure reliability and performance."
              icon={Server}
              delay={0.7}
            />
            <ServiceCard
              title="Digital Transformation"
              description="Guiding your business through the process of integrating digital technology into all areas of operations."
              icon={Cpu}
              delay={0.8}
            />
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {/* Software Development */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <SectionHeading
                title="Custom Software Development"
                subtitle="Tailored solutions that address your unique business challenges."
                centered={false}
              />
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Our expert development team creates custom software solutions that align perfectly with your business requirements. We follow a collaborative approach, ensuring that the final product not only meets but exceeds your expectations.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-golden-500 flex items-center justify-center flex-shrink-0 mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold">Requirement Analysis</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      In-depth understanding of your business needs and objectives.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-golden-500 flex items-center justify-center flex-shrink-0 mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold">Custom Development</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Building software that perfectly fits your workflow and requirements.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-golden-500 flex items-center justify-center flex-shrink-0 mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold">Testing & Quality Assurance</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Rigorous testing to ensure reliability and high performance.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-golden-500 flex items-center justify-center flex-shrink-0 mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold">Deployment & Support</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Smooth implementation and ongoing maintenance.
                    </p>
                  </div>
                </div>
              </div>
              <Link to="/contact" className="button-golden">
                Discuss Your Project
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Custom Software Development"
                  className="rounded-xl shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-gold rounded-full blur-2xl opacity-40"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cybersecurity Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <SectionHeading
                title="Cybersecurity"
                subtitle="Robust protection for your valuable data and digital assets."
                centered={false}
              />
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                In today's digital landscape, cybersecurity is not optional—it's essential. Our comprehensive security solutions are designed to protect your business from evolving threats while ensuring compliance with industry regulations.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-golden-500 flex items-center justify-center flex-shrink-0 mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold">Security Assessment</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Comprehensive evaluation of your current security posture.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-golden-500 flex items-center justify-center flex-shrink-0 mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold">Threat Protection</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Advanced solutions to detect and neutralize security threats.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-golden-500 flex items-center justify-center flex-shrink-0 mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold">Data Protection</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Safeguarding sensitive information with encryption and access controls.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-golden-500 flex items-center justify-center flex-shrink-0 mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold">Incident Response</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Quick and effective response to security incidents.
                    </p>
                  </div>
                </div>
              </div>
              <Link to="/contact" className="button-golden">
                Secure Your Business
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Cybersecurity"
                  className="rounded-xl shadow-xl"
                />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-gold rounded-full blur-2xl opacity-40"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Elevate Your IT Infrastructure?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Contact us today to discuss how our premium IT services can help your business thrive in the digital era.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/contact" className="button-golden">
                Get in Touch
              </Link>
              <a href="tel:+15551234567" className="button-outline">
                Call Us Directly
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
