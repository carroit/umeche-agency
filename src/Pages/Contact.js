import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Menu as MenuIcon, X } from 'lucide-react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import logo from'../assets/WhatsApp Image 2024-11-01 at 19.13.56_0e5fa1de.jpg';

// Navigation Component (same as About page)
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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    desiredCountry: '',
    gender: '',
    workExperience: '',
    profilePhoto: null,
    idPhoto: null,
    passport: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const contactInfo = [
    { icon: Phone, title: "Phone", info: "+1234567890" },
    { icon: Mail, title: "Email", info: "contact@umecheagency.com" },
    { icon: MapPin, title: "Location", info: "Dubai, UAE" }
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
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl mb-8">Let's start your journey together</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="grid md:grid-cols-3 gap-8 mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-green-50 rounded-xl p-8 text-center"
              >
                <item.icon className="w-12 h-12 mx-auto mb-4 text-green-800" />
                <h3 className="text-xl font-semibold mb-2 text-green-900">{item.title}</h3>
                <p className="text-gray-600">{item.info}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold mb-6 text-center text-green-900">Get Started</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Form fields remain the same but styled to match the green theme */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg focus:ring-green-500 focus:border-green-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg focus:ring-green-500 focus:border-green-500"
                    required
                  />
                </div>
              </div>

              

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Desired Country</label>
                  <select
                    name="desiredCountry"
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                    required
                  >
                    <option value="">Select...</option>
                    <option value="Dubai">Dubai</option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Kuwait">Kuwait</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                  <select
                    name="gender"
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                    required
                  >
                    <option value="">Select...</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Work Experience (years)</label>
                <input
                  type="text"
                  name="workExperience"
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg"
                  required
                />
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Profile Photo</label>
                  <input
                    type="file"
                    name="profilePhoto"
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">ID Photo</label>
                  <input
                    type="file"
                    name="idPhoto"
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Passport</label>
                  <input
                    type="file"
                    name="passport"
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Submit Application
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;