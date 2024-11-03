import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, Users, Building, Clock, Menu as MenuIcon, X } from 'lucide-react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import logo from'../assets/WhatsApp Image 2024-11-01 at 19.13.56_0e5fa1de.jpg';

// Navigation Component
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md text-gray-800' : 'bg-transparent text-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <RouterLink to="/" className="flex items-center">
            <img 
              src={logo}
               alt="Umeche Agency Logo" 
              className="h-16 w-auto"
              style={{ position: 'relative', zIndex: 10 }}
            />
          </RouterLink>

          <div className="hidden md:flex space-x-8">
            {menuItems.map(({ to, label }) => (
              <RouterLink
                key={to}
                to={to}
                className={`cursor-pointer font-medium transition-colors ${
                  scrolled ? 'text-gray-800 hover:text-green-800' : 'text-white hover:text-green-100'
                }`}
              >
                {label}
              </RouterLink>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            {isOpen ? <X /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-white rounded-lg shadow-lg mt-2 p-4">
            {menuItems.map(({ to, label }) => (
              <RouterLink
                key={to}
                to={to}
                className="block py-2 text-gray-800 hover:text-green-800"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </RouterLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

const About = () => {
  const values = [
    { icon: Heart, title: "Integrity", description: "Upholding the highest standards in all our actions" },
    { icon: Star, title: "Excellence", description: "Striving for excellence in everything we do" },
    { icon: Users, title: "Respect", description: "Treating everyone with respect and dignity" },
    { icon: Building, title: "Collaboration", description: "Working together to achieve the best outcomes" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-gray-800 opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 py-32 flex items-center min-h-screen">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center max-w-3xl mx-auto text-white"
          >
            <h1 className="text-5xl font-bold mb-6">About Umeche Agency</h1>
            <p className="text-xl mb-8">Creating meaningful connections across borders</p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-8 text-green-900">Our Mission</h2>
            <p className="text-lg text-gray-600">
              At Umeche Agency, we are dedicated to connecting talented, motivated, and skilled workers 
              with businesses across the globe. Our mission is to foster high-quality foreign business 
              relations and provide exceptional human resource services that create opportunities for all.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-green-900"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            Our Values
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <value.icon className="w-12 h-12 mx-auto mb-4 text-green-800" />
                <h3 className="text-xl font-semibold mb-2 text-gray-800 text-center">{value.title}</h3>
                <p className="text-gray-600 text-center">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-green-900 text-white">
        <motion.div 
          className="max-w-4xl mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Clock className="w-12 h-12 mx-auto mb-8 text-yellow-400" />
          <blockquote className="text-2xl font-medium italic mb-8">
            "10+ Years of Excellence in Global Workforce Solutions"
          </blockquote>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;