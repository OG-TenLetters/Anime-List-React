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
  movies,
  setAnimes,
  renderMovies,
  setMovies
}) => {
  return (
    <>
      <Banner page={"main"} />
      <Navbar
        setAnimes={setAnimes}
        renderMovies={renderMovies}
        movies={movies}
        setMovies={setMovies}
        toggleContactModal={toggleContactModal}
        showContactModal={showContactModal}
        toggleTheme={toggleTheme}
      />
      <ContactModal
        toggleContactModal={toggleContactModal}
        showContactModal={showContactModal}
      />
      <Main
        showContactModal={showContactModal}
        animes={animes}
        ranks={ranks}
        movies={movies}
        setCurrentPage={setCurrentPage}
      />
      <Footer toggleContactModal={toggleContactModal} />
    </>
  );
};

export default HomePage;
