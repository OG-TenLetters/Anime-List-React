import React, { useState } from "react";
import IntroNavbar from "../features/IntroPage/components/IntroNavbar";
import IntroSearchBox from "../features/IntroPage/components/IntroSearchBox";
import Banner from "../components/Banner";
import IntroInfo from "../features/IntroPage/components/IntroInfo";
import Footer from "../layouts/Footer";
import ContactModal from "../components/ContactModal";

const IntroPage = () => {
   const [showModal, setShowModal] = useState(false)
   


  return (
    <>
        <Banner page={'intro'}/>
        <IntroNavbar setShowModal={() => setShowModal(!showModal)} />
        {showModal && <ContactModal setShowModal={setShowModal} />}
        <IntroSearchBox />
        <IntroInfo />
        <Footer setShowModal={() => setShowModal(!showModal)}/>

    </>
  );
};

export default IntroPage;
