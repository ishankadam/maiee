/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import BrandSection from "./brandSection";
import DiscoverSection from "./discoverSection";
import ExperticeSection from "./experticeSection";
import Testimonials from "./testimonials";
import Footer from "./footer";
import FindUs from "./findUs";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import { getAllCategories } from "../../api";

const Home = () => {
  const location = useLocation();
  const [isFirstRender, setIsFirstRender] = useState(true);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllCategories({ setCategories: setCategories });
  }, []);

  useEffect(() => {
    // Only scroll if there's a scrollTo state and it's not the first render
    if (!isFirstRender && location.state?.scrollTo) {
      scroller.scrollTo(location.state.scrollTo, {
        smooth: true,
        duration: 500,
      });
    }
    // Set isFirstRender to false after the first render
    setIsFirstRender(false);
  }, [location.state]);

  return (
    <>
      <div id="aboutSection">
        <BrandSection />
      </div>
      <div id="discoverSection">
        <DiscoverSection />
      </div>
      <div id="experticeSection">
        <ExperticeSection
          categories={categories}
          setCategories={setCategories}
        />
      </div>
      <div id="testimonialsSection">
        <Testimonials />
      </div>
      <div id="contactSection">
        <FindUs />
      </div>
      <Footer categories={categories} />
    </>
  );
};

export default Home;
