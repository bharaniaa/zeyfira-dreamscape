import React from 'react';
import Layout from '@/components/layout/Layout';
import SectionHeader from '@/components/ui/SectionHeader';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { 
  CheckCircle, Award, Clock, Users, Target, 
  Lightbulb, ShieldCheck
} from 'lucide-react';
import { motion } from 'framer-motion';

// New animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const slideInFromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const slideInFromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const About = () => {
  const teamMembers = [
    {
      name: 'Bharani Dharan M',
      role: 'Co-founder & Technical Director',
      bio: 'Expert in AI/ML architecture and technical strategy, leading our innovative solutions development.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Ananthakumar L',
      role: 'Co-founder & Innovation Lead',
      bio: 'Specializes in enterprise solutions and cloud architecture, driving our technical innovation.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Pavithra P',
      role: 'Co-founder & Operations Director',
      bio: 'Leads project management and client success strategies, ensuring seamless delivery of solutions.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We embrace new technologies and creative approaches to solve complex problems.',
      icon: <Lightbulb className="h-8 w-8 text-purple-600" />,
    },
    {
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our work, from code quality to client service.',
      icon: <Award className="h-8 w-8 text-zeyfira-600" />,
    },
    {
      title: 'Collaboration',
      description: 'We believe in working closely with our clients to ensure their vision becomes reality.',
      icon: <Users className="h-8 w-8 text-pink-600" />,
    },
    {
      title: 'Integrity',
      description: 'We conduct our business with honesty, transparency, and ethical standards.',
      icon: <ShieldCheck className="h-8 w-8 text-purple-600" />,
    },
    {
      title: 'Timeliness',
      description: 'We value your time and are committed to delivering projects on schedule.',
      icon: <Clock className="h-8 w-8 text-zeyfira-600" />,
    },
    {
      title: 'Results-Driven',
      description: 'We focus on delivering solutions that generate tangible business results.',
      icon: <Target className="h-8 w-8 text-pink-600" />,
    },
  ];

  return (
    <Layout>
      {/* Hero Section with New Animations */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="relative overflow-hidden bg-gradient-to-r from-zeyfira-700 via-purple-700 to-zeyfira-700 py-20 md:py-32 text-white"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute h-96 w-96 rounded-full bg-zeyfira-500 blur-3xl -top-12 -left-12"></div>
          <div className="absolute h-96 w-96 rounded-full bg-purple-500 blur-3xl -bottom-12 right-20"></div>
        </motion.div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={slideUp}
            className="mx-auto max-w-3xl text-center"
          >
            <motion.h1 
              variants={slideUp}
              className="mb-6 text-4xl font-bold md:text-6xl"
            >
              About Zeyfira
            </motion.h1>
            <motion.p 
              variants={slideUp}
              className="mb-8 text-lg md:text-xl text-white/80"
            >
              We're a team of passionate technologists dedicated to creating innovative digital solutions that drive business success.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Our Story Section with New Animations */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
        className="section-padding"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={slideInFromLeft}>
              <motion.div 
                variants={slideUp}
                className="inline-block mb-4 px-4 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium"
              >
                Our Story
              </motion.div>
              <motion.h2 
                variants={slideUp}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                Building Digital Excellence Since 2024
              </motion.h2>
              <motion.p 
                variants={slideUp}
                className="text-gray-600 mb-4"
              >
                Zeyfira was founded with a simple mission: to help businesses harness the power of technology to grow and succeed in an increasingly digital world.
              </motion.p>
              <motion.p 
                variants={slideUp}
                className="text-gray-600 mb-4"
              >
                What started as a small team of passionate developers has grown into a full-service digital agency with expertise in web development, software solutions, and artificial intelligence.
              </motion.p>
              <motion.p 
                variants={slideUp}
                className="text-gray-600 mb-4"
              >
                Our journey has been defined by continuous learning, adaptation, and a commitment to excellence. We've had the privilege of working with clients across various industries, from startups to established enterprises, helping them achieve their digital transformation goals.
              </motion.p>
              <motion.p 
                variants={slideUp}
                className="text-gray-600"
              >
                Today, we continue to push the boundaries of what's possible in the digital realm, always staying ahead of the curve with emerging technologies and innovative approaches.
              </motion.p>
            </motion.div>
            <motion.div 
              variants={slideInFromRight}
              className="relative"
            >
              <motion.div 
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 3 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="absolute inset-0 bg-zeyfira-200 rounded-3xl"
              />
              <motion.img 
                variants={scaleIn}
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000"
                alt="Our team in action" 
                className="relative z-10 rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Our Values Section with New Animations */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
        className="section-padding bg-gray-50"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={slideUp}>
            <SectionHeader
              title="Our Core Values"
              subtitle="These principles guide everything we do and shape how we work with our clients."
            />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ 
                  y: -5,
                  transition: { type: "spring", stiffness: 400, damping: 17 }
                }}
                className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow"
              >
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="mb-4"
                >
                  {value.icon}
                </motion.div>
                <motion.h3 
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="text-xl font-bold mb-2"
                >
                  {value.title}
                </motion.h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Section with New Animations */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
        className="section-padding"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={slideUp}>
            <SectionHeader
              title="Meet Our Team"
              subtitle="Our talented professionals bring diverse skills and expertise to every project."
            />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ 
                  y: -5,
                  transition: { type: "spring", stiffness: 400, damping: 17 }
                }}
                className="group"
              >
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="relative mb-4 overflow-hidden rounded-xl"
                >
                  <motion.img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-72 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
                <motion.h3 
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="text-xl font-bold mb-1"
                >
                  {member.name}
                </motion.h3>
                <motion.p 
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="text-purple-600 font-medium mb-2"
                >
                  {member.role}
                </motion.p>
                <p className="text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us Section with New Animations */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
        className="section-padding bg-gray-50"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              variants={slideInFromLeft}
              className="order-2 md:order-1"
            >
              <motion.div 
                initial={{ rotate: 0 }}
                whileHover={{ rotate: -3 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-purple-200 rounded-3xl"></div>
                <motion.img 
                  variants={scaleIn}
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
                  alt="Team collaboration" 
                  className="relative z-10 rounded-2xl shadow-lg"
                />
              </motion.div>
            </motion.div>
            <motion.div 
              variants={slideInFromRight}
              className="order-1 md:order-2"
            >
              <motion.div 
                variants={slideUp}
                className="inline-block mb-4 px-4 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium"
              >
                Why Choose Us
              </motion.div>
              <motion.h2 
                variants={slideUp}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                What Sets Us Apart
              </motion.h2>
              <motion.p 
                variants={slideUp}
                className="text-gray-600 mb-6"
              >
                At Zeyfira, we combine technical expertise with a deep understanding of business needs to deliver solutions that drive real results.
              </motion.p>
              <motion.div 
                variants={staggerChildren}
                className="space-y-4"
              >
                <motion.div 
                  variants={slideUp}
                  className="flex items-start"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <CheckCircle className="h-5 w-5 text-zeyfira-600 mt-1 mr-3 flex-shrink-0" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold mb-1">Technical Excellence</h3>
                    <p className="text-gray-600">Our team comprises experienced professionals who stay current with the latest technologies and best practices.</p>
                  </div>
                </motion.div>
                <motion.div 
                  variants={slideUp}
                  className="flex items-start"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <CheckCircle className="h-5 w-5 text-zeyfira-600 mt-1 mr-3 flex-shrink-0" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold mb-1">Business-Focused Approach</h3>
                    <p className="text-gray-600">We understand that technology is a means to achieve business objectives, not an end in itself.</p>
                  </div>
                </motion.div>
                <motion.div 
                  variants={slideUp}
                  className="flex items-start"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <CheckCircle className="h-5 w-5 text-zeyfira-600 mt-1 mr-3 flex-shrink-0" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold mb-1">Client-Centric Service</h3>
                    <p className="text-gray-600">We prioritize your needs and work closely with you to ensure your success is our success.</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-700 to-zeyfira-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Ready to Work With Us?
            </h2>
            <p className="mb-8 text-lg text-white/80">
              Let's discuss how we can help bring your digital vision to life with our expertise and innovative approach.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
              <Button asChild size="lg" className="bg-white text-purple-700 hover:bg-white/90">
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
