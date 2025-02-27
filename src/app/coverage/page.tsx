import { Metadata } from 'next';
import Image from 'next/image';
import { FiMapPin, FiWifi, FiInfo, FiCheckCircle, FiAlertTriangle } from 'react-icons/fi';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Coverage Area',
  description: 'Check if your location is within our 2km coverage radius from VOK. Fast, reliable internet service available throughout our service area.',
};

export default function Coverage() {
  // Coverage zones
  const coverageZones = [
    {
      title: 'Primary Zone (0-1km)',
      status: 'Excellent Coverage',
      icon: <FiCheckCircle className="text-green-500" size={20} />,
      description: 'Within this zone, we offer excellent signal strength and reliability. All packages are available with maximum speeds.',
      features: [
        'Full package availability',
        'Maximum advertised speeds',
        'Excellent signal strength',
        'Priority installation',
      ],
    },
    {
      title: 'Secondary Zone (1-2km)',
      status: 'Good Coverage',
      icon: <FiCheckCircle className="text-green-500" size={20} />,
      description: 'Our service is still reliable in this zone, but may be affected by physical obstacles. Site survey recommended before installation.',
      features: [
        'Full package availability',
        'Near-maximum speeds in most cases',
        'Good signal strength (line-of-sight dependent)',
        'Site survey recommended',
      ],
    },
    {
      title: 'Beyond 2km',
      status: 'Limited Coverage',
      icon: <FiAlertTriangle className="text-yellow-500" size={20} />,
      description: 'Unfortunately, our service isn\'t generally available beyond 2km. However, in some cases with clear line-of-sight, we may be able to provide service.',
      features: [
        'Case-by-case evaluation required',
        'Service availability not guaranteed',
        'May require additional equipment',
        'Custom pricing and plan',
      ],
    },
  ];
  
  // FAQ items
  const faqItems = [
    {
      question: 'How do I know if my location is within your coverage area?',
      answer: 'We serve areas within a 2km radius of VOK. You can check your location on our interactive map, enter your address in our coverage checker, or contact us directly with your location details.',
    },
    {
      question: 'What factors can affect my internet connectivity?',
      answer: 'Several factors can impact your connection quality, including distance from our transmission point, physical obstacles (buildings, trees), weather conditions, and the positioning of your receiver. Our installation team works to optimize these factors.',
    },
    {
      question: 'Can I get service if I\'m just outside the 2km radius?',
      answer: 'It depends on your specific location and whether there\'s a clear line-of-sight to our transmission point. Contact us for a site survey to determine if service is possible at your location.',
    },
    {
      question: 'Do I need special equipment for the installation?',
      answer: 'We provide all necessary equipment as part of the installation process. This typically includes a receiver/antenna, cables, and a router. The specific equipment may vary based on your location and selected package.',
    },
    {
      question: 'How long does installation take?',
      answer: 'Standard installation typically takes 2-3 hours. This includes mounting the receiver, running cables, setting up your router, and testing the connection. We\'ll schedule an installation time that\'s convenient for you.',
    },
  ];
  
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-12 bg-primary text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Coverage Area</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Check if your location falls within our service area for high-speed internet connectivity.
          </p>
        </div>
      </section>
      
      {/* Coverage Map Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Our <span className="text-accent">Service Area</span>
            </h2>
            <p className="text-gray-600">
              We currently provide service within a 2km radius of VOK in Nairobi. 
              Check our interactive map to see if your location is covered.
            </p>
          </div>
          
          <div className="bg-gray-100 p-4 rounded-xl overflow-hidden shadow-md mb-8">
            <div className="h-[500px] rounded-lg overflow-hidden relative">
              {/* Interactive Map - Replace with actual implementation */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.8147551663695!2d39.68987799999999!3d-4.029079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184013c79bbbd6bb%3A0x9351b5ef18c0ffbd!2sEmmanuel%20Nelson!5e0!3m2!1sen!2ske!4v1740687652098!5m2!1sen!2ske" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                aria-hidden="false"
                title="Networking Technology Coverage Map"
              ></iframe>
              
              {/* Coverage Radius Overlay */}
              <div className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-md">
                <div className="flex items-center mb-2">
                  <FiMapPin className="text-primary mr-2" />
                  <span className="font-medium">Coverage Radius</span>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                    <span>0-1km: Excellent</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                    <span>1-2km: Good</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Address Checker */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-primary mb-4">Check Your Address</h3>
              <p className="text-gray-600 mb-4">
                Enter your address below to check if your location is within our coverage area.
              </p>
              <form className="space-y-4">
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Address
                  </label>
                  <input
                    id="address"
                    type="text"
                    className="input"
                    placeholder="e.g., Apartment name, Street, VOK area"
                  />
                </div>
                <Button type="submit" variant="primary" fullWidth>
                  Check Coverage
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Coverage Zones Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Coverage <span className="text-accent">Zones</span>
            </h2>
            <p className="text-gray-600">
              Our service quality varies based on your distance from our transmission point. 
              Here's what to expect in different coverage zones.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coverageZones.map((zone, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">{zone.title}</h3>
                  <div className="flex items-center mb-4">
                    {zone.icon}
                    <span className="ml-2 font-medium">{zone.status}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{zone.description}</p>
                  <h4 className="font-semibold text-primary mb-2">Features:</h4>
                  <ul className="space-y-2">
                    {zone.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <FiCheckCircle className="text-accent mt-1 mr-2" size={16} />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Installation Process */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                The <span className="text-accent">Installation</span> Process
              </h2>
              <p className="text-gray-600 mb-8">
                Once you've confirmed your location is within our coverage area, here's what 
                you can expect during the installation process:
              </p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center mr-4">
                    <span className="font-bold text-primary">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-lg mb-2">Site Survey</h3>
                    <p className="text-gray-600">
                      Our technician will visit your location to assess signal strength and identify 
                      the optimal placement for equipment.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center mr-4">
                    <span className="font-bold text-primary">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-lg mb-2">Equipment Setup</h3>
                    <p className="text-gray-600">
                      We'll mount the receiver/antenna in the optimal location and run cables as needed.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center mr-4">
                    <span className="font-bold text-primary">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-lg mb-2">Network Configuration</h3>
                    <p className="text-gray-600">
                      We'll set up your router and configure your home network for optimal performance.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center mr-4">
                    <span className="font-bold text-primary">4</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-lg mb-2">Testing & Verification</h3>
                    <p className="text-gray-600">
                      We'll test your connection speed and ensure everything is working properly 
                      before completing the installation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-[500px] relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/installation-process.jpg"
                  alt="Internet Installation Process"
                  fill
                  className="object-cover"
                />
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
              Frequently Asked <span className="text-accent">Questions</span>
            </h2>
            <p className="text-gray-600">
              Find answers to common questions about our coverage and installation process.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-primary mb-2 flex items-center">
                      <FiInfo className="text-accent mr-2 flex-shrink-0" />
                      {item.question}
                    </h3>
                    <p className="text-gray-600">
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Get <span className="text-accent">Connected?</span>
            </h2>
            <p className="text-xl mb-8">
              Contact us today to schedule a site survey and get started with your installation.
            </p>
            <Button href="/contact" variant="accent" size="lg" icon={<FiWifi />}>
              Contact Us Now
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
