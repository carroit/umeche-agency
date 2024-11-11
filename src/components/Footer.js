import React from 'react';
import { Mail, Phone, MapPin, Users, Globe } from 'lucide-react';
import '../styles/Home.css';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Management & Relations Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6 text-green-400">
              Management & Relations
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-green-400" />
                <p className="text-gray-300">MGR: +251 936335656 (MEKDES CHUCHA)</p>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-green-400" />
                <p className="text-gray-300">INFO: +251 936445656 (MAHLET ASCHALEW)</p>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-green-400" />
                <p className="text-gray-300">FOREIGN REL: +251 936793636 (ABU GHUFRAN)</p>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-green-400" />
                <p className="text-gray-300">CEO: +251 911571166 (ABDUREZAK)</p>
              </div>
            </div>
          </div>

          {/* Contact Information Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6 text-green-400">
              Contact Information
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-green-400" />
                <p className="text-gray-300">+251-912-086678</p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-green-400" />
                <p className="text-gray-300">+251-910-758130</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-green-400" />
                <p className="text-gray-300">umecheumeche@gmail.com</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-green-400" />
                <p className="text-gray-300">umecheumechem@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Location Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6 text-green-400">
              Location
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-green-400" />
                <p className="text-gray-300">ETHIOPIA</p>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-green-400" />
                <p className="text-gray-300">ADDIS ABABA</p>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-green-400" />
                <p className="text-gray-300">Awtobistera yologiya Building</p>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-green-400" />
                <p className="text-gray-300">6th Floor, Office No. 619</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            Copyright © {new Date().getFullYear()} UMECHE AGENCY. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;