import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages";
import History from "./pages/history";
import Places from "./pages/places";
import Events from "./pages/events";

function App() {
  return (
      <Router>
          <NavBar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/history" element={<History />} />
              <Route
                  path="/places"
                  element={<Places />}
              />
              <Route
                  path="/events"
                  element={<Events />}
              />
          </Routes>
      </Router>
  );
}

export default App;
