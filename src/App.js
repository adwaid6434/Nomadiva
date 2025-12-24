import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { Navigate } from "react-router-dom";
import BookingPage from "./components/BookingPage";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      {/* Page Content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/bookingpage" element={<BookingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
