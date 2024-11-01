import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users,  Star,  Clock,Building,Heart,
   Menu as MenuIcon,X}  from 'lucide-react';
   import { Link as ScrollLink } from 'react-scroll';
   import { Link as RouterLink, useLocation } from 'react-router-dom';

// Reusing the animation variants from Home
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

  const routeLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/gallery", label: "Gallery" }
  ];

  const scrollLinks = [
    { to: "experience", label: "Experience" },
    { to: "services", label: "Services" },
    { to: "requirements", label: "Requirements" },
    { to: "countries", label: "Countries" },
    { to: "contact", label: "Contact" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md text-gray-800' : 'bg-transparent text-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <RouterLink to="/" className="text-xl font-bold">Ahlen Agency</RouterLink>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-opacity-20 hover:bg-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-8">
            {routeLinks.map(({ to, label }) => (
              <li key={to}>
                <RouterLink
                  to={to}
                  className="cursor-pointer hover:opacity-75 transition-opacity"
                >
                  {label}
                </RouterLink>
              </li>
            ))}
            {isHomePage && scrollLinks.map(({ to, label }) => (
              <li key={to}>
                <ScrollLink
                  to={to}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:opacity-75 transition-opacity"
                  spy={true}
                  activeClass="font-bold"
                >
                  {label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="px-2 pt-2 pb-3 space-y-1">
            {routeLinks.map(({ to, label }) => (
              <li key={to}>
                <RouterLink
                  to={to}
                  className="block px-3 py-2 rounded-md hover:bg-opacity-20 hover:bg-white cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </RouterLink>
              </li>
            ))}
            {isHomePage && scrollLinks.map(({ to, label }) => (
              <li key={to}>
                <ScrollLink
                  to={to}
                  smooth={true}
                  duration={500}
                  className="block px-3 py-2 rounded-md hover:bg-opacity-20 hover:bg-white cursor-pointer"
                  onClick={() => setIsOpen(false)}
                  spy={true}
                  activeClass="font-bold"
                >
                  {label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

// About Page Component
export const About = () => {
  const values = [
    { icon: Heart, title: "Integrity", description: "Upholding the highest standards in all our actions" },
    { icon: Star, title: "Excellence", description: "Striving for excellence in everything we do" },
    { icon: Users, title: "Respect", description: "Treating everyone with respect and dignity" },
    { icon: Building, title: "Collaboration", description: "Working together to achieve the best outcomes" }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl font-bold mb-6">About Ahlen Agency</h1>
            <p className="text-xl mb-8">Creating meaningful connections across borders</p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-8">Our Mission</motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-gray-600">
              At AHLEN Agency, we are dedicated to connecting talented, motivated, and skilled workers 
              with businesses across the globe. Our mission is to foster high-quality foreign business 
              relations and provide exceptional human resource services that create opportunities for all.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center"
          >
            <Clock className="w-16 h-16 mx-auto mb-6 text-blue-500" />
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-6">10+ Years of Excellence</motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-gray-600 max-w-3xl mx-auto">
              With over a decade of experience, we have successfully placed thousands of skilled 
              professionals in rewarding positions across the globe, building lasting relationships 
              and creating success stories.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Values
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-4 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <value.icon className="w-12 h-12 mx-auto mb-4 text-blue-500" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};


export default About;
