import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IntroPage from "./pages/IntroPage";
import HomePage from "./pages/HomePage";

function App() {
  const [showContactModal, setShowContactModal] = useState(false);
  const [isDark, setIsDark] = useState(false);
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
                setShowContactModal={setShowContactModal}
                showContactModal={showContactModal}
                toggleTheme={toggleTheme}
                toggleContactModal={toggleContactModal}

              />
            }
          ></Route>
          <Route path="/info-page">Home</Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
