import React, { useEffect, useState } from "react";
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
  const [ranks, setRanks] = useState([]);
  const [currentPage, setCurrentPage] = useState([1]);
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
    setIsLoading(true);
    const { data } = await axios.get(`https://api.jikan.moe/v4/top/anime`);
    const ranksData = data.data;
    setRanks(ranksData);
    setIsLoading(false);
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

  useEffect(() => {
    const timer = setTimeout(() => {
      renderAnimes();
    }, fetchInterval);
    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      renderRanks();
    }, fetchInterval);
    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, [setRanks]);

  useEffect(() => {
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
                isLoading={isLoading}
                setAnimes={setAnimes}
                setManga={setManga}
                renderAnimeData={renderAnimeData}
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
                isLoading={isLoading}
                animes={animes}
                ranks={ranks}
                renderMovies={renderMovies}
                renderAnimeData
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
