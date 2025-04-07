import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Toaster } from "@/components/ui/toaster";
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const pageTransition = {
  initial: { 
    opacity: 0,
    y: -20,
    scale: 0.98
  },
  animate: { 
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
  exit: { 
    opacity: 0,
    y: 20,
    scale: 0.98,
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  }
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageTransition}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Layout;
