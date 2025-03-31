
import { motion } from "framer-motion";
import { Users, Target, Award, TrendingUp } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const About = () => {
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
                About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-gold">
                  Golden Age Infotech
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
                We are a team of passionate IT professionals dedicated to delivering innovative solutions that empower businesses to thrive in the digital landscape.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
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
              <SectionHeading
                title="Our Story"
                subtitle="Founded with a vision to bridge the gap between technology and business success."
                centered={false}
              />
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Golden Age Infotech was established in 2015 by a group of technology enthusiasts who recognized the need for comprehensive IT solutions that address real business challenges. What began as a small consultancy has grown into a full-service IT provider trusted by businesses across various industries.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Our journey has been defined by continuous innovation, unwavering commitment to quality, and a client-centered approach that prioritizes understanding the unique needs of each business we serve.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Today, we're proud to be recognized as a leading IT consultancy firm, helping businesses leverage technology to achieve their strategic objectives and stay ahead in an increasingly competitive digital landscape.
              </p>
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
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Our Story"
                  className="rounded-xl shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-gold rounded-full blur-2xl opacity-40"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles that guide our work and define our approach to serving clients."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 flex flex-col items-center text-center"
            >
              <div className="bg-gradient-gold w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Users className="text-gray-900" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Client Partnership</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We view ourselves as an extension of your team, working collaboratively to achieve your goals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-card p-6 flex flex-col items-center text-center"
            >
              <div className="bg-gradient-gold w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Award className="text-gray-900" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We are committed to delivering the highest quality solutions and services in everything we do.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="glass-card p-6 flex flex-col items-center text-center"
            >
              <div className="bg-gradient-gold w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="text-gray-900" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We constantly explore emerging technologies to provide forward-thinking solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="glass-card p-6 flex flex-col items-center text-center"
            >
              <div className="bg-gradient-gold w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Target className="text-gray-900" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We operate with transparency, honesty, and ethical practices in all our interactions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Meet Our Team"
            subtitle="A diverse group of professionals united by a passion for technology and client success."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Robert Chen",
                position: "Founder & CEO",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                delay: 0.1,
              },
              {
                name: "Emily Watson",
                position: "CTO",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                delay: 0.2,
              },
              {
                name: "David Kim",
                position: "Lead Developer",
                image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                delay: 0.3,
              },
              {
                name: "Sophia Martinez",
                position: "UX/UI Designer",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                delay: 0.4,
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: member.delay }}
                viewport={{ once: true }}
                className="glass-card p-6 flex flex-col items-center text-center hover-scale"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {member.position}
                </p>
                <div className="flex space-x-3">
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-golden-500 transition-colors"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
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
                    className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-golden-500 transition-colors"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
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
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
