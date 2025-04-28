import Banner from "../components/Banner";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import ContactModal from "../components/ContactModal";
import InfoMain from "../features/InfoPage/components/InfoMain";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const InfoPage = ({
  toggleTheme,
  showContactModal,
  toggleContactModal,
  ranks,
  animes,
}) => {

  const [anime, setAnime] = useState({});
  const { id } = useParams()
  const animeId = id
  const rankId = id
  const fetchInterval = 1000; // 1 second between requests


async function renderAnime() {
  const { data } = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
  const animeData = data.data;
  console.log("Anime ID: ", animeId);
console.log("Rank ID: ", rankId);

  setAnime(animeData);
}
console.log(id)
  useEffect(() => {
    const timer = setTimeout(() => {
      renderAnime();
    }, fetchInterval);
    return () => clearTimeout(timer);
  }, [id]);

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
      <InfoMain animeId={id} rankId={id} anime={anime} animes={animes} ranks={ranks} />
      <Footer toggleContactModal={toggleContactModal} />
    </>
  );
};

export default InfoPage;
