import React from 'react';
import { Mail, Phone, MapPin, Users, Globe } from 'lucide-react';
import '../styles/Home.css';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Management & Relations Column */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">Management & Relations</h3>
            <div className="space-y-3">
              <p className="flex items-center justify-center md:justify-start gap-2">
                <Users className="w-4 h-4" />
                <span>MGR: +251 936335656 (MEKDES CHUCHA)</span>
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <Users className="w-4 h-4" />
                <span>INFO: +251 936445656 (MAHLET ASCHALEW)</span>
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <Globe className="w-4 h-4" />
                <span>FOREIGN REL: +251 936793636 (ABU GHUFRAN)</span>
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <Users className="w-4 h-4" />
                <span>CEO: +251 911571166 (ABDUREZAK)</span>
              </p>
            </div>
          </div>

          {/* Contact Information Column */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <p className="flex items-center justify-center md:justify-start gap-2">
                <Phone className="w-4 h-4" />
                <span>+251-912-086678</span>
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <Phone className="w-4 h-4" />
                <span>+251-910-758130</span>
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <Mail className="w-4 h-4" />
                <span>umecheumeche@gmail.com</span>
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <Mail className="w-4 h-4" />
                <span>ahlenagencym@gmail.com</span>
              </p>
            </div>
          </div>

          {/* Location Column */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">Location</h3>
            <div className="space-y-3">
              <p className="flex items-center justify-center md:justify-start gap-2">
                <MapPin className="w-4 h-4" />
                <span>ETHIOPIA</span>
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <MapPin className="w-4 h-4" />
                <span>ADDIS ABABA</span>
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <MapPin className="w-4 h-4" />
                <span>Awtobistera yologiya Building</span>
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <MapPin className="w-4 h-4" />
                <span>6th Floor, Office No. 619</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-blue-400 text-center">
          <p className="text-sm">
            Copyright © {new Date().getFullYear()} UMECHE AGENCY. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;