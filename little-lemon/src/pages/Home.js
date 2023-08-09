import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import Dishes from '../components/Dishes';
import Reviews from '../components/Reviews';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Dishes />
      <Reviews />
      <About />
    </Layout>
  )
};

export default Home;