
import React from 'react';
import Layout from '@/components/layout/Layout';
import ServiceCard from '@/components/ui/ServiceCard';
import SectionHeader from '@/components/ui/SectionHeader';
import TestimonialCard from '@/components/ui/TestimonialCard';
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Database, LineChart, Brain, CheckCircle, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

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

  const testimonials = [
    {
      name: 'Alex Johnson',
      role: 'CTO',
      company: 'TechCorp',
      testimonial: 'Zeyfira transformed our digital presence with their exceptional web development services. Their team delivered beyond our expectations.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Sarah Williams',
      role: 'CEO',
      company: 'Innovate Solutions',
      testimonial: 'The AI solution provided by Zeyfira has significantly improved our operational efficiency. Their expertise in machine learning is unmatched.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager',
      company: 'Global Systems',
      testimonial: 'Working with Zeyfira on our software development project was a seamless experience. They understood our vision and executed it perfectly.',
      rating: 4,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
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
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-900 py-20 md:py-32">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute -left-10 -top-10 h-72 w-72 rounded-full bg-purple-600 blur-3xl"></div>
          <div className="absolute -bottom-24 right-20 h-72 w-72 rounded-full bg-zeyfira-500 blur-3xl"></div>
          <div className="absolute left-1/3 top-1/3 h-64 w-64 rounded-full bg-pink-600 blur-3xl"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">
              Transforming Ideas Into <span className="bg-gradient-to-r from-purple-400 to-zeyfira-400 bg-clip-text text-transparent">Digital Reality</span>
            </h1>
            <p className="mb-8 text-lg text-gray-300 md:text-xl">
              We specialize in web development, software solutions, and AI services that drive innovation and business growth.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-zeyfira-500 text-white">
                <Link to="/services">Explore Our Services</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Services"
            subtitle="We offer a comprehensive range of digital services to help businesses thrive in the digital age."
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline" className="group">
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">Why Choose Zeyfira for Your Next Project?</h2>
              <p className="mb-8 text-gray-600">
                At Zeyfira, we combine technical expertise with creative thinking to deliver solutions that not only meet but exceed expectations. Our approach is collaborative, transparent, and focused on delivering real business value.
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5 text-zeyfira-500" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button asChild>
                  <Link to="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute -right-6 -top-6 h-48 w-48 rounded-full bg-purple-100"></div>
                <div className="absolute -bottom-6 -left-6 h-48 w-48 rounded-full bg-zeyfira-100"></div>
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
                  alt="Team collaboration"
                  className="relative z-10 rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="What Our Clients Say"
            subtitle="Don't just take our word for it. Here's what our clients have to say about working with us."
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready to Start Your Next Project?</h2>
            <p className="mb-8 text-gray-300">
              Contact us today to discuss how we can help bring your vision to life with our expert web development, software solutions, and AI services.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-zeyfira-500 text-white">
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="text-center">
              <h3 className="mb-2 text-4xl font-bold text-zeyfira-600">150+</h3>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="text-center">
              <h3 className="mb-2 text-4xl font-bold text-purple-600">50+</h3>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div className="text-center">
              <h3 className="mb-2 text-4xl font-bold text-zeyfira-600">15+</h3>
              <p className="text-gray-600">Team Members</p>
            </div>
            <div className="text-center">
              <h3 className="mb-2 text-4xl font-bold text-purple-600">5+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
