import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Building, Heart, Clock, Star, Phone, Mail, MapPin, Camera } from 'lucide-react';

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
// Gallery Page Component
export const Gallery = () => {
  // Sample image data - replace with your actual images
  const images = [
    { src: "/api/placeholder/400/300", alt: "Team member 1", title: "Dubai Placement" },
    { src: "/api/placeholder/400/300", alt: "Team member 2", title: "Saudi Arabia Success" },
    { src: "/api/placeholder/400/300", alt: "Team member 3", title: "Kuwait Operations" },
    { src: "/api/placeholder/400/300", alt: "Office 1", title: "Our Main Office" },
    { src: "/api/placeholder/400/300", alt: "Success Story 1", title: "Happy Clients" },
    { src: "/api/placeholder/400/300", alt: "Success Story 2", title: "Team Building" }
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
            <h1 className="text-5xl font-bold mb-6">Our Gallery</h1>
            <p className="text-xl mb-8">Moments and memories from our journey</p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
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
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 bg-white">
                  <h3 className="text-lg font-semibold text-gray-800">{image.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
