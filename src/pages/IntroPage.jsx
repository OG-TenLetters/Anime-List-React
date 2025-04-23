import React, { useState } from "react";
import IntroNavbar from "../features/IntroPage/components/IntroNavbar";
import IntroSearchBox from "../features/IntroPage/components/IntroSearchBox";
import Banner from "../components/Banner";
import IntroInfo from "../features/IntroPage/components/IntroInfo";
import Footer from "../layouts/Footer";
import ContactModal from "../components/ContactModal";
const IntroPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    if (isDark) {
      document.body.classList.remove("dark-theme");
      setIsDark(false);
    } else {
      document.body.classList.add("dark-theme");
      setIsDark(true);
    }
  };
  return (
    <>
      <Banner page={"intro"} />
      <IntroNavbar
        toggleTheme={() => toggleTheme()}
        setShowModal={() => setShowModal(!showModal)}
        showModal={showModal}
      />
      <ContactModal setShowModal={setShowModal} showModal={showModal} />
      <IntroSearchBox showModal={showModal} />
      <IntroInfo showModal={showModal} />
      <Footer
        showModal={showModal}
        setShowModal={() => setShowModal(!showModal)}
      />
    </>
  );
};

export default IntroPage;
