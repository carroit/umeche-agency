import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Ensure this import is correct
import { Menu as MenuIcon, X } from 'lucide-react'; // Ensure to import the correct icons
import Footer from '../components/Footer';
import logo from '../assets/WhatsApp Image 2024-11-01 at 19.13.56_0e5fa1de.jpg';
import { Users, Building, Heart, Briefcase, Globe, CheckCircle, ArrowRight, Star } from 'lucide-react';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const Services = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  const services = [
    {
      title: "Female House Maid",
      icon: Users,
      description: "Professional housekeeping services with experienced staff",
      features: ["Cleaning & Maintenance", "Laundry Services", "Kitchen Help", "General House Care"]
    },
    {
      title: "House Worker",
      icon: Building,
      description: "Comprehensive household management solutions",
      features: ["Property Maintenance", "Gardening", "Security", "General Assistance"]
    },
    {
      title: "Female Private Teacher",
      icon: Briefcase,
      description: "Qualified educators for private tutoring",
      features: ["Subject Expertise", "Personalized Learning", "Progress Tracking", "Flexible Schedule"]
    },
    {
      title: "Female Nurse",
      icon: Heart,
      description: "Professional healthcare assistance",
      features: ["Patient Care", "Medical Assistance", "Health Monitoring", "Elder Care"]
    },
    {
      title: "Female Cook",
      icon: Globe,
      description: "Expert culinary professionals",
      features: ["Meal Planning", "Special Diets", "Event Catering", "Kitchen Management"]
    },
    {
      title: "House Nanny",
      icon: Users,
      description: "Dedicated childcare services",
      features: ["Child Development", "Educational Activities", "Safe Environment", "Daily Routines"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md text-gray-800' : 'bg-transparent text-white'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center">
              <div className={`p-2 rounded-full ${scrolled ? 'bg-white' : 'bg-green-900 bg-opacity-70'}`}>
                <img src={logo} alt="Umeche Agency Logo" className="h-16 w-auto" />
              </div>
            </Link>

            <div className="hidden md:flex space-x-8">
              {menuItems.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`cursor-pointer font-medium transition-colors ${scrolled ? 'text-gray-800 hover:text-green-800' : 'text-white hover:text-green-100'}`}
                >
                  {label}
                </Link>
              ))}
            </div>

            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
              {isOpen ? <X /> : <MenuIcon />}
            </button>
          </div>

          {/* Mobile menu */}
          {isOpen && (
            <div className="md:hidden bg-white rounded-lg shadow-lg mt-2 p-4">
              {menuItems.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="block py-2 text-gray-800 hover:text-green-800"
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[60vh]">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-gray-800 opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 py-32 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center max-w-3xl mx-auto text-white"
          >
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl mb-8">Professional Staffing Solutions for Your Needs</p>
            <button className="bg-white text-green-900 px-8 py-3 rounded-full font-medium hover:bg-green-50 transition-colors">
              Contact Us Today
              <ArrowRight className="inline-block ml-2" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <service.icon className="w-12 h-12 text-green-800 mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-green-900 text-white">
        <motion.div 
          className="max-w-4xl mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Star className="w-12 h-12 mx-auto mb-8 text-yellow-400" />
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Let us help you find the perfect staff for your needs</p>
          <button className="bg-white text-green-900 px-8 py-3 rounded-full font-medium hover:bg-green-50 transition-colors">
            Contact Our Team
            <ArrowRight className="inline-block ml-2" />
          </button>
        </motion.div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
