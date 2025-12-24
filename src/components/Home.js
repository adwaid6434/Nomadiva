import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full">
        {/* HERO SECTION */}
        <section
          className="h-screen bg-cover bg-center relative"
          style={{
            backgroundImage:
              // "url(https://image-worker.mindtrip.ai/image-resize/format=webp,w=1200/https:/images.mindtrip.ai/attractions/4df4/0e27/90d2/c8ef/8f32/9761/2570/f97e)",
              `url('/images/hero.webp')`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
            {/* <div className="relative z-10 h-full flex justify-center items-center"> */}

            {/* Scaling 80% */}
            <div className="origin-center scale-[0.80] transition-transform duration-300 text-center px-6 flex flex-col items-center">
              <h1 className="text-white text-5xl md:text-6xl font-extrabold mb-6 ">
                Discover the World With Us
              </h1>
              <p className="text-gray-200 max-w-2xl text-lg mb-8">
                Explore breathtaking destinations, unforgettable experiences,
                and personalized travel packages crafted just for you.
              </p>

              <div className="flex gap-6">
                <Link to="/bookingpage">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition">
                    Explore Tours
                  </button>
                </Link>
                <button className="border border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="py-28 bg-gradient-to-b from-emerald-50 via-white to-amber-50">
          <div className="max-w-7xl mx-auto px-6">
            {/* Heading */}
            <div className="text-center mb-20">
              <h1 className="text-4xl font-bold text-center mb-12">
                {/* <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-emerald-900"> */}
                Why Travel With Us?
              </h1>
              {/* Brand Name */}
              <p className="mt-4 text-sm md:text-base tracking-[0.35em] font-extrabold italic uppercase bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 font-light">
                Nomadiva Journeys
              </p>
              {/* Gold divider */}
              <div className="mt-6 flex justify-center">
                <span className="h-1 w-24 rounded-full bg-gradient-to-r from-amber-400 to-amber-600" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Card 1 */}
              <div className="group bg-white/90 backdrop-blur p-10 rounded-3xl border border-emerald-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-14 h-14 rounded-xl bg-emerald-700 text-amber-300 flex items-center justify-center shadow-md">
                    <svg
                      className="w-7 h-7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l7 7-7 7-7-7 7-7z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-emerald-900">
                  Expert Guides
                </h3>
                <p className="text-emerald-700 leading-relaxed">
                  Travel with experienced guides who know every destination
                  inside out.
                </p>
              </div>

              {/* Featured Card */}
              <div className="relative group bg-gradient-to-b from-emerald-800 to-emerald-900 p-10 rounded-3xl shadow-2xl hover:-translate-y-3 transition-all duration-300 text-center">
                {/* Gold ring */}
                <div className="absolute inset-0 rounded-3xl ring-2 ring-amber-400/60" />

                <div className="relative">
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-emerald-900 flex items-center justify-center shadow-lg">
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        viewBox="0 0 24 24"
                      >
                        <path d="M3 12l2-2 4 4 8-8 4 4" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-amber-300">
                    Custom Packages
                  </h3>
                  <p className="text-emerald-100 leading-relaxed">
                    Trips crafted around your lifestyle, comfort, and personal
                    travel goals.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group bg-white/90 backdrop-blur p-10 rounded-3xl border border-emerald-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-14 h-14 rounded-xl bg-emerald-700 text-amber-300 flex items-center justify-center shadow-md">
                    <svg
                      className="w-7 h-7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 6v6l4 2" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-emerald-900">
                  Trusted Service
                </h3>
                <p className="text-emerald-700 leading-relaxed">
                  Thousands of happy travelers and unforgettable journeys
                  worldwide.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* DESTINATIONS SECTION */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">
              Popular Destinations
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                {
                  name: "Sunset, Vaikom",
                  img: "/images/sunset.webp",
                },
                {
                  name: "Mahadeva Temple, Vaikom",
                  img: "/images/temple.avif",
                },
                {
                  name: "Boating, Vaikom",
                  img: "https://images.mindtrip.ai/attractions/d056/296e/ab3c/6162/2a8b/8333/b3a8/1f5b",
                },
              ].map((place, index) => (
                <div
                  key={index}
                  className="rounded-xl overflow-hidden shadow-lg group cursor-pointer"
                >
                  <div
                    className="h-64 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url(${place.img})` }}
                  ></div>
                  <div className="p-6 bg-white">
                    <h3 className="text-xl font-bold">{place.name}</h3>
                    <p className="text-gray-600 mt-2">
                      Experience beauty, culture, and adventure like never
                      before.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-20 bg-gray-100">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">
              What Our Travelers Say
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-white p-8 rounded-xl shadow">
                <p className="text-gray-600 mb-4">
                  “One of the best travel experiences of my life. Everything was
                  perfectly organized!”
                </p>
                <h4 className="font-bold">— Aditya M.</h4>
              </div>

              <div className="bg-white p-8 rounded-xl shadow">
                <p className="text-gray-600 mb-4">
                  “Amazing destinations and friendly guides. Highly
                  recommended!”
                </p>
                <h4 className="font-bold">— Sara N.</h4>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}

        <section className="py-20 bg-blue-600 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready for Your Next Adventure?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Start planning your dream vacation today with our expert travel
            team.
          </p>
          <Link to="/bookingpage">
            <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition">
              Get Started
            </button>
          </Link>
        </section>
      </div>
    </motion.div>
  );
};

export default Home;
