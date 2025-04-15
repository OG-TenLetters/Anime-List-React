import React from "react";
import IntroNavbar from "../features/IntroPage/components/IntroNavbar";
import IntroSearchBox from "../features/IntroPage/components/IntroSearchBox";
import Banner from "../components/Banner";
import IntroInfo from "../features/IntroPage/components/IntroInfo";
import Footer from "../layouts/Footer";

const Intro = () => {
  return (
    <>
      <Banner page={'intro'}/>
      <IntroNavbar />
      <IntroSearchBox />
      <IntroInfo />
      <Footer />

    </>
  );
};

export default Intro;
