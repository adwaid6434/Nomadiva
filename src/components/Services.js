import React from "react";

function Services() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Full-page fixed background image */}
      <div
        className="fixed inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            // "url('https://image-worker.mindtrip.ai/image-resize/format=webp,w=960/https:/images.mindtrip.ai/attractions/9297/dfb4/11c2/7c0b/1560/0872/cba1/2114')",
            `url('/images/services.webp')`,
        }}
      ></div>

      {/* Full-page floating sparkle overlay */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {/* Layer 1: small dots */}
        <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle,rgba(255,255,255,0.03) 0.5px,transparent 0.5px)] bg-[length:20px_20px] animate-sparkle-slow"></div>
        {/* Layer 2: medium dots */}
        <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle,rgba(255,255,255,0.05) 1px,transparent 1px)] bg-[length:40px_40px] animate-sparkle-medium"></div>
        {/* Layer 3: large dots */}
        <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle,rgba(255,255,255,0.08) 2px,transparent 2px)] bg-[length:60px_60px] animate-sparkle-fast"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 py-16 px-4">
        <h2 className="text-4xl font-bold text-white text-center">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div className="bg-white bg-opacity-80 shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-600">
              Guided Tours
            </h3>
            <p className="mt-4 text-gray-600">
              Experience the best of the world with our expert guides who know
              the ins and outs of every destination.
            </p>
          </div>
          <div className="bg-white bg-opacity-80 shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-600">
              Custom Packages
            </h3>
            <p className="mt-4 text-gray-600">
              We offer tailor-made travel packages that suit your preferences,
              budget, and travel goals.
            </p>
          </div>
          <div className="bg-white bg-opacity-80 shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-600">Group Trips</h3>
            <p className="mt-4 text-gray-600">
              Join a group and explore exciting destinations with like-minded
              travelers. Enjoy discounts and exclusive experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Tailwind animation keyframes for floating sparkles */}
      <style jsx>{`
        @keyframes sparkle-slow {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 10px 20px;
          }
        }
        @keyframes sparkle-medium {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 20px 30px;
          }
        }
        @keyframes sparkle-fast {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 30px 10px;
          }
        }
        .animate-sparkle-slow {
          animation: sparkle-slow 60s linear infinite;
        }
        .animate-sparkle-medium {
          animation: sparkle-medium 45s linear infinite;
        }
        .animate-sparkle-fast {
          animation: sparkle-fast 30s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default Services;
