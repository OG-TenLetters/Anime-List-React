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
  renderManga,
  renderMovies,
  setAnimes,
  renderAnimeData,
}) => {
  const [anime, setAnime] = useState({});
  const [animeRec, setAnimeRec] = useState([]);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState([])
  const fetchInterval = 2000; // 1 second between requests

  const renderAnime = useCallback(async () => {
    const { data } = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
    const animeData = data.data;
    setAnime(animeData);
  }, [id] )
  async function renderAnimeRec() {
    const { data } = await axios.get(
      `https://api.jikan.moe/v4/recommendations/anime`
    );
    const animeRecData = data.data;
    console.log(animeRecData)
    setAnimeRec(animeRecData);
  }
  useEffect(() => {
    // console.log("renderAnime - Before Fetch: isLoading =", isLoading);
    setIsLoading(true)
      renderAnime();
    setIsLoading(false)
  }, [id, renderAnime]);

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      renderAnimeRec();
    }, fetchInterval);
    setIsLoading(false)
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
