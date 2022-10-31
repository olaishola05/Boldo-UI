import React from 'react';
import Blog from '../Blog/Blog';
import FaqSection from '../Faq/FaqSection';
import Hero from '../Hero/Hero';
import Services from '../Services/Services';
import Testimonies from '../Testimonies/Testimonies';

const Home = () => (
  <>
    <Hero />
    <Services />
    <Testimonies />
    <FaqSection />
    <Blog />
  </>
);

export default Home;
