import React from 'react';
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import About from "../components/About";
import Dishes from '../components/Dishes';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Dishes />
      <About />
    </Layout>
  )
};

export default Home;