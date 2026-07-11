import React from 'react';
import Hero from '../components/Hero';
import StatsBand from '../components/StatsBand';
import WorkTeaser from '../components/WorkTeaser';
import AboutTeaser from '../components/AboutTeaser';
import CtaBand from '../components/CtaBand';

const Home = () => {
  return (
    <>
      <Hero />
      <StatsBand />
      <WorkTeaser />
      <AboutTeaser />
      <CtaBand />
    </>
  );
};

export default Home;
