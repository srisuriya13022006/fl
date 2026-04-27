// src/pages/Home.jsx

import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import HeroSection from "../components/home/HeroSection";
import AboutPreview from "../components/home/AboutPreview";
import ServicesHighlight from "../components/home/ServicesHighlight";
import WhyChooseUs from "../components/home/WhyChooseUs";
import CTASection from "../components/home/CTASection";

const Home = () => {
  return (
    <>
      {/* Layout Components */}
      <Navbar />

      {/* Home Page Sections */}
      <HeroSection />
      <AboutPreview />
      <ServicesHighlight />
      <WhyChooseUs />
      <CTASection />

      <Footer />
    </>
  );
};

export default Home;