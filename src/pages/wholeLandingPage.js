import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/navbar";
import LandingPage from "./landingpage";
import MadeBy from "./madeby";
import OurMission from "./ourmission";
import WhyUs from "./whyus";
const WholeLandingPage = () => {
  return (
    <>
      <NavBar />
      <LandingPage />
      <OurMission />
      <WhyUs />
      <MadeBy />
      <Footer />
    </>
  );
};
export default WholeLandingPage;
