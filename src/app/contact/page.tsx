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
      details: ['info@networkingtechnology.com'],
      action: {
        text: 'Email us',
        href: 'mailto:info@networkingtechnology.com',
      },
    },
    {
      icon: <FiMapPin size={24} className="text-accent" />,
      title: 'Location',
      details: ['VOK Area, Nairobi, Kenya', 'Coverage: 2km Radius'],
      action: {
        text: 'Get directions',
        href: 'https://maps.google.com/?q=VOK+Nairobi',
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
      <section className="pt-32 pb-12 bg-primary text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We're here to help you get connected with affordable high-speed internet.
            Reach out to us today!
          </p>
        </div>
      </section>
      
      {/* Contact Content */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-8">
                Contact Information
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {contactInfo.map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center mb-4">
                      {item.icon}
                      <h3 className="text-xl font-bold ml-3">{item.title}</h3>
                    </div>
                    <div className="space-y-2 mb-4">
                      {item.details.map((detail, i) => (
                        <p key={i} className="text-gray-600">{detail}</p>
                      ))}
                    </div>
                    {item.action && (
                      <a 
                        href={item.action.href}
                        className="text-secondary font-medium hover:text-secondary-dark transition-colors"
                      >
                        {item.action.text} →
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">
            Our Location and Coverage Area
          </h2>
          <div className="bg-gray-100 p-4 rounded-xl overflow-hidden shadow-md">
            <div className="h-[400px] rounded-lg overflow-hidden relative">
              {/* Replace with your actual map */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.210269275097!2d36.8422!3d-1.2908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTcnMjcuMCJTIDM2wrA1MCczNS45IkU!5e0!3m2!1sen!2sus!4v1614698412800!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                aria-hidden="false"
                title="Networking Technology Location Map"
              ></iframe>
              
              {/* Coverage Radius Overlay */}
              <div className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-md">
                <div className="flex items-center">
                  <FiMapPin className="text-primary mr-2" />
                  <span className="font-medium">2km Coverage Radius</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Find answers to common questions about our internet services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {/* FAQ Item 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-bold text-primary mb-2">
                    How do I know if I'm within your coverage area?
                  </h3>
                  <p className="text-gray-600">
                    Our services are available within a 2km radius of VOK. You can check your location 
                    on our coverage page or contact us with your specific address for confirmation.
                  </p>
                </div>
              </div>
              
              {/* FAQ Item 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-bold text-primary mb-2">
                    What are your installation fees?
                  </h3>
                  <p className="text-gray-600">
                    Installation fees vary depending on your specific location and setup requirements. 
                    Please contact us for a personalized quote. We often run promotions with reduced 
                    or waived installation fees.
                  </p>
                </div>
              </div>
              
              {/* FAQ Item 3 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-bold text-primary mb-2">
                    How long does installation take?
                  </h3>
                  <p className="text-gray-600">
                    Once you've subscribed to a package, we typically complete installation within 
                    24-48 hours, depending on your location and availability.
                  </p>
                </div>
              </div>
              
              {/* FAQ Item 4 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-bold text-primary mb-2">
                    What happens if I experience connectivity issues?
                  </h3>
                  <p className="text-gray-600">
                    We provide 24/7 technical support. You can contact our support team via phone, 
                    and we'll work to resolve any issues as quickly as possible. Most issues can be 
                    resolved remotely, but if necessary, our technicians will visit your location.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}