
import React from 'react';
import Layout from '@/components/layout/Layout';
import SectionHeader from '@/components/ui/SectionHeader';
import PortfolioCard from '@/components/ui/PortfolioCard';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const portfolioItems = [
    {
      title: 'E-commerce Platform',
      description: 'A comprehensive e-commerce solution with inventory management, payment processing, and customer analytics.',
      image: 'https://images.unsplash.com/photo-1561997968-aa846c2bf255?auto=format&fit=crop&q=80&w=1000',
      tags: ['Web Development', 'E-commerce'],
      link: '#',
    },
    {
      title: 'Healthcare Management System',
      description: 'An integrated solution for healthcare providers to manage patient records, appointments, and billing.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000',
      tags: ['Software Development', 'Healthcare'],
      link: '#',
    },
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'A sophisticated analytics platform that uses machine learning to provide actionable business insights.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
      tags: ['AI & ML', 'Data Analytics'],
      link: '#',
    },
    {
      title: 'Real Estate Marketplace',
      description: 'A digital platform connecting property buyers, sellers, and agents with advanced search capabilities.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000',
      tags: ['Web Development', 'Real Estate'],
      link: '#',
    },
    {
      title: 'Inventory Management System',
      description: 'A comprehensive solution for tracking inventory, managing suppliers, and optimizing stock levels.',
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1000',
      tags: ['Software Development', 'Inventory'],
      link: '#',
    },
    {
      title: 'Predictive Maintenance Solution',
      description: 'An AI-powered system that predicts equipment failures before they occur, reducing downtime and maintenance costs.',
      image: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80&w=1000',
      tags: ['AI & ML', 'Manufacturing'],
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
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1613963931023-5dc59339b571?auto=format&fit=crop&q=80&w=1000" 
                  alt="FinTech Case Study" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-purple-600 font-semibold mb-2">CASE STUDY</div>
                <h3 className="text-2xl font-bold mb-3">Revolutionizing FinTech with AI</h3>
                <p className="text-gray-600 mb-4">
                  How we helped a financial services company implement AI-powered fraud detection, reducing fraudulent transactions by 87% and saving millions annually.
                </p>
                <Button variant="outline">Read Case Study</Button>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000" 
                  alt="E-commerce Case Study" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-zeyfira-600 font-semibold mb-2">CASE STUDY</div>
                <h3 className="text-2xl font-bold mb-3">Scaling E-commerce Operations</h3>
                <p className="text-gray-600 mb-4">
                  How we helped an online retailer redesign their platform and logistics systems, resulting in a 35% increase in sales and 50% reduction in fulfillment time.
                </p>
                <Button variant="outline">Read Case Study</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Trusted by Leading Companies"
            subtitle="We're proud to have worked with these organizations to transform their digital presence."
          />
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {/* These would be replaced with actual client logos */}
            <div className="h-16 w-32 bg-gray-200 rounded flex items-center justify-center">Logo 1</div>
            <div className="h-16 w-32 bg-gray-200 rounded flex items-center justify-center">Logo 2</div>
            <div className="h-16 w-32 bg-gray-200 rounded flex items-center justify-center">Logo 3</div>
            <div className="h-16 w-32 bg-gray-200 rounded flex items-center justify-center">Logo 4</div>
            <div className="h-16 w-32 bg-gray-200 rounded flex items-center justify-center">Logo 5</div>
            <div className="h-16 w-32 bg-gray-200 rounded flex items-center justify-center">Logo 6</div>
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
