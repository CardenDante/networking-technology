'use client';

import React from 'react';
import Link from 'next/link';
import { FiPhone, FiMail, FiMapPin, FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div>
                <h3 className="text-xl font-bold leading-tight">
                  <span className="text-accent">neT</span>working<br />
                  <span className="text-accent">T</span>echnology
                </h3>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Providing affordable high-speed internet connectivity at your doorstep 
              within a 2km radius of VOK.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-accent transition-colors">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-accent transition-colors">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-accent transition-colors">
                <FiInstagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-accent transition-colors">
                <FiLinkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-accent">Quick Links</h4>
            <ul className="space-y-4">
              {/* <li>
                <Link href="/" className="text-gray-300 hover:text-accent transition-colors">
                  Home
                </Link>
              </li> */}
              {/* <li>
                <Link href="/services" className="text-gray-300 hover:text-accent transition-colors">
                  Services
                </Link>
              </li> */}
              <li>
                <Link href="/about" className="text-gray-300 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/coverage" className="text-gray-300 hover:text-accent transition-colors">
                  Coverage
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-accent">Our Services</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/services#7mbps" className="text-gray-300 hover:text-accent transition-colors">
                  7 Mbps Package
                </Link>
              </li>
              <li>
                <Link href="/services#15mbps" className="text-gray-300 hover:text-accent transition-colors">
                  15 Mbps Package
                </Link>
              </li>
              <li>
                <Link href="/services#30mbps" className="text-gray-300 hover:text-accent transition-colors">
                  30 Mbps Package
                </Link>
              </li>
              {/* <li>
                <Link href="/services#installation" className="text-gray-300 hover:text-accent transition-colors">
                  Installation Services
                </Link>
              </li>
              <li>
                <Link href="/services#support" className="text-gray-300 hover:text-accent transition-colors">
                  Technical Support
                </Link>
              </li> */}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-accent">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FiPhone className="mt-1 mr-3 text-accent" />
                <a href="tel:+254748470551" className="text-gray-300 hover:text-accent transition-colors">
                  +254 748 470 551
                </a>
              </li>
              <li className="flex items-start">
                <FiMail className="mt-1 mr-3 text-accent" />
                <a href="mailto:emmanuelatundo3@gmail.com" className="text-gray-300 hover:text-accent transition-colors">
                  emmanuelatundo3@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <FiMapPin className="mt-1 mr-3 text-accent" />
                <span className="text-gray-300">
                  VOK Area, Mombasa, Kenya<br />
                  Coverage: 2km Radius
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>© {currentYear} Networking Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;