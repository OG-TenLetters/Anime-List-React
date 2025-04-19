import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IntroPage from "./pages/Intro";

function App() {
  return (


      <Router>
        <div className="App">
        <Routes>
          <Route path="/" element={<IntroPage/>}>Intro Page</Route>
          <Route path="/home">Home</Route>
          <Route path="/info-page">Home</Route>
        </Routes>
        </div>
      </Router>

  );
}

export default App;
