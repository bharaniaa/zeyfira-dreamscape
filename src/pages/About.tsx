
import React from 'react';
import Layout from '@/components/layout/Layout';
import SectionHeader from '@/components/ui/SectionHeader';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { 
  CheckCircle, Award, Clock, Users, Target, 
  Lightbulb, ShieldCheck
} from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'David Cooper',
      role: 'Founder & CEO',
      bio: 'David has over 15 years of experience in software development and technology consulting.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      bio: 'Sarah leads our technical strategy and oversees all development projects with her extensive expertise.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Michael Chen',
      role: 'Head of AI & ML',
      bio: 'Michael brings deep expertise in artificial intelligence and machine learning to our projects.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Lead Web Developer',
      bio: 'Emily specializes in creating responsive, user-friendly web experiences for our clients.',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
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
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-zeyfira-700 via-purple-700 to-zeyfira-700 py-20 md:py-32 text-white">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute h-96 w-96 rounded-full bg-zeyfira-500 blur-3xl -top-12 -left-12"></div>
          <div className="absolute h-96 w-96 rounded-full bg-purple-500 blur-3xl -bottom-12 right-20"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              About Zeyfira
            </h1>
            <p className="mb-8 text-lg md:text-xl text-white/80">
              We're a team of passionate technologists dedicated to creating innovative digital solutions that drive business success.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Our Story</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Building Digital Excellence Since 2018</h2>
              <p className="text-gray-600 mb-4">
                Zeyfira was founded with a simple mission: to help businesses harness the power of technology to grow and succeed in an increasingly digital world.
              </p>
              <p className="text-gray-600 mb-4">
                What started as a small team of passionate developers has grown into a full-service digital agency with expertise in web development, software solutions, and artificial intelligence.
              </p>
              <p className="text-gray-600 mb-4">
                Our journey has been defined by continuous learning, adaptation, and a commitment to excellence. We've had the privilege of working with clients across various industries, from startups to established enterprises, helping them achieve their digital transformation goals.
              </p>
              <p className="text-gray-600">
                Today, we continue to push the boundaries of what's possible in the digital realm, always staying ahead of the curve with emerging technologies and innovative approaches.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-zeyfira-200 rounded-3xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000"
                alt="Our team in action" 
                className="relative z-10 rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Core Values"
            subtitle="These principles guide everything we do and shape how we work with our clients."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Meet Our Team"
            subtitle="Our talented professionals bring diverse skills and expertise to every project."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="relative mb-4 overflow-hidden rounded-xl">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-purple-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-purple-200 rounded-3xl transform -rotate-3"></div>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
                  alt="Team collaboration" 
                  className="relative z-10 rounded-2xl shadow-lg"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block mb-4 px-4 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Why Choose Us</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What Sets Us Apart</h2>
              <p className="text-gray-600 mb-6">
                At Zeyfira, we combine technical expertise with a deep understanding of business needs to deliver solutions that drive real results.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-zeyfira-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Technical Excellence</h3>
                    <p className="text-gray-600">Our team comprises experienced professionals who stay current with the latest technologies and best practices.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-zeyfira-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Business-Focused Approach</h3>
                    <p className="text-gray-600">We understand that technology is a means to achieve business objectives, not an end in itself.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-zeyfira-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Client Partnership</h3>
                    <p className="text-gray-600">We view our clients as partners and work collaboratively to ensure their vision becomes reality.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-zeyfira-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">End-to-End Solutions</h3>
                    <p className="text-gray-600">From concept to ongoing support, we provide comprehensive services for the entire project lifecycle.</p>
                  </div>
                </div>
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
