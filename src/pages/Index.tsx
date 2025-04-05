import React from 'react';
import Layout from '@/components/layout/Layout';
import ServiceCard from '@/components/ui/ServiceCard';
import SectionHeader from '@/components/ui/SectionHeader';
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Database, LineChart, Brain, CheckCircle, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 }
};

const slideIn = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 }
};

const slideInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 }
};

const revealText = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const Index = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built using the latest technologies.',
      icon: <Code className="h-10 w-10 text-purple-600" />,
      color: 'border-purple-600',
      link: '/services#web-development',
    },
    {
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business needs and requirements.',
      icon: <Database className="h-10 w-10 text-zeyfira-600" />,
      color: 'border-zeyfira-600',
      link: '/services#software-development',
    },
    {
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by advanced AI and machine learning algorithms.',
      icon: <Brain className="h-10 w-10 text-pink-600" />,
      color: 'border-pink-600',
      link: '/services#ai-ml',
    },
  ];

  const features = [
    'Cutting-edge technologies',
    'Dedicated project manager',
    'Agile development process',
    'Continuous integration & deployment',
    'Quality assurance testing',
    'Post-launch support',
  ];

  return (
    <Layout>
      {/* Hero Section with New Animations */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative overflow-hidden bg-gray-900 py-20 md:py-32"
      >
        <div className="absolute inset-0 z-0 opacity-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute -left-10 -top-10 h-72 w-72 rounded-full bg-purple-600 blur-3xl"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
            className="absolute -bottom-24 right-20 h-72 w-72 rounded-full bg-zeyfira-500 blur-3xl"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={revealText}
            className="mx-auto max-w-3xl text-center"
          >
            <motion.h1 
              variants={revealText}
              className="mb-6 text-4xl font-bold text-white md:text-6xl"
            >
              Transforming Ideas Into <span className="bg-gradient-to-r from-purple-400 to-zeyfira-400 bg-clip-text text-transparent">Digital Reality</span>
            </motion.h1>
            <motion.p 
              variants={revealText}
              className="mb-8 text-lg text-gray-300 md:text-xl"
            >
              We specialize in web development, software solutions, and AI services that drive innovation and business growth.
            </motion.p>
            <motion.div 
              variants={revealText}
              className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0"
            >
              <motion.div 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-zeyfira-500 text-white">
                  <Link to="/services">Explore Our Services</Link>
                </Button>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <Link to="/contact">Get In Touch</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section with New Animations */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="section-padding bg-gray-50"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={revealText}>
            <SectionHeader
              title="Our Services"
              subtitle="We offer a comprehensive range of digital services to help businesses thrive in the digital age."
            />
          </motion.div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 400, damping: 17 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
          <motion.div 
            variants={revealText}
            className="mt-12 text-center"
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button asChild variant="outline" className="group">
                <Link to="/services">
                  View All Services
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Feature Section with New Animations */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="section-padding"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div 
              variants={slideIn}
              className="order-2 md:order-1"
            >
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">Why Choose Zeyfira for Your Next Project?</h2>
              <p className="mb-8 text-gray-600">
                At Zeyfira, we combine technical expertise with creative thinking to deliver solutions that not only meet but exceed expectations. Our approach is collaborative, transparent, and focused on delivering real business value.
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ 
                      x: 5,
                      transition: { type: "spring", stiffness: 400, damping: 17 }
                    }}
                    className="flex items-center"
                  >
                    <CheckCircle className="mr-3 h-5 w-5 text-zeyfira-500" />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="mt-8"
              >
                <Button asChild>
                  <Link to="/about">Learn More About Us</Link>
                </Button>
              </motion.div>
            </motion.div>
            <motion.div 
              variants={slideInRight}
              className="order-1 md:order-2"
            >
              <div className="relative">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="absolute -right-6 -top-6 h-48 w-48 rounded-full bg-purple-100"
                />
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="absolute -bottom-6 -left-6 h-48 w-48 rounded-full bg-zeyfira-100"
                />
                <motion.img
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
                  alt="Team collaboration"
                  className="relative z-10 rounded-xl shadow-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section with New Animations */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="section-padding bg-gray-900 text-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-6 text-3xl font-bold md:text-4xl"
            >
              Ready to Start Your Next Project?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8 text-gray-300"
            >
              Contact us today to discuss how we can help bring your vision to life with our expert web development, software solutions, and AI services.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0"
            >
              <motion.div 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-zeyfira-500 text-white">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <Link to="/portfolio">View Our Work</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Stats Section with New Animations */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="section-padding"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
            {[
              { number: "50+", text: "Happy Clients", color: "text-purple-600" },
              { number: "15+", text: "Team Members", color: "text-zeyfira-600" },
              { number: "5+", text: "Years Experience", color: "text-purple-600" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 400, damping: 17 }
                }}
                whileTap={{ scale: 0.98 }}
                className="text-center"
              >
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={`mb-2 text-4xl font-bold ${stat.color}`}
                >
                  {stat.number}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-gray-600"
                >
                  {stat.text}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </Layout>
  );
};

export default Index;
