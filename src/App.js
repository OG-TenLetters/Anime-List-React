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
  const [ranks, setRanks] = useState([]);
  const [currentPage, setCurrentPage] = useState([1]);
  const fetchInterval = 1000; // 1 second between requests
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
    const { data } = await axios.get(`https://api.jikan.moe/v4/anime?page=${currentPage}`);
    const animesData = data.data;
    setAnimes(animesData);
    console.log(animesData)
  }
  async function renderRanks() {
    const { data } = await axios.get(`https://api.jikan.moe/v4/top/anime`);
    const ranksData = data.data;
    setRanks(ranksData);
    console.log(ranksData)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      renderAnimes();
  }, fetchInterval);
  return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      renderAnimes();
  }, fetchInterval);
  return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, [currentPage]);

  useEffect(() => {
    const timer = setTimeout(() => {
      renderRanks();
  }, fetchInterval);

  return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);




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
          >
            Intro Page
          </Route>
          <Route
            path="/home"
            element={
              <HomePage
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
              animes={animes}
              ranks={ranks}

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
