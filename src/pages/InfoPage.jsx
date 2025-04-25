import Banner from "../components/Banner";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import Main from "../features/HomePage/components/HomeMain";
import ContactModal from "../components/ContactModal";
import InfoMain from "../features/InfoPage/components/InfoMain";

const InfoPage = ({
  toggleTheme,
  showContactModal,
  toggleContactModal,
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
      <InfoMain />
      <Footer toggleContactModal={toggleContactModal} />
    </>
  );
};

export default InfoPage;
