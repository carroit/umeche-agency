import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Ensure this import is correct
import { Menu as MenuIcon, X } from 'lucide-react'; // Ensure to import the correct icons
import Footer from '../components/Footer';
import logo from'../assets/WhatsApp Image 2024-11-01 at 19.13.56_0e5fa1de.jpg';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Sample image data (replace this with your actual data)
const images = [
  { src: 'image1.jpg', alt: 'Image 1', title: 'Title 1', description: 'Description 1' },
  { src: 'image2.jpg', alt: 'Image 2', title: 'Title 2', description: 'Description 2' },
  { src: 'image3.jpg', alt: 'Image 3', title: 'Title 3', description: 'Description 3' },
  // Add more images as needed
];

// Gallery Page Component
const Gallery = () => {
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

  return (
    <div>
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
            <h1 className="text-5xl font-bold mb-6">Our Gallery</h1>
            <p className="text-xl mb-8">Capturing Moments of Success and Growth</p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{image.title}</h3>
                  <p className="text-gray-600">{image.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Gallery;
