'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  
  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Navigation links
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Coverage', path: '/coverage' },
    { name: 'Contact', path: '/contact' },
  ];
  
  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary shadow-lg py-2' : 'bg-primary/90 py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <div className="flex items-center">
              {/* Replace with your actual logo */}
              <div className="w-12 h-12 relative mr-2">
                <Image 
                  src="/images/logo.png" 
                  alt="Networking Technology Logo" 
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-white text-lg font-bold leading-tight">
                  <span className="text-accent">neT</span>working<br />
                  <span className="text-accent">T</span>echnology
                </h1>
              </div>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                href={link.path} 
                key={link.name}
                className={`text-white hover:text-accent transition-colors ${
                  pathname === link.path ? 'font-bold text-accent' : 'font-medium'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          {/* Contact Button */}
          <div className="hidden md:flex items-center">
            <a 
              href="tel:+254748470551" 
              className="flex items-center px-4 py-2 rounded-full bg-accent text-primary font-bold hover:bg-accent-dark transition-colors"
            >
              <FiPhone className="mr-2" />
              +254 748 470 551
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div 
          className={`fixed inset-0 bg-primary z-40 transform transition-transform duration-300 lg:hidden ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="container h-full flex flex-col pt-24 pb-8 px-4">
            <nav className="flex flex-col space-y-6 mb-8">
              {navLinks.map((link) => (
                <Link 
                  href={link.path} 
                  key={link.name}
                  className={`text-xl text-white hover:text-accent transition-colors ${
                    pathname === link.path ? 'font-bold text-accent' : 'font-medium'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            
            <div className="mt-auto">
              <a 
                href="tel:+254748470551" 
                className="flex items-center justify-center w-full px-6 py-3 rounded-lg bg-accent text-primary font-bold hover:bg-accent-dark transition-colors"
              >
                <FiPhone className="mr-2" />
                +254 748 470 551
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;