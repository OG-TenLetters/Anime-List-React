import Banner from "../components/Banner";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import Main from "../features/HomePage/HomeMain";
import { useState } from "react";
import ContactModal from "../components/ContactModal";

const HomePage = () => {
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
      <Banner page={"main"} />
      <Navbar
        toggleTheme={toggleTheme}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <ContactModal setShowModal={setShowModal}
        showModal={showModal}
       />
      <Main showModal={showModal} />
      <Footer
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  );
};

export default HomePage;
