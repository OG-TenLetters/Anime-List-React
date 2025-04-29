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
  search,
  setCurrentPage,
  setAnimes,
  setManga,
  renderMovies,
  renderManga,
  isLoading,
  renderAnimeData,
  setSearch,
  searchInput
}) => {
  return (
    <>
      <Banner page={"main"} />
      <Navbar
      setSearch={setSearch}
        searchInput={searchInput}
        renderAnimeData={renderAnimeData}
        renderManga={renderManga}
        setAnimes={setAnimes}
        setManga={setManga}
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
      search={search}
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
