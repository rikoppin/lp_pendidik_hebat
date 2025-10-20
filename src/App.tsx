import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyDifferent from './components/WhyDifferent';
import Speaker from './components/Speaker';
import Approach from './components/Approach';
import Schedule from './components/Schedule';
import Pricing from './components/Pricing';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import TargetAudience from './components/TargetAudience';
import Registration from './components/Registration';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <WhyDifferent />
      <Approach />
      <Speaker />
      <Schedule />
      <Pricing />
      <Benefits />
      <Testimonials />
      <TargetAudience />
      <Registration />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
