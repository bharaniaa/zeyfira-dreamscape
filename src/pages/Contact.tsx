
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, Phone, MapPin, MessageSquare, Clock, CheckCircle 
} from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
      duration: 5000,
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-700 to-zeyfira-700 py-20 md:py-28 text-white">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute h-96 w-96 rounded-full bg-purple-500 blur-3xl -top-12 -right-12"></div>
          <div className="absolute h-96 w-96 rounded-full bg-zeyfira-500 blur-3xl -bottom-12 -left-12"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              Get In Touch
            </h1>
            <p className="mb-8 text-lg md:text-xl text-white/80">
              We'd love to hear from you. Contact us for any inquiries or to discuss your project.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-600 mb-4">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">We're available Monday to Friday, 9AM-6PM.</p>
              <a href="tel:+15551234567" className="text-purple-600 font-medium hover:underline">+1 (555) 123-4567</a>
            </div>
            <div className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-zeyfira-100 text-zeyfira-600 mb-4">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">We'll respond to your email within 24 hours.</p>
              <a href="mailto:info@zeyfira.com" className="text-zeyfira-600 font-medium hover:underline">info@zeyfira.com</a>
            </div>
            <div className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-pink-100 text-pink-600 mb-4">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-4">123 Innovation Street, Tech City, TC 10011</p>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 font-medium hover:underline">Get Directions</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 pb-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-5">
              <div className="md:col-span-2 bg-gradient-to-br from-purple-600 to-zeyfira-600 p-8 text-white">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Business Hours</h3>
                      <p className="text-white/80">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-white/80">Saturday - Sunday: Closed</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MessageSquare className="h-5 w-5 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Live Chat</h3>
                      <p className="text-white/80">Our support team is available online during business hours for instant assistance.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Response Time</h3>
                      <p className="text-white/80">We aim to respond to all inquiries within 24 hours during business days.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-12">
                  <h3 className="font-semibold mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="#" className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="md:col-span-3 p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <Input id="name" required placeholder="John Doe" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <Input id="email" type="email" required placeholder="john@example.com" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <Input id="subject" required placeholder="How can we help you?" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <Textarea id="message" required rows={5} placeholder="Tell us about your project or inquiry..." />
                  </div>
                  <div>
                    <Button type="submit" className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-zeyfira-600 text-white">
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 w-full">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30593451365!2d-74.25986652292891!3d40.69714940561046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1619709212111!5m2!1sen!2s" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={false} 
          loading="lazy"
          title="Zeyfira office location"
        ></iframe>
      </section>
    </Layout>
  );
};

export default Contact;
