import { Metadata } from 'next';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';
import ContactForm from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Networking Technology for affordable internet services within a 2km radius of VOK. Get connected today!',
};

export default function Contact() {
  // Contact info items
  const contactInfo = [
    {
      icon: <FiPhone size={24} className="text-accent" />,
      title: 'Phone',
      details: ['+254 748 470 551'],
      action: {
        text: 'Call us',
        href: 'tel:+254748470551',
      },
    },
    {
      icon: <FiMail size={24} className="text-accent" />,
      title: 'Email',
      details: ['emmanuelatundo3@gmail.com'],
      action: {
        text: 'Email us',
        href: 'mailto:emmanuelatundo3@gmail.com',
      },
    },
    {
      icon: <FiMapPin size={24} className="text-accent" />,
      title: 'Location',
      details: ['VOK Area, Mombasa, Kenya', 'Coverage: 2km Radius'],
      action: {
        text: 'Get directions',
        href: 'https://maps.google.com/?q=VOK+Mombasa',
      },
    },
    {
      icon: <FiClock size={24} className="text-accent" />,
      title: 'Business Hours',
      details: [
        'Monday - Friday: 8:00 AM - 6:00 PM',
        'Saturday: 9:00 AM - 4:00 PM',
        'Sunday: Closed',
      ],
    },
  ];
  
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            We're here to help you get connected with affordable high-speed internet.
            Reach out to us today!
          </p>
        </div>
      </section>
      
      {/* Contact Content */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-7 bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>
            
            {/* Contact Information */}
            <div className="lg:col-span-5">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">
                Contact Information
              </h2>
              <div className="grid grid-cols-1 gap-6">
                {contactInfo.map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                    </div>
                    <div className="space-y-2 mb-4 pl-16">
                      {item.details.map((detail, i) => (
                        <p key={i} className="text-gray-700 leading-relaxed">{detail}</p>
                      ))}
                    </div>
                    {item.action && (
                      <div className="pl-16">
                        <a 
                          href={item.action.href}
                          className="inline-flex items-center text-secondary font-medium hover:text-secondary-dark transition-colors"
                        >
                          <span>{item.action.text}</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
              Our Location and Coverage Area
            </h2>
            <div className="bg-gray-100 p-4 rounded-xl overflow-hidden shadow-md">
              <div className="h-[450px] rounded-lg overflow-hidden relative">
                {/* Map iframe */}
                 {/* Map iframe - Standard view with better zoom */}
                 <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.8147551663695!2d39.68987799999999!3d-4.029079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184013c79bbbd6bb%3A0x9351b5ef18c0ffbd!2sEmmanuel%20Nelson!5e0!3m2!1sen!2ske!4v1740687652098!5m2!1sen!2ske" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-hidden="false"
                  title="Networking Technology Location Map"
                ></iframe>
                
                {/* Coverage Radius Overlay */}
                <div className="absolute top-4 left-4 bg-white p-4 rounded-lg shadow-md">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center mr-3">
                      <FiMapPin className="text-white" size={16} />
                    </div>
                    <div>
                      <p className="font-bold text-primary">Coverage Area</p>
                      <p className="text-sm text-gray-600">2km Radius from VOK</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}