import React from 'react';
import { Check, X } from 'lucide-react';

const CompetitiveAdvantage: React.FC = () => {
  const features = [
    { name: 'Customized Solutions', dataSpartaHas: true, competitorAHas: false, competitorBHas: false },
    { name: 'Affordable Pricing', dataSpartaHas: true, competitorAHas: false, competitorBHas: false },
    { name: 'Ongoing Support', dataSpartaHas: true, competitorAHas: 'Limited', competitorBHas: false },
    { name: 'Real-Time Insights', dataSpartaHas: true, competitorAHas: true, competitorBHas: false },
    { name: 'Flexible Engagement', dataSpartaHas: true, competitorAHas: false, competitorBHas: 'Limited' },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Standing Out from the Competition</h2>
        <p className="text-center mb-12">While other providers offer generic tools, Data Sparta delivers customized analytics solutions designed for the unique challenges of SMBs.</p>
        <div className="overflow-x-auto">
          <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Feature</th>
                <th className="py-3 px-4 text-center">Data Sparta</th>
                <th className="py-3 px-4 text-center">Competitor A</th>
                <th className="py-3 px-4 text-center">Competitor B</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="py-3 px-4 font-semibold">{feature.name}</td>
                  <td className="py-3 px-4 text-center">
                    {feature.dataSpartaHas === true && <Check className="inline-block text-green-500" />}
                    {feature.dataSpartaHas === false && <X className="inline-block text-red-500" />}
                    {typeof feature.dataSpartaHas === 'string' && feature.dataSpartaHas}
                  </td>
                  <td className="py-3 px-4 text-center">
                    {feature.competitorAHas === true && <Check className="inline-block text-green-500" />}
                    {feature.competitorAHas === false && <X className="inline-block text-red-500" />}
                    {typeof feature.competitorAHas === 'string' && feature.competitorAHas}
                  </td>
                  <td className="py-3 px-4 text-center">
                    {feature.competitorBHas === true && <Check className="inline-block text-green-500" />}
                    {feature.competitorBHas === false && <X className="inline-block text-red-500" />}
                    {typeof feature.competitorBHas === 'string' && feature.competitorBHas}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveAdvantage;