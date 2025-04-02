import React from 'react';
import { ShoppingBag, Package, Truck, Shield, Star, Heart, Clock, CreditCard } from 'lucide-react';

const features = [
  {
    name: 'Wide Selection',
    description: 'Browse through our extensive collection of premium products.',
    icon: ShoppingBag,
  },
  {
    name: 'Quality Products',
    description: 'We ensure all our products meet the highest quality standards.',
    icon: Package,
  },
  {
    name: 'Fast Delivery',
    description: 'Quick and reliable shipping to your doorstep.',
    icon: Truck,
  },
  {
    name: 'Secure Shopping',
    description: 'Your security is our top priority with encrypted transactions.',
    icon: Shield,
  },
  {
    name: 'Premium Quality',
    description: 'Only the finest products make it to our shelves.',
    icon: Star,
  },
  {
    name: 'Customer Love',
    description: 'Join thousands of satisfied customers who trust us.',
    icon: Heart,
  },
  {
    name: '24/7 Support',
    description: 'Our customer service team is always here to help.',
    icon: Clock,
  },
  {
    name: 'Easy Payment',
    description: 'Multiple payment options for your convenience.',
    icon: CreditCard,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose Us
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We provide the best shopping experience with our premium products and excellent service.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative group">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white transform transition-transform duration-300 group-hover:scale-110">
                  <feature.icon className="h-6 w-6" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection; 