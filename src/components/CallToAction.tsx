import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Unlock Your Data Potential?</h2>
        <p className="text-xl mb-8">Join the many businesses transforming with Data Sparta.</p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition duration-300">
            Schedule a Free Consultation
          </button>
          <button className="bg-transparent hover:bg-blue-700 text-white font-bold py-3 px-6 border border-white rounded-full transition duration-300">
            Learn More About Our Solutions
          </button>
        </div>
        <div className="mt-12 max-w-md mx-auto">
          <form className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow py-2 px-4 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full transition duration-300"
            >
              Get Started
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;