import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, Globe, FileCheck, MapPin, ArrowRight, Star, Clock, Menu as MenuIcon, X } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import logo from'../assets/WhatsApp Image 2024-11-01 at 19.13.56_0e5fa1de.jpg';
import '../styles/Home.css'


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
          
          <div className="relative transition-all duration-300 rounded-b-lg">
            <RouterLink to="/" className="flex items-center">
              <div
                className={`p-2 rounded-full ${scrolled ? 'bg-white' : 'bg-green-900 bg-opacity-70'}`}
              >
                <img 
                  src={logo}
                  alt="Umeche Agency Logo" 
                  className="h-16 w-auto"
                />
              </div>
            </RouterLink>
          </div>


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

const Home = () => {
  // Stats data
  const stats = [
    { number: "10+", label: "Years Experience", icon: Clock },
    { number: "1000+", label: "People Placed", icon: Users }
  ];

  // Services data
  const services = [
    { title: "Female House Maid", icon: Users },
    { title: "House Worker", icon: Users },
    { title: "Female Private Teacher", icon: Briefcase },
    { title: "Female Nurse", icon: Users },
    { title: "Female Cook", icon: Users },
    { title: "House Nanny", icon: Users }
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
            <h1 className="text-5xl font-bold mb-6">Welcome to Umeche Agency</h1>
            <p className="text-xl mb-4">Creating Excellence in Global Workforce Solutions</p>
            <p className="text-lg mb-8 text-gray-200">
              With over a decade of experience, we connect skilled professionals 
              with leading employers worldwide, creating lasting partnerships 
              and opportunities for growth.
            </p>
            <button className="bg-white text-green-900 px-8 py-3 rounded-full font-medium hover:bg-green-50 transition-colors">
              Explore Our Services
              <ArrowRight className="inline-block ml-2" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-green-50 rounded-xl p-8 text-center"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-green-800" />
                <div className="text-4xl font-bold text-green-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-green-900"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            Professional Services
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <service.icon className="w-12 h-12 mx-auto mb-4 text-green-800" />
                <h3 className="text-xl font-semibold mb-2 text-gray-800 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center">Professional placement services</p>
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
          <Star className="w-12 h-12 mx-auto mb-8 text-yellow-400" />
          <blockquote className="text-2xl font-medium italic mb-8">
            "Connecting Global Talent with Outstanding Opportunities - Your Success is Our Priority"
          </blockquote>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;