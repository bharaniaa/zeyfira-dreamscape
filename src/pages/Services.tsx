import React from 'react';
import Layout from '@/components/layout/Layout';
import SectionHeader from '@/components/ui/SectionHeader';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { 
  Code, Database, Brain, Globe, 
  Smartphone, ShieldCheck, LineChart, Lightbulb, Zap, 
  MessageSquare, Camera, ShoppingCart
} from 'lucide-react';
import { motion } from 'framer-motion';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const floatAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const Services = () => {
  const webDevServices = [
    {
      title: 'Responsive Website Development',
      description: 'Beautifully designed, responsive websites that look great on any device.',
      icon: <Globe className="h-8 w-8 text-purple-600" />,
    },
    {
      title: 'Web Application Development',
      description: 'Custom web applications with rich functionality and seamless user experiences.',
      icon: <Code className="h-8 w-8 text-purple-600" />,
    },
    {
      title: 'E-commerce Solutions',
      description: 'Full-featured online stores with secure payment processing and inventory management.',
      icon: <ShoppingCart className="h-8 w-8 text-purple-600" />,
    },
    {
      title: 'Progressive Web Apps',
      description: 'Fast, reliable, and engaging applications that work offline and load instantly.',
      icon: <Zap className="h-8 w-8 text-purple-600" />,
    },
  ];

  const softwareDevServices = [
    {
      title: 'Custom Software Development',
      description: 'Tailored software solutions designed to meet your specific business requirements.',
      icon: <Lightbulb className="h-8 w-8 text-zeyfira-600" />,
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android devices.',
      icon: <Smartphone className="h-8 w-8 text-zeyfira-600" />,
    },
    {
      title: 'Software Integration',
      description: 'Seamless integration of different software systems and APIs for unified operations.',
      icon: <Database className="h-8 w-8 text-zeyfira-600" />,
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Robust security measures to protect your software and data from threats.',
      icon: <ShieldCheck className="h-8 w-8 text-zeyfira-600" />,
    },
  ];

  const aiMlServices = [
    {
      title: 'Machine Learning Models',
      description: 'Custom machine learning models trained on your data to solve complex problems.',
      icon: <Brain className="h-8 w-8 text-pink-600" />,
    },
    {
      title: 'AI-Powered Analytics',
      description: 'Advanced analytics solutions powered by artificial intelligence for actionable insights.',
      icon: <LineChart className="h-8 w-8 text-pink-600" />,
    },
    {
      title: 'Natural Language Processing',
      description: 'Text analysis, sentiment analysis, and language understanding capabilities.',
      icon: <MessageSquare className="h-8 w-8 text-pink-600" />,
    },
    {
      title: 'Computer Vision Solutions',
      description: 'Image recognition, object detection, and visual analysis for various applications.',
      icon: <Camera className="h-8 w-8 text-pink-600" />,
    },
  ];

  return (
    <Layout>
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden bg-gradient-to-r from-purple-700 to-zeyfira-700 py-20 md:py-32 text-white"
      >
        <div className="absolute inset-0 z-0 opacity-30">
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute h-96 w-96 rounded-full bg-purple-500 blur-3xl -top-12 -right-12"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, -5, 0]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
            className="absolute h-96 w-96 rounded-full bg-zeyfira-500 blur-3xl -bottom-12 -left-12"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              Our Services
            </h1>
            <p className="mb-8 text-lg md:text-xl text-white/80">
              We provide comprehensive digital solutions to transform your business with cutting-edge technologies and innovative approaches.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        id="web-development" 
        className="section-padding"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="inline-block mb-4 px-4 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium"
              >
                Web Development
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Creating Powerful Web Experiences</h2>
              <p className="text-gray-600 mb-8">
                Our web development services focus on creating responsive, user-friendly, and visually appealing websites and web applications that deliver exceptional user experiences and drive business growth.
              </p>
              <motion.div 
                variants={staggerContainer}
                className="space-y-4"
              >
                {webDevServices.map((service, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                    className="flex p-4 border rounded-lg hover:shadow-md transition-shadow"
                  >
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="mr-4 mt-1"
                    >
                      {service.icon}
                    </motion.div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8"
              >
                <Button asChild>
                  <Link to="/contact">Discuss Your Web Project</Link>
                </Button>
              </motion.div>
            </motion.div>
            <motion.div 
              variants={fadeInUp}
              className="relative"
            >
              <motion.div 
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 3, 0]
                }}
                transition={{ 
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-purple-200 rounded-3xl transform rotate-3"
              />
              <motion.img 
                variants={floatAnimation}
                animate="animate"
                src="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800&h=600"
                alt="Web Development" 
                className="relative z-10 rounded-2xl shadow-lg w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        id="software-development" 
        className="section-padding bg-gray-50"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              variants={fadeInUp}
              className="order-2 md:order-1 relative"
            >
              <motion.div 
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, -3, 0]
                }}
                transition={{ 
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-zeyfira-200 rounded-3xl transform -rotate-3"
              />
              <motion.img 
                variants={floatAnimation}
                animate="animate"
                src="https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?auto=format&fit=crop&q=80&w=800&h=600"
                alt="Software Development" 
                className="relative z-10 rounded-2xl shadow-lg w-full h-[400px] object-cover"
              />
            </motion.div>
            <motion.div 
              variants={fadeInUp}
              className="order-1 md:order-2"
            >
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="inline-block mb-4 px-4 py-1 bg-zeyfira-100 text-zeyfira-800 rounded-full text-sm font-medium"
              >
                Software Development
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Custom Software Solutions</h2>
              <p className="text-gray-600 mb-8">
                We develop custom software solutions that streamline operations, enhance efficiency, and provide a competitive edge for businesses across various industries.
              </p>
              <motion.div 
                variants={staggerContainer}
                className="space-y-4"
              >
                {softwareDevServices.map((service, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                    className="flex p-4 border rounded-lg hover:shadow-md transition-shadow"
                  >
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="mr-4 mt-1"
                    >
                      {service.icon}
                    </motion.div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8"
              >
                <Button asChild>
                  <Link to="/contact">Discuss Your Software Project</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        id="ai-ml" 
        className="section-padding"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="inline-block mb-4 px-4 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-medium"
              >
                AI & Machine Learning
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Intelligent Solutions for Complex Problems</h2>
              <p className="text-gray-600 mb-8">
                Our AI and machine learning services help businesses leverage the power of intelligent algorithms to automate processes, gain insights from data, and make better decisions.
              </p>
              <motion.div 
                variants={staggerContainer}
                className="space-y-4"
              >
                {aiMlServices.map((service, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                    className="flex p-4 border rounded-lg hover:shadow-md transition-shadow"
                  >
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="mr-4 mt-1"
                    >
                      {service.icon}
                    </motion.div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8"
              >
                <Button asChild>
                  <Link to="/contact">Discuss Your AI Project</Link>
                </Button>
              </motion.div>
            </motion.div>
            <motion.div 
              variants={fadeInUp}
              className="relative"
            >
              <motion.div 
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 3, 0]
                }}
                transition={{ 
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-pink-200 rounded-3xl transform rotate-3"
              />
              <motion.img 
                variants={floatAnimation}
                animate="animate"
                src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800&h=600"
                alt="AI and Machine Learning Solutions" 
                className="relative z-10 rounded-2xl shadow-lg w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="section-padding bg-gray-50"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp}>
            <SectionHeader
              title="Our Development Process"
              subtitle="We follow a structured, transparent approach to ensure the success of every project."
            />
          </motion.div>
          <div className="max-w-4xl mx-auto">
            <motion.div 
              variants={fadeInUp}
              className="relative mb-12"
            >
              <motion.div 
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 3, 0]
                }}
                transition={{ 
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-purple-200 rounded-3xl transform rotate-3"
              />
              <motion.img 
                variants={floatAnimation}
                animate="animate"
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800&h=600"
                alt="Development Process" 
                className="relative z-10 rounded-2xl shadow-lg w-full h-[400px] object-cover"
              />
            </motion.div>
            <motion.div 
              variants={staggerContainer}
              className="space-y-12"
            >
              {[
                {
                  number: "1",
                  title: "Discovery & Planning",
                  description: "We begin by understanding your business goals, target audience, and project requirements. This phase includes thorough research and strategic planning.",
                  color: "bg-purple-600"
                },
                {
                  number: "2",
                  title: "Design & Prototyping",
                  description: "Our design team creates wireframes and interactive prototypes that visualize the user experience and interface before development begins.",
                  color: "bg-zeyfira-600"
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="relative pl-16"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className={`absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full ${step.color} text-white`}
                  >
                    {step.number}
                  </motion.div>
                  <div className="border-l-2 border-gray-200 pl-6 pb-12">
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      <section className="py-16 bg-gradient-to-r from-purple-700 to-zeyfira-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Ready to Transform Your Business?
            </h2>
            <p className="mb-8 text-lg text-white/80">
              Let's discuss how our web development, software solutions, or AI services can help you achieve your business goals.
            </p>
            <Button asChild size="lg" className="bg-white text-purple-700 hover:bg-white/90">
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
