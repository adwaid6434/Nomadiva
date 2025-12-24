import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [dark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // FORCE dark mode on page load
    document.documentElement.classList.add("dark");

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setProgress((scrollTop / docHeight) * 100);
      setScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* SCROLL PROGRESS BAR */}
      <div
        className="fixed top-0 left-0 h-1 bg-blue-600 z-[60]"
        style={{ width: `${progress}%` }}
      />

      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled ? "backdrop-blur-lg bg-black/60 shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* LOGO */}
          <Link
            to="/"
            className="text-2xl font-extrabold italic bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent hover:scale-110 hover:brightness-110 transition-all duration-300"
          >
            Nomadiva Journeys
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex space-x-10">
            {["Home", "About", "Services", "Gallery"].map((item) => (
              <li key={item} className="group relative">
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className={`font-semibold ${
                    scrolled ? "text-white" : "text-white"
                  }`}
                >
                  {item}
                </Link>
                <span className="absolute left-0 -bottom-2 h-0.5 w-0 bg-blue-500 group-hover:w-full transition-all"></span>
              </li>
            ))}
          </ul>

          {/* ACTIONS */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/bookingpage">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
                Book Now
              </button>
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl cursor-pointer text-white"
          >
            ☰
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            menuOpen ? "max-h-screen" : "max-h-0"
          } bg-black`}
        >
          <ul className="flex flex-col p-6 space-y-4">
            {["Home", "About", "Services", "Gallery"].map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-white font-semibold"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Link to="/bookingpage" onClick={() => setMenuOpen(false)}>
              <button className="bg-blue-600 text-white py-2 rounded-full">
                Book Now
              </button>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
