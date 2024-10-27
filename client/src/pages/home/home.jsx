import React from "react";
import BrandSection from "./brandSection";
import DiscoverSection from "./discoverSection";
import ExperticeSection from "./experticeSection";
import Testimonials from "./testimonials";
import Footer from "./footer";
import FindUs from "./findUs";

function Home() {
  return (
    <>
      <BrandSection></BrandSection>
      <DiscoverSection></DiscoverSection>
      <ExperticeSection></ExperticeSection>
      <Testimonials></Testimonials>
      <FindUs></FindUs>
      <Footer></Footer>
    </>
  );
}

export default Home;
