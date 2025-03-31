
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
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
                Get in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-gold">
                  Touch
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
                Have questions or ready to start your project? Reach out to our team of experts.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/3"
            >
              <SectionHeading
                title="Contact Information"
                subtitle="Reach out to us through any of these channels."
                centered={false}
              />
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-golden-500 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Visit Us</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      1234 Tech Plaza, Silicon Valley<br />
                      CA 94024, USA
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-golden-500 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Call Us</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      +1 (555) 123-4567<br />
                      +1 (555) 987-6543
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-golden-500 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Email Us</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      info@goldenageit.com<br />
                      support@goldenageit.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-golden-500 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <Clock className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Business Hours</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-golden-500 transition-colors"
                  >
                    <span className="sr-only">Facebook</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-golden-500 transition-colors"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-golden-500 transition-colors"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-golden-500 transition-colors"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="w-full lg:w-2/3"
            >
              <div className="glass-card p-8">
                <SectionHeading
                  title="Send Us a Message"
                  subtitle="Fill out the form below and we'll get back to you as soon as possible."
                  centered={false}
                />
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Location"
            subtitle="Visit our office to meet our team and discuss your project in person."
          />
          
          <div className="h-96 rounded-xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101271.11016878945!2d-122.09639461142423!3d37.40272613807132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb7495bec0189%3A0x7c17d6c1295bca7b!2sMountain%20View%2C%20CA%2C%20USA!5e0!3m2!1sen!2sca!4v1621458113190!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              title="Office Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our services and how we work."
          />
          
          <div className="max-w-3xl mx-auto">
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {[
                {
                  question: "What industries do you specialize in?",
                  answer: "Golden Age Infotech has experience working with clients across various industries, including healthcare, finance, retail, manufacturing, education, and technology. Our diverse expertise allows us to understand the specific challenges and requirements of different sectors.",
                },
                {
                  question: "How long does a typical project take to complete?",
                  answer: "Project timelines vary depending on the scope, complexity, and specific requirements. A small website might take 2-4 weeks, while a comprehensive enterprise solution could take several months. During our initial consultation, we'll provide you with a detailed timeline based on your project specifications.",
                },
                {
                  question: "Do you offer ongoing support after project completion?",
                  answer: "Yes, we offer various support and maintenance packages to ensure your systems continue to run smoothly after deployment. These can include regular updates, security monitoring, performance optimization, and technical support. We'll work with you to create a support plan that meets your specific needs.",
                },
                {
                  question: "What is your approach to ensuring data security?",
                  answer: "We implement a multi-layered security approach that includes encryption, secure coding practices, regular security audits, and compliance with industry standards. Our team stays updated on the latest security threats and best practices to ensure your data remains protected at all times.",
                },
                {
                  question: "Can you work with our existing IT team?",
                  answer: "Absolutely! We're flexible in our approach and can collaborate effectively with your in-house team. We can provide specialized expertise to complement your existing capabilities, or take on entire projects as needed. Our goal is to work in whatever capacity best serves your business needs.",
                },
              ].map((faq, index) => (
                <div key={index} className="py-5">
                  <details className="group">
                    <summary className="flex justify-between items-center font-bold cursor-pointer list-none">
                      <span>{faq.question}</span>
                      <span className="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shapeRendering="geometricPrecision"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="text-gray-600 dark:text-gray-400 mt-3">
                      {faq.answer}
                    </p>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
