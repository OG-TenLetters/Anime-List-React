import Banner from "../components/Banner";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import ContactModal from "../components/ContactModal";
import InfoMain from "../features/InfoPage/components/InfoMain";
import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";

const InfoPage = ({
  toggleTheme,
  showContactModal,
  toggleContactModal,
  ranks,
  animes,
  isRanksLoading,
  renderManga,
  renderMovies,
  setAnimes,
  renderAnimeData,
  setSearchQuery,
}) => {
  const [anime, setAnime] = useState({});
  const [animeRec, setAnimeRec] = useState([]);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const fetchInterval = 2000;

  const renderAnime = useCallback(async () => {
    setIsLoading(true);
    const { data } = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
    const animeData = data.data;
    setAnime(animeData);
    setIsLoading(false);
  }, [id]);
  async function renderAnimeRec() {
    setIsLoading(true);
    const { data } = await axios.get(
      `https://api.jikan.moe/v4/recommendations/anime`
    );
    const animeRecData = data.data;
    setAnimeRec(animeRecData);
    setIsLoading(false);
  }
  useEffect(() => {
    renderAnime();
  }, [id, renderAnime]);

  useEffect(() => {
    const timer = setTimeout(() => {
      renderAnimeRec();
    }, fetchInterval);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Banner page={"main"} />
      <Navbar
        renderAnimeData={renderAnimeData}
        renderManga={renderManga}
        renderMovies={renderMovies}
        setAnimes={setAnimes}
        setSearchQuery={setSearchQuery}
        toggleContactModal={toggleContactModal}
        showContactModal={showContactModal}
        toggleTheme={toggleTheme}
      />
      <ContactModal
        toggleContactModal={toggleContactModal}
        showContactModal={showContactModal}
      />
      <InfoMain
        isLoading={isLoading}
        isRanksLoading={isRanksLoading}
        showContactModal={showContactModal}
        animeRec={animeRec}
        id={id}
        anime={anime}
        animes={animes}
        ranks={ranks}
      />
      <Footer toggleContactModal={toggleContactModal} />
    </>
  );
};

export default InfoPage;
