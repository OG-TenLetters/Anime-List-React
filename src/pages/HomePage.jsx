import Banner from "../components/Banner";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import Main from "../features/HomePage/components/HomeMain";
import ContactModal from "../components/ContactModal";

const HomePage = ({
  toggleTheme,
  showContactModal,
  toggleContactModal,
  animes,
  ranks,
  setCurrentPage,
  setAnimes,
  renderMovies,
  isLoading,
  renderAnimeData,
  setSearchQuery,
  
}) => {
  console.log(animes)

  return (
    <>
      <Banner page={"main"} />
      <Navbar
        setSearchQuery={setSearchQuery}
        renderAnimeData={renderAnimeData}
        setAnimes={setAnimes}
        renderMovies={renderMovies}
        toggleContactModal={toggleContactModal}
        showContactModal={showContactModal}
        toggleTheme={toggleTheme}
      />
      <ContactModal
        toggleContactModal={toggleContactModal}
        showContactModal={showContactModal}
      />
      <Main
        isLoading={isLoading}
        showContactModal={showContactModal}
        animes={animes}
        ranks={ranks}
        setCurrentPage={setCurrentPage}
      />
      <Footer toggleContactModal={toggleContactModal} />
    </>
  );
};

export default HomePage;
