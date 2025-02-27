import Image from 'next/image';
import { FiCheck, FiWifi, FiMapPin, FiPhoneCall } from 'react-icons/fi';
import Button from '@/components/ui/Button';
import ServicePlan from '@/components/ui/ServicePlan';

export default function Home() {
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
  
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary overflow-hidden relative">
        {/* Background Waves */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/wifi-waves-bg.png"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Text */}
            <div className="text-light max-w-xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Get <span className="text-accent">Affordable</span> <br />
                <span>Connectivity</span> <br />
                At Your <span className="text-accent">Doorstep</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-200">
                Experience high-speed internet service with reliable connectivity for all your needs, available within a 2km radius from VOK.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/services" variant="accent" size="lg">
                  View Our Packages
                </Button>
                <Button href="/contact" variant="outline" size="lg">
                  Contact Us
                </Button>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative">
              <div className="w-full h-[400px] lg:h-[500px] relative">
                <Image
                  src="/images/hero-image.png"
                  alt="Person using laptop with fast internet"
                  fill
                  className="object-contain"
                />
              </div>
              
              {/* Floating Wifi Icons */}
              <div className="absolute top-10 right-10 animate-pulse">
                <Image
                  src="/images/wifi-icon.png"
                  alt="Wifi Signal"
                  width={50}
                  height={50}
                />
              </div>
              <div className="absolute top-1/3 right-1/4 animate-pulse delay-300">
                <Image
                  src="/images/wifi-icon.png"
                  alt="Wifi Signal"
                  width={40}
                  height={40}
                />
              </div>
              <div className="absolute bottom-1/4 right-20 animate-pulse delay-700">
                <Image
                  src="/images/wifi-icon.png"
                  alt="Wifi Signal"
                  width={60}
                  height={60}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Service Plans Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Choose Your <span className="text-accent">Internet</span> Package
            </h2>
            <p className="text-lg text-gray-600">
              Select from our range of affordable and high-speed internet packages 
              designed to meet your connectivity needs.
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
        </div>
      </section>
      
      {/* Coverage Area Section */}
      <section className="py-20 bg-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Map Image */}
            <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/coverage-map.png"
                alt="Coverage Area Map"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary bg-opacity-30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-light p-4 rounded-lg shadow-lg text-center">
                  <FiMapPin className="text-primary mx-auto mb-2" size={32} />
                  <h3 className="text-primary font-bold">2km Radius From VOK</h3>
                </div>
              </div>
            </div>
            
            {/* Coverage Text */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Service <span className="text-accent">Coverage</span> Area
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our services are available within a 2km radius from VOK, ensuring 
                high-quality internet connectivity for homes and businesses in the area.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="mr-3 mt-1">
                    <FiCheck className="text-accent" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">VOK Area</h4>
                    <p className="text-gray-600">
                      Full coverage with optimal signal strength
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1">
                    <FiCheck className="text-accent" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Up to 1km Radius</h4>
                    <p className="text-gray-600">
                      Excellent connectivity and maximum speeds
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1">
                    <FiCheck className="text-accent" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">1-2km Radius</h4>
                    <p className="text-gray-600">
                      Good connectivity subject to line-of-sight factors
                    </p>
                  </div>
                </li>
              </ul>
              <Button href="/coverage" variant="primary">
                Check Your Location
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-20 bg-primary text-light">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get <span className="text-accent">Connected?</span>
            </h2>
            <p className="text-xl mb-10">
              Contact us today to get affordable high-speed internet at your doorstep.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button href="/contact" variant="accent" size="lg" icon={<FiWifi />}>
                Get Started
              </Button>
              <a 
                href="tel:+254748470551" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-transparent border-2 border-light text-light hover:bg-light hover:text-primary transition-all duration-300 font-medium"
              >
                <FiPhoneCall className="mr-2" />
                +254 748 470 551
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}