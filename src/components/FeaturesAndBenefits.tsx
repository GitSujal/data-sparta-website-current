import React from 'react';
import { Settings, DollarSign, Sliders, Users } from 'lucide-react';

const FeaturesAndBenefits: React.FC = () => {
  const benefits = [
    { icon: Settings, title: 'Customized Solutions', description: 'Our platform adapts to your unique business needs.' },
    { icon: DollarSign, title: 'Affordable Pricing', description: 'Enterprise-level capabilities without the hefty price tag.' },
    { icon: Sliders, title: 'Flexible Engagement Models', description: 'Choose between fully managed or self-managed options.' },
    { icon: Users, title: 'Expert Support', description: 'Our team guides you every step of the way.' },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Data Sparta?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start">
              <benefit.icon className="h-12 w-12 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 bg-blue-600 text-white p-8 rounded-lg text-center">
          <p className="text-xl font-semibold">Empower your team without building an in-house data department.</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesAndBenefits;