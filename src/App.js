import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IntroPage from "./pages/IntroPage";
import HomePage from "./pages/HomePage";
import InfoPage from "./pages/InfoPage";
import axios from "axios";

function App() {
  const [showContactModal, setShowContactModal] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [animes, setAnimes] = useState([]);
  const [setManga] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isRanksLoading, setIsRanksLoading] = useState(false);
  const [ranks, setRanks] = useState([]);
  const [currentPage, setCurrentPage] = useState([1]);
  const [searchQuery, setSearchQuery] = useState("");
  const isFirstRender = useRef(true);
  const fetchInterval = 400; // 1 second between requests
  const toggleTheme = () => {
    if (isDark) {
      document.body.classList.remove("dark-theme");
      setIsDark(false);
    } else {
      document.body.classList.add("dark-theme");
      setIsDark(true);
    }
  };
  const toggleContactModal = () => {
    if (showContactModal) {
      document.body.classList.remove("noscroll");
      setShowContactModal(false);
    } else {
      document.body.classList.add("noscroll");
      setShowContactModal(true);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  async function renderAnimes() {
    setIsLoading(true);
    const { data } = await axios.get(
      `https://api.jikan.moe/v4/anime?page=${currentPage}&sfw`
    );
    const animesData = data.data;
    setAnimes(animesData);
    setIsLoading(false);
  }

  async function renderAnimeData() {
    setIsLoading(true);
    const { data } = await axios.get(
      `https://api.jikan.moe/v4/anime?page=${currentPage}&sfw`
    );
    const animesData = data.data;
    setAnimes(animesData);
    setIsLoading(false);
    return animesData;
  }

  async function renderRanks() {
    setIsRanksLoading(true);
    const { data } = await axios.get(`https://api.jikan.moe/v4/top/anime`);
    const ranksData = data.data;
    setRanks(ranksData);
    setIsRanksLoading(false);
  }

  async function renderMovies() {
    setIsLoading(true);
    const { data } = await axios.get(
      "https://api.jikan.moe/v4/anime?type=movie"
    );
    const moviesData = data.data;
    setAnimes(moviesData);
    setIsLoading(false);
    return moviesData;
  }

  const handleSearch = async () => {
    setIsLoading(true);
    const { data } = await axios.get(
      `https://api.jikan.moe/v4/anime?q=${searchQuery}&sfw`
    );
    const searchData = data.data;
    setAnimes(searchData);
    setIsLoading(false);
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    }
    const timer = setTimeout(() => {
      handleSearch();
    }, fetchInterval);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  useEffect(() => {
    const timer = setTimeout(() => {
      renderRanks();
    }, fetchInterval);
    return () => clearTimeout(timer);
  }, [setRanks]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    }
    const timer = setTimeout(() => {
      renderAnimes();
    }, fetchInterval);
    return () => clearTimeout(timer);
  }, [currentPage]);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <IntroPage
                setAnimes={setAnimes}
                renderMovies={renderMovies}
                setSearchQuery={setSearchQuery}
                showContactModal={showContactModal}
                toggleTheme={toggleTheme}
                toggleContactModal={toggleContactModal}
              />
            }
          ></Route>
          <Route
            path="/home"
            element={
              <HomePage
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                isLoading={isLoading}
                setAnimes={setAnimes}
                setManga={setManga}
                renderAnimeData={renderAnimeData}
                isRanksLoading={isRanksLoading}
                renderMovies={renderMovies}
                animes={animes}
                ranks={ranks}
                setCurrentPage={setCurrentPage}
                setShowContactModal={setShowContactModal}
                showContactModal={showContactModal}
                toggleTheme={toggleTheme}
                toggleContactModal={toggleContactModal}
              />
            }
          ></Route>
          <Route
            path="/home/info/:id"
            element={
              <InfoPage
                renderAnimes={renderAnimes}
                setSearchQuery={setSearchQuery}
                isRanksLoading={isRanksLoading}
                animes={animes}
                ranks={ranks}
                renderMovies={renderMovies}
                setAnimes={setAnimes}
                setShowContactModal={setShowContactModal}
                showContactModal={showContactModal}
                toggleTheme={toggleTheme}
                toggleContactModal={toggleContactModal}
              />
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
