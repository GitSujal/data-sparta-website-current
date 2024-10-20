import React from 'react';
import { Database, Zap, BarChart, HeadphonesIcon } from 'lucide-react';

const OurSolution: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Analytics as a Service Tailored for SMBs</h2>
        <p className="text-center mb-12">At Data Sparta, we bridge the data gap by providing an affordable, flexible, and scalable analytics platform designed specifically for small and medium businesses.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Database, title: 'Data Integration', description: 'Unify all your data sources effortlessly.' },
            { icon: Zap, title: 'Process Automation', description: 'Save time and reduce errors with automated workflows.' },
            { icon: BarChart, title: 'Real-Time Insights', description: 'Make informed decisions with up-to-date analytics.' },
            { icon: HeadphonesIcon, title: 'Ongoing Support', description: 'Receive continuous assistance and training as your business grows.' },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <item.icon className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSolution;