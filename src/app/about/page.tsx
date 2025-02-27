import { Metadata } from 'next';
import Image from 'next/image';
import { FiTarget, FiEye, FiUsers, FiAward, FiWifi } from 'react-icons/fi';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Networking Technology, your trusted provider of affordable high-speed internet in the VOK area of Nairobi.',
};

export default function About() {
  // Company values
  const values = [
    {
      icon: <FiUsers className="w-10 h-10 text-accent" />,
      title: 'Customer-Centric',
      description: 'We put our customers first in everything we do, providing responsive support and tailored solutions.',
    },
    {
      icon: <FiAward className="w-10 h-10 text-accent" />,
      title: 'Quality Service',
      description: 'We are committed to delivering reliable, high-quality internet service that meets and exceeds expectations.',
    },
    {
      icon: <FiWifi className="w-10 h-10 text-accent" />,
      title: 'Affordable Connectivity',
      description: 'We believe everyone deserves access to affordable internet without compromising on speed or reliability.',
    },
  ];
  
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-12 bg-primary text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Your trusted provider of affordable high-speed internet in the VOK area.
          </p>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Our <span className="text-accent">Story</span>
              </h2>
              <p className="text-gray-600 mb-4">
                Networking Technology was founded with a simple mission: to provide affordable, 
                reliable internet connectivity to residents and businesses in the VOK area of Nairobi.
              </p>
              <p className="text-gray-600 mb-4">
                We noticed that many residents in our community were struggling with either slow, 
                unreliable internet connections or were paying too much for basic service. We saw 
                an opportunity to leverage our technical expertise to create a solution that would 
                bridge this digital divide.
              </p>
              <p className="text-gray-600 mb-4">
                Starting with just a handful of clients in 2020, we've grown steadily by focusing 
                on what matters most: reliable service, transparent pricing, and exceptional customer 
                support. Today, we're proud to serve hundreds of satisfied customers within our 
                coverage area.
              </p>
              <p className="text-gray-600">
                Our local approach means we understand the unique needs and challenges of our 
                community, allowing us to provide personalized service that larger providers simply 
                can't match.
              </p>
            </div>
            
            <div className="relative">
              <div className="w-full h-[500px] relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/our-story.jpg"
                  alt="Networking Technology Team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                  <FiTarget className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-primary ml-4">Our Mission</h2>
              </div>
              <p className="text-gray-600 mb-4">
                To provide affordable, reliable, and high-speed internet connectivity that 
                empowers our community to thrive in the digital world.
              </p>
              <p className="text-gray-600">
                We aim to bridge the digital divide by making quality internet accessible to 
                everyone within our coverage area, regardless of their technical background or 
                economic status.
              </p>
            </div>
            
            {/* Vision */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                  <FiEye className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-primary ml-4">Our Vision</h2>
              </div>
              <p className="text-gray-600 mb-4">
                To be the most trusted internet service provider in our community, known for 
                exceptional service quality, customer satisfaction, and technological innovation.
              </p>
              <p className="text-gray-600">
                We envision a fully connected community where reliable internet access enables 
                education, business growth, remote work opportunities, and improved quality of 
                life for all residents.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Our <span className="text-accent">Values</span>
            </h2>
            <p className="text-gray-600">
              These core values guide everything we do at Networking Technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl text-center">
                <div className="flex justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-full h-[400px] relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/why-choose-us.jpg"
                  alt="Happy customers using our internet service"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Why <span className="text-accent">Choose Us</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Choosing the right internet service provider is important. Here's why our 
                customers trust Networking Technology:
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center mr-4 mt-1">
                    <span className="font-bold text-primary">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-lg">Local Expertise</h3>
                    <p className="text-gray-600">
                      We know the VOK area intimately and optimize our service specifically 
                      for local conditions.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center mr-4 mt-1">
                    <span className="font-bold text-primary">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-lg">Responsive Support</h3>
                    <p className="text-gray-600">
                      Our support team is just a call away and can often resolve issues remotely 
                      or dispatch technicians quickly.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center mr-4 mt-1">
                    <span className="font-bold text-primary">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-lg">No Hidden Fees</h3>
                    <p className="text-gray-600">
                      Our pricing is transparent with no hidden charges or unexpected price hikes.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center mr-4 mt-1">
                    <span className="font-bold text-primary">4</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-lg">Reliable Connection</h3>
                    <p className="text-gray-600">
                      We continuously monitor and maintain our network to ensure consistent performance.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Join Our <span className="text-accent">Growing Community</span>
            </h2>
            <p className="text-xl mb-8">
              Experience the difference of a local internet service provider that truly cares about your connectivity needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button href="/services" variant="accent" size="lg">
                Explore Our Packages
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}