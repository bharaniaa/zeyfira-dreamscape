import React from 'react';
import Layout from '@/components/layout/Layout';
import SectionHeader from '@/components/ui/SectionHeader';
import PortfolioCard from '@/components/ui/PortfolioCard';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const portfolioItems = [
    {
      title: 'AI-Powered Customer Service Platform',
      description: 'An intelligent chatbot system using natural language processing to handle customer inquiries, reducing response time by 80%.',
      image: 'https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?auto=format&fit=crop&q=80&w=1000',
      tags: ['AI & ML', 'Customer Service'],
      link: '#',
    },
    {
      title: 'Machine Learning Fraud Detection',
      description: 'Advanced fraud detection system using machine learning algorithms to identify and prevent fraudulent transactions in real-time.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
      tags: ['AI & ML', 'Security'],
      link: '#',
    },
    {
      title: 'Enterprise Resource Planning System',
      description: 'Comprehensive ERP solution integrating finance, HR, and operations management for large-scale enterprises.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1000',
      tags: ['Software Development', 'Enterprise'],
      link: '#',
    },
    {
      title: 'Cloud-Based Project Management',
      description: 'A scalable project management platform with real-time collaboration features and advanced analytics.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000',
      tags: ['Software Development', 'Cloud'],
      link: '#',
    },
    {
      title: 'Modern E-commerce Platform',
      description: 'A cutting-edge e-commerce solution with AI-powered recommendations and seamless payment integration.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=1000',
      tags: ['Web Development', 'E-commerce'],
      link: '#',
    },
    {
      title: 'Progressive Web Application',
      description: 'A responsive web application with offline capabilities and native app-like experience across all devices.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1000',
      tags: ['Web Development', 'PWA'],
      link: '#',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-zeyfira-700 to-purple-700 py-20 md:py-32 text-white">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute h-96 w-96 rounded-full bg-purple-500 blur-3xl -top-12 left-1/4"></div>
          <div className="absolute h-96 w-96 rounded-full bg-zeyfira-500 blur-3xl -bottom-12 right-1/4"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              Our Portfolio
            </h1>
            <p className="mb-8 text-lg md:text-xl text-white/80">
              Explore our successful projects and see how we've helped businesses across various industries achieve their digital goals.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Featured Work"
            subtitle="Browse through our portfolio of successful projects delivered to clients across different industries."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <PortfolioCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Case Studies"
            subtitle="Dive deeper into how we approached specific client challenges and delivered successful solutions."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {/* AI/ML Case Study */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-[300px] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1000" 
                  alt="AI/ML Case Study" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-purple-600 font-semibold mb-2">AI & ML</div>
                <h3 className="text-2xl font-bold mb-3">Predictive Analytics for Healthcare</h3>
                <p className="text-gray-600 mb-4">
                  Implemented an AI-powered system for early disease detection and patient risk assessment, improving diagnosis accuracy by 45%.
                </p>
                <Button variant="outline">Read Case Study</Button>
              </div>
            </div>

            {/* Software Development Case Study */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-[300px] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000" 
                  alt="Software Case Study" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-zeyfira-600 font-semibold mb-2">SOFTWARE</div>
                <h3 className="text-2xl font-bold mb-3">Enterprise Resource Planning</h3>
                <p className="text-gray-600 mb-4">
                  Developed a custom ERP solution for a manufacturing company, streamlining operations and reducing overhead costs by 30%.
                </p>
                <Button variant="outline">Read Case Study</Button>
              </div>
            </div>

            {/* Web Development Case Study */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-[300px] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=1000" 
                  alt="Web Development Case Study" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-pink-600 font-semibold mb-2">WEB DEVELOPMENT</div>
                <h3 className="text-2xl font-bold mb-3">E-commerce Platform</h3>
                <p className="text-gray-600 mb-4">
                  Built a scalable e-commerce platform with advanced features, resulting in 200% increase in online sales and improved user engagement.
                </p>
                <Button variant="outline">Read Case Study</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-700 to-zeyfira-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Ready to Start Your Success Story?
            </h2>
            <p className="mb-8 text-lg text-white/80">
              Contact us today to discuss how we can help bring your vision to life with our expertise and innovative approach.
            </p>
            <Button asChild size="lg" className="bg-white text-purple-700 hover:bg-white/90">
              <Link to="/contact">Start Your Project</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
