'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import Button from '../ui/Button';
import { FiSend, FiCheck, FiAlertTriangle } from 'react-icons/fi';

// Define form values type
interface FormValues {
  name: string;
  email: string;
  phone: string;
  location: string;
  package: string;
  message: string;
}

const ContactForm: React.FC = () => {
  // Form status states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  
  // React Hook Form
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    reset 
  } = useForm<FormValues>();
  
  // Handle form submission
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Replace these with your actual EmailJS credentials
      await emailjs.send(
        'YOUR_SERVICE_ID', // E.g. 'service_1234567'
        'YOUR_TEMPLATE_ID', // E.g. 'template_1234567'
        data as unknown as Record<string, unknown>,
        'YOUR_USER_ID' // E.g. 'user_1234567'
      );
      
      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitError('Failed to send your message. Please try again or contact us directly by phone.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Package options
  const packageOptions = [
    { value: '', label: 'Select a Package' },
    { value: '7mbps', label: '7 Mbps - KSH 1,500' },
    { value: '15mbps', label: '15 Mbps - KSH 2,500' },
    { value: '30mbps', label: '30 Mbps - KSH 3,500' },
    { value: 'other', label: 'Other / Not Sure' },
  ];
  
  // If the form has been successfully submitted
  if (isSubmitted) {
    return (
      <div className="bg-green-50 rounded-lg p-8 text-center">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <FiCheck className="text-green-500" size={32} />
          </div>
        </div>
        <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent!</h3>
        <p className="text-green-700 mb-6">
          Thank you for contacting us. We will get back to you shortly.
        </p>
        <Button 
          onClick={() => setIsSubmitted(false)}
          variant="primary"
        >
          Send Another Message
        </Button>
      </div>
    );
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Show error if submission failed */}
      {submitError && (
        <div className="bg-red-50 text-red-700 p-4 rounded-lg flex items-center">
          <FiAlertTriangle className="mr-2 flex-shrink-0" />
          <p>{submitError}</p>
        </div>
      )}
      
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          className={`input ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
          placeholder="John Doe"
          {...register('name', { required: 'Name is required' })}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>
      
      {/* Email and Phone in a grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            className={`input ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
            placeholder="john@example.com"
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              }
            })}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>
        
        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            className={`input ${errors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
            placeholder="+254 7XX XXX XXX"
            {...register('phone', { 
              required: 'Phone number is required',
            })}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>
      </div>
      
      {/* Location */}
      <div>
        <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
          Your Location
        </label>
        <input
          id="location"
          type="text"
          className={`input ${errors.location ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
          placeholder="VOK, Apartment name, Street, etc."
          {...register('location', { required: 'Location is required' })}
        />
        {errors.location && (
          <p className="mt-1 text-sm text-red-600">{errors.location.message}</p>
        )}
      </div>
      
      {/* Package Selection */}
      <div>
        <label htmlFor="package" className="block text-sm font-medium text-gray-700 mb-1">
          Interested Package
        </label>
        <select
          id="package"
          className={`input ${errors.package ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
          {...register('package', { required: 'Please select a package' })}
        >
          {packageOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.package && (
          <p className="mt-1 text-sm text-red-600">{errors.package.message}</p>
        )}
      </div>
      
      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message (Optional)
        </label>
        <textarea
          id="message"
          rows={5}
          className="input"
          placeholder="Any additional information or questions..."
          {...register('message')}
        />
      </div>
      
      {/* Submit Button */}
      <div>
        <Button
          type="submit"
          variant="accent"
          fullWidth
          disabled={isSubmitting}
          icon={<FiSend />}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;