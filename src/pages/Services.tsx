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
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-700 to-zeyfira-700 py-20 md:py-32 text-white">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute h-96 w-96 rounded-full bg-purple-500 blur-3xl -top-12 -right-12"></div>
          <div className="absolute h-96 w-96 rounded-full bg-zeyfira-500 blur-3xl -bottom-12 -left-12"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              Our Services
            </h1>
            <p className="mb-8 text-lg md:text-xl text-white/80">
              We provide comprehensive digital solutions to transform your business with cutting-edge technologies and innovative approaches.
            </p>
          </div>
        </div>
      </section>

      <section id="web-development" className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Web Development</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Creating Powerful Web Experiences</h2>
              <p className="text-gray-600 mb-8">
                Our web development services focus on creating responsive, user-friendly, and visually appealing websites and web applications that deliver exceptional user experiences and drive business growth.
              </p>
              <div className="space-y-4">
                {webDevServices.map((service, index) => (
                  <div key={index} className="flex p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <div className="mr-4 mt-1">{service.icon}</div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button asChild>
                  <Link to="/contact">Discuss Your Web Project</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-purple-200 rounded-3xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=1000"
                alt="Web Development" 
                className="relative z-10 rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="software-development" className="section-padding bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="absolute inset-0 bg-zeyfira-200 rounded-3xl transform -rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?auto=format&fit=crop&q=80&w=1000"
                alt="Software Development" 
                className="relative z-10 rounded-2xl shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block mb-4 px-4 py-1 bg-zeyfira-100 text-zeyfira-800 rounded-full text-sm font-medium">Software Development</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Custom Software Solutions</h2>
              <p className="text-gray-600 mb-8">
                We develop custom software solutions that streamline operations, enhance efficiency, and provide a competitive edge for businesses across various industries.
              </p>
              <div className="space-y-4">
                {softwareDevServices.map((service, index) => (
                  <div key={index} className="flex p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <div className="mr-4 mt-1">{service.icon}</div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button asChild>
                  <Link to="/contact">Discuss Your Software Project</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="ai-ml" className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-medium">AI & Machine Learning</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Intelligent Solutions for Complex Problems</h2>
              <p className="text-gray-600 mb-8">
                Our AI and machine learning services help businesses leverage the power of intelligent algorithms to automate processes, gain insights from data, and make better decisions.
              </p>
              <div className="space-y-4">
                {aiMlServices.map((service, index) => (
                  <div key={index} className="flex p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <div className="mr-4 mt-1">{service.icon}</div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button asChild>
                  <Link to="/contact">Discuss Your AI Project</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-pink-200 rounded-3xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1000"
                alt="AI and Machine Learning" 
                className="relative z-10 rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Development Process"
            subtitle="We follow a structured, transparent approach to ensure the success of every project."
          />
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <div className="relative pl-16">
                <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 text-white">
                  1
                </div>
                <div className="border-l-2 border-gray-200 pl-6 pb-12">
                  <h3 className="text-xl font-bold mb-2">Discovery & Planning</h3>
                  <p className="text-gray-600">
                    We begin by understanding your business goals, target audience, and project requirements. This phase includes thorough research and strategic planning.
                  </p>
                </div>
              </div>
              <div className="relative pl-16">
                <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-zeyfira-600 text-white">
                  2
                </div>
                <div className="border-l-2 border-gray-200 pl-6 pb-12">
                  <h3 className="text-xl font-bold mb-2">Design & Prototyping</h3>
                  <p className="text-gray-600">
                    Our design team creates wireframes and interactive prototypes that visualize the user experience and interface before development begins.
                  </p>
                </div>
              </div>
              <div className="relative pl-16">
                <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-pink-600 text-white">
                  3
                </div>
                <div className="border-l-2 border-gray-200 pl-6 pb-12">
                  <h3 className="text-xl font-bold mb-2">Development & Testing</h3>
                  <p className="text-gray-600">
                    Our development team builds the solution using best practices and conducts thorough testing to ensure functionality, performance, and security.
                  </p>
                </div>
              </div>
              <div className="relative pl-16">
                <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 text-white">
                  4
                </div>
                <div className="pl-6">
                  <h3 className="text-xl font-bold mb-2">Deployment & Support</h3>
                  <p className="text-gray-600">
                    We launch your solution and provide ongoing support and maintenance to ensure continued success and optimal performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
