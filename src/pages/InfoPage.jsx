import Banner from "../components/Banner";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import Main from "../features/HomePage/components/HomeMain";
import ContactModal from "../components/ContactModal";
import InfoMain from "../features/InfoPage/components/InfoMain";
import { useParams } from "react-router-dom";

const InfoPage = ({
  toggleTheme,
  showContactModal,
  toggleContactModal,
  ranks,
  animes,
}) => {


  
  return (
    <>
      <Banner page={"main"} />
      <Navbar
        toggleContactModal={toggleContactModal}
        showContactModal={showContactModal}
        toggleTheme={toggleTheme}
      />
      <ContactModal
        toggleContactModal={toggleContactModal}
        showContactModal={showContactModal}
      />
      <InfoMain animes={animes}
       ranks={ranks}
        />
      <Footer toggleContactModal={toggleContactModal} />
    </>
  );
};

export default InfoPage;
