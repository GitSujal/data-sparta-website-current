import React from 'react';
import { Layers, Wrench, Users, Clock } from 'lucide-react';

const ProblemStatement: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Is Your Business Missing Out on the Power of Data?</h2>
        <p className="text-center mb-12">In today's competitive market, data-driven insights are crucial for success. Yet, many SMBs struggle with:</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Layers, title: 'Fragmented Systems', description: 'Disconnected data sources hinder timely decision-making.' },
            { icon: Wrench, title: 'Generic Tools', description: 'One-size-fits-all analytics fail to meet unique business needs.' },
            { icon: Users, title: 'Lack of Expertise', description: 'Building an in-house data team is costly and distracting.' },
            { icon: Clock, title: 'Missed Opportunities', description: 'Delayed analytics lead to inefficiencies and lost revenue.' },
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <item.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;