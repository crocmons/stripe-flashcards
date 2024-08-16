"use client"
import { sendGAEvent } from '@next/third-parties/google';
import React from 'react';
import { FaRegCheckCircle } from "react-icons/fa";

const FeatureItem = ({ feature, isAvailable }) => (
  <p className={`py-2 flex ${!isAvailable ? 'opacity-40' : ''}`}>
    <span className="mr-2 ml-1">
      <FaRegCheckCircle />
    </span>
    {feature}
  </p>
);

const PricingCard = ({ title, price, description, features, isHighlighted }) => (
  <div className={`w-full md:w-1/3 rounded-lg shadow hover:shadow-xl transition duration-100 ease-in-out p-6 mb-10 md:mb-0 text-start py-5 ${isHighlighted ? 'bg-slate-700 text-white' : 'bg-white text-black'}`}>
    <h3 className={`${isHighlighted ? 'text-white' : 'text-black'} text-xl`}>{title}</h3>
    <p className={`text-sm mt-2 py-2 ${isHighlighted ? 'opacity-75' : ''}`}>{description}</p>
    <p className={`mt-1 py-2`}><span className="font-bold text-5xl">{price}</span> /Month</p>
    <button onClick={()=>sendGAEvent('event')} className={`w-full border rounded-md hover:bg-black hover:text-white hover:shadow-xl transition duration-150 ease-in-out py-4 mt-4 ${isHighlighted ? 'bg-white text-black border-white text-lg' : 'text-gray-900 border-slate-600 text-lg'}`}>Get Started Now</button>
    <div className={`text-base font-medium cursor-pointer mt-4`}>
      {features.map((feature, index) => (
        <FeatureItem key={index} feature={feature.name} isAvailable={feature.isAvailable} />
      ))}
    </div>
  </div>
);

const Pricing = () => {
  const pricingPlans = [
    {
      title: 'Freebie',
      price: '$0',
      description: 'Ideal for individuals who need quick access to basic features.',
      features: [
        { name: '20,000+ of PNG & SVG graphics', isAvailable: true },
        { name: 'Access to 100 million stock images', isAvailable: true },
        { name: 'Upload custom icons and fonts', isAvailable: false },
        { name: 'Upload graphics & video in up to 4k', isAvailable: false },
        { name: 'Unlimited Projects', isAvailable: false },
        { name: 'Instant Access to our design system', isAvailable: false },
        { name: 'Create teams to collaborate on designs', isAvailable: false },
      ],
      isHighlighted: false,
    },
    {
      title: 'Professional',
      price: '$25',
      description: 'Ideal for individuals who need advanced features and tools for client work.',
      features: [
        { name: '20,000+ of PNG & SVG graphics', isAvailable: true },
        { name: 'Access to 100 million stock images', isAvailable: true },
        { name: 'Upload custom icons and fonts', isAvailable: true },
        { name: 'Upload graphics & video in up to 4k', isAvailable: true },
        { name: 'Unlimited Projects', isAvailable: false },
        { name: 'Instant Access to our design system', isAvailable: false },
        { name: 'Create teams to collaborate on designs', isAvailable: false },
      ],
      isHighlighted: true,
    },
    {
      title: 'Enterprise',
      price: '$100',
      description: 'Ideal for businesses who need personalized services and security for large teams.',
      features: [
        { name: '20,000+ of PNG & SVG graphics', isAvailable: true },
        { name: 'Access to 100 million stock images', isAvailable: true },
        { name: 'Upload custom icons and fonts', isAvailable: true },
        { name: 'Upload graphics & video in up to 4k', isAvailable: true },
        { name: 'Unlimited Projects', isAvailable: true },
        { name: 'Instant Access to our design system', isAvailable: true },
        { name: 'Create teams to collaborate on designs', isAvailable: true },
      ],
      isHighlighted: false,
    },
  ];

  return (
    <div className='flex flex-col mx-auto justify-center text-center items-center my-2 py-2 md:my-20 md:py-8'>
      <h1 className='font-bold text-2xl md:text-4xl text-black py-2'>
        Pricing made for collaborative support.
      </h1>
      <p className='text-base text-gray-700 py-2'>Plain is made for your entire company. Only pay for users that actually message customers. Everyone else is free, forever.</p>
      <div className="flex flex-col md:flex-row px-2 md:px-0 py-2">
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </div>
  );
}

export default Pricing;
