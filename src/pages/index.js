import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import SideBarMobileView from '../components/SideBarMobileView';
import HeroSection from '../components/HeroSection';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu view at the mobile break point.
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SideBarMobileView isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
    </>
  );
};

export default Home;
