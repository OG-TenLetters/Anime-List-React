import React from "react";
import IntroNavbar from "../features/IntroPage/components/IntroNavbar";
import IntroSearchBox from "../features/IntroPage/components/IntroSearchBox";
import Banner from "../components/Banner";
import IntroInfo from "../features/IntroPage/components/IntroInfo";

const Intro = () => {
  return (
    <div>
      <Banner page={'intro'}/>
      <IntroNavbar />
      <IntroSearchBox />
      <IntroInfo />
    </div>
  );
};

export default Intro;
