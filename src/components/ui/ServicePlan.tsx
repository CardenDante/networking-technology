'use client';

import React from 'react';
import { FiCheck } from 'react-icons/fi';
import Button from './Button';

interface ServicePlanProps {
  speed: number;
  price: number;
  features: string[];
  popular?: boolean;
  id: string;
}

const ServicePlan: React.FC<ServicePlanProps> = ({
  speed,
  price,
  features,
  popular = false,
  id,
}) => {
  return (
    <div 
      id={id}
      className={`
        relative rounded-2xl overflow-hidden transition-all duration-300
        ${popular 
          ? 'bg-white border-2 border-accent shadow-xl transform hover:-translate-y-2' 
          : 'bg-white border border-gray-200 shadow-md transform hover:-translate-y-1'
        }
      `}
    >
      {popular && (
        <div className="absolute top-0 right-0">
          <div className="bg-accent text-primary font-bold py-1 px-4 rounded-bl-lg text-sm">
            Most Popular
          </div>
        </div>
      )}
      
      <div className="p-6 md:p-8">
        {/* Speed */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-circle mb-4 bg-primary text-white">
            <div>
              <span className="block text-3xl font-bold">{speed}</span>
              <span className="text-sm font-medium">Mbps</span>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-primary">{speed} Mbps Package</h3>
        </div>
        
        {/* Price */}
        <div className="text-center mb-8">
          <p className="text-gray-500 mb-2">Monthly</p>
          <div className="flex items-center justify-center">
            <span className="text-4xl font-bold text-primary">KSH {price.toLocaleString()}</span>
          </div>
        </div>
        
        {/* Features */}
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <FiCheck className="text-accent mt-1 mr-2" size={18} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        {/* Button */}
        <div className="text-center">
          <Button 
            href="/contact" 
            variant={popular ? 'accent' : 'primary'} 
            fullWidth
          >
            Subscribe Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServicePlan;