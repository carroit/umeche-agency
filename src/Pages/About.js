import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, Users, FileCheck,Globe, Clock, Menu as MenuIcon, X } from 'lucide-react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import logo from'../assets/WhatsApp Image 2024-11-01 at 19.13.56_0e5fa1de.jpg';
import Footer from '../components/Footer';

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
    { to: "/contact", label: "Contact" },
    { to: "/gallery", label: "Gallery" }

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
    { 
      icon: Heart, 
      title: "Client Satisfaction", 
      description: "Focus on gaining maximum client satisfaction through excellence in recruitment" 
    },
    { 
      icon: Star, 
      title: "Transparency", 
      description: "Maintaining reliability and transparency in all transactions" 
    },
    { 
      icon: FileCheck, 
      title: "Compliance", 
      description: "Following all laws and regulations issued by the Ministry of Labor" 
    },
    { 
      icon: Globe, 
      title: "Global Excellence", 
      description: "Creating lasting partnerships and opportunities for growth worldwide" 
    }
  ];

  return (
    <>
      <section className="relative min-h-[60vh]">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-gray-800 opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 py-32 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center max-w-3xl mx-auto text-white"
          >
            <h1 className="text-5xl font-bold mb-6">About Umeche Agency</h1>
            <p className="text-xl mb-8">Founded in September 2018, licensed and accredited for excellence in global workforce solutions</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8 text-green-900 text-center">Our Vision</h2>
            <p className="text-lg text-gray-600 mb-8">
              UMECHE aims to boost recruitment activities and make it one of the highly organized economic activities through up-to-date and diverse services. We strive to improve service levels provided to beneficiaries while maintaining strong relationships with the best private recruitment offices to become a pioneering recruitment office in Ethiopia.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-green-50 rounded-xl p-8">
                <Clock className="w-12 h-12 text-green-800 mb-4" />
                <div className="text-4xl font-bold text-green-900 mb-2">10+</div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
              <div className="bg-green-50 rounded-xl p-8">
                <Users className="w-12 h-12 text-green-800 mb-4" />
                <div className="text-4xl font-bold text-green-900 mb-2">1000+</div>
                <div className="text-gray-600">Successful Placements</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

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
      <Footer/>
    </>
  );
};

export default About;