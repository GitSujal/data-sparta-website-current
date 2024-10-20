import React from 'react';

const UseCase: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Case Study: A Sunglass Store</h3>
          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-2">Challenge:</h4>
            <p>Disconnected data systems, ineffective marketing campaigns, and poor customer targeting.</p>
          </div>
          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-2">Solution:</h4>
            <p>Implemented Data Sparta's unified platform, real-time analytics, and personalized recommendation engine.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Result:</h4>
            <p>Increased sales by 25%, improved customer engagement, and streamlined operations.</p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <blockquote className="text-2xl italic mb-4">
            "Data Sparta transformed how we use data. We've seen remarkable growth since integrating their platform."
          </blockquote>
          <p className="font-semibold">— John Doe, Owner of Sunny Shades</p>
        </div>
      </div>
    </section>
  );
};

export default UseCase;