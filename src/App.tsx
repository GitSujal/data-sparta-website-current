import React from 'react';
import Header from './components/Header';
import ProblemStatement from './components/ProblemStatement';
import OurSolution from './components/OurSolution';
import FeaturesAndBenefits from './components/FeaturesAndBenefits';
import UseCase from './components/UseCase';
import CompetitiveAdvantage from './components/CompetitiveAdvantage';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <ProblemStatement />
        <OurSolution />
        <FeaturesAndBenefits />
        <UseCase />
        <CompetitiveAdvantage />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;