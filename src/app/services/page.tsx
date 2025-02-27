import { Metadata } from 'next';
import Image from 'next/image';
import { FiCheck, FiWifi, FiSettings, FiLifeBuoy } from 'react-icons/fi';
import ServicePlan from '@/components/ui/ServicePlan';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore our range of affordable internet packages with speeds from 7Mbps to 30Mbps. Fast, reliable connectivity within a 2km radius of VOK.',
};

export default function Services() {
  // Service plans data
  const servicePlans = [
    {
      id: '7mbps',
      speed: 7,
      price: 1500,
      popular: false,
      features: [
        'Suitable for light internet usage',
        'Stream videos in standard definition',
        'Browse and check emails',
        'Connect multiple devices',
        '24/7 technical support',
      ],
    },
    {
      id: '15mbps',
      speed: 15,
      price: 2500,
      popular: true,
      features: [
        'Perfect for average household use',
        'Stream HD videos without buffering',
        'Work from home efficiently',
        'Online gaming with low latency',
        'Connect 5-8 devices simultaneously',
        '24/7 priority technical support',
      ],
    },
    {
      id: '30mbps',
      speed: 30,
      price: 3500,
      popular: false,
      features: [
        'Ideal for heavy internet users',
        'Stream 4K videos without interruption',
        'Download large files quickly',
        'Multiple HD video conferences',
        'Connect 10+ devices simultaneously',
        'Premium 24/7 technical support',
      ],
    },
  ];

  // Additional services
  const additionalServices = [
    {
      id: 'installation',
      title: 'Installation Services',
      description: 'Professional installation of all equipment needed for your internet connection. Our technicians ensure optimal signal strength and connection stability.',
      icon: <FiSettings className="w-12 h-12 text-accent" />,
      features: [
        'Expert equipment setup',
        'Signal optimization',
        'Cable management',
        'Basic network configuration',
        'Device connectivity testing',
      ],
    },
    {
      id: 'support',
      title: 'Technical Support',
      description: "Dedicated technical support available 24/7 to ensure your connection stays reliable. We're just a phone call away whenever you need assistance.",
      icon: <FiLifeBuoy className="w-12 h-12 text-accent" />,
      features: [
        '24/7 help desk',
        'Remote troubleshooting',
        'On-site support when needed',
        'Regular service checkups',
        'Network security assistance',
      ],
    },
  ];
  
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-12 bg-primary text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Affordable high-speed internet packages designed to meet your connectivity needs.
          </p>
        </div>
      </section>
      
      {/* Internet Packages Section */}
      <section className="py-16 bg-gray-50" id="packages">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Internet <span className="text-accent">Packages</span>
            </h2>
            <p className="text-gray-600">
              Choose from our range of affordable packages designed to suit different usage needs.
              All packages include unlimited data with no hidden costs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicePlans.map((plan) => (
              <ServicePlan
                key={plan.id}
                id={plan.id}
                speed={plan.speed}
                price={plan.price}
                features={plan.features}
                popular={plan.popular}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg mb-6">
              Not sure which package is right for you? Contact us for a personalized recommendation.
            </p>
            <Button href="/contact" variant="primary">
              Get a Recommendation
            </Button>
          </div>
        </div>
      </section>
      
      {/* Speed Comparison Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                What You Can Do With <span className="text-accent">Our Speeds</span>
              </h2>
              <p className="text-gray-600 mb-8">
                Different online activities require different internet speeds. Here's what you 
                can expect to do comfortably with each of our packages.
              </p>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-primary mb-2">7 Mbps Package</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <FiCheck className="text-accent mt-1 mr-2" />
                      <span>Browse websites, check emails, and use social media</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheck className="text-accent mt-1 mr-2" />
                      <span>Stream standard definition (SD) videos</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheck className="text-accent mt-1 mr-2" />
                      <span>Video calls with one person</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-primary mb-2">15 Mbps Package</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <FiCheck className="text-accent mt-1 mr-2" />
                      <span>All 7 Mbps activities plus:</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheck className="text-accent mt-1 mr-2" />
                      <span>Stream high definition (HD) videos</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheck className="text-accent mt-1 mr-2" />
                      <span>Online gaming with low latency</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheck className="text-accent mt-1 mr-2" />
                      <span>Video conferences with multiple participants</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-primary mb-2">30 Mbps Package</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <FiCheck className="text-accent mt-1 mr-2" />
                      <span>All 15 Mbps activities plus:</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheck className="text-accent mt-1 mr-2" />
                      <span>Stream 4K ultra-high definition videos</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheck className="text-accent mt-1 mr-2" />
                      <span>Download large files quickly</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheck className="text-accent mt-1 mr-2" />
                      <span>Multiple simultaneous HD streaming and gaming</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheck className="text-accent mt-1 mr-2" />
                      <span>Smart home device connectivity for multiple devices</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-[500px] relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/Speed.jpg"
                  alt="Internet Speed Comparison"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Additional <span className="text-accent">Services</span>
            </h2>
            <p className="text-gray-600">
              Beyond our internet packages, we offer additional services to ensure 
              you get the most out of your connection.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalServices.map((service) => (
              <div 
                key={service.id} 
                id={service.id} 
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    {service.icon}
                    <h3 className="text-2xl font-bold text-primary ml-4">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <h4 className="font-semibold text-primary mb-4">Features:</h4>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <FiCheck className="text-accent mt-1 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button href="/contact" variant="primary">
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Experience Our <span className="text-accent">High-Speed Internet?</span>
            </h2>
            <p className="text-xl mb-8">
              Contact us today to get started with one of our affordable internet packages.
            </p>
            <Button href="/contact" variant="accent" size="lg" icon={<FiWifi />}>
              Get Connected Now
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}