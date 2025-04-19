import React from "react";
import IntroNavbar from "../features/IntroPage/components/IntroNavbar";
import IntroSearchBox from "../features/IntroPage/components/IntroSearchBox";
import Banner from "../components/Banner";
import IntroInfo from "../features/IntroPage/components/IntroInfo";
import Footer from "../layouts/Footer";
import ContactModal from "../components/ContactModal";

const IntroPage = () => {
  return (
    <>
    
      <Banner page={'intro'}/>
      <IntroNavbar />
      <ContactModal />
      <IntroSearchBox />
      <IntroInfo />
      <Footer />

    </>
  );
};

export default IntroPage;
