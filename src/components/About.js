import React, { useEffect, useState } from "react";

function About() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      className={`relative h-screen text-center py-16 px-4 transition-opacity duration-1000 ${
        loaded ? "opacity-100" : "opacity-0"
      }`}
      style={{
        backgroundImage: `url('/images/aboutus.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-1000 ${
          loaded ? "opacity-50" : "opacity-0"
        }`}
        style={{ zIndex: 0, transitionDelay: "300ms" }}
      ></div>

      {/* Content */}
      <div
        className={`relative z-10 transition-all duration-1000 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{ transitionDelay: "600ms" }}
      >
        <h2 className="text-4xl font-bold text-blue-200">About Us</h2>
        <p className="mt-4 text-lg text-gray-100">
          We provide the best travel services to help you explore the world in
          the most memorable way. With our experienced guides and customized
          travel plans, we ensure you get the most out of your trips.
        </p>
      </div>

      {/* Contact info in bottom right corner */}
      <div className="absolute bottom-4 right-4 text-sm text-gray-200 z-10">
        Contact us: Umesh
      </div>
    </section>
  );
}

export default About;
