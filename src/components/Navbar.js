import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, Globe, FileCheck, MapPin, ArrowRight, Star, Clock,
   Menu as MenuIcon, X }  from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';
import { BrowserRouter as Router, Routes, Route, Link as RouterLink, useLocation } from 'react-router-dom';

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

  const scrollLinks = [
    { to: "experience", label: "Experience" },
    { to: "services", label: "Services" },
    { to: "requirements", label: "Requirements" },
    { to: "countries", label: "Countries" },
    { to: "contact", label: "Contact" }
  ];

  const routeLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/gallery", label: "Gallery" }
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
