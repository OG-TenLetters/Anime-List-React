import IntroNavbar from "../features/IntroPage/components/IntroNavbar";
import IntroSearchBox from "../features/IntroPage/components/IntroSearchBox";
import Banner from "../components/Banner";
import IntroInfo from "../features/IntroPage/components/IntroInfo";
import Footer from "../layouts/Footer";
import ContactModal from "../components/ContactModal";
const IntroPage = ({
  toggleTheme,
  showContactModal,
  toggleContactModal,
  setSearchQuery,
  setAnimes,
  renderMovies,
  renderAnimes
}) => {
  return (
    <>
      <Banner page={"intro"} />
      <IntroNavbar
      renderAnimes={renderAnimes}
      setAnimes={setAnimes}
      renderMovies={renderMovies}
        toggleTheme={toggleTheme}
        showContactModal={showContactModal}
        toggleContactModal={toggleContactModal}
      />
      <ContactModal
        showContactModal={showContactModal}
        toggleContactModal={toggleContactModal}
      />
      <IntroSearchBox
        showContactModal={showContactModal}
        setSearchQuery={setSearchQuery}
      />
      <IntroInfo showContactModal={showContactModal} />
      <Footer toggleContactModal={toggleContactModal} />
    </>
  );
};

export default IntroPage;
