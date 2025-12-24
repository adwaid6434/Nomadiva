import React from "react";

function Gallery() {
  return (
    <section
      className="py-16 px-4 bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url('/images/gallery.webp')`,
        backgroundAttachment: "fixed", // makes the bg fixed
        minHeight: "100vh", // ensures it takes full viewport height
      }}
    >
      <h2 className="text-4xl font-bold text-blue-600 text-center">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        <div className="h-64 rounded-lg overflow-hidden">
          <img
            src="https://image-worker.mindtrip.ai/image-resize/format=webp,w=1200/https:/images.mindtrip.ai/attractions/4df4/0e27/90d2/c8ef/8f32/9761/2570/f97e"
            alt="Gallery Image 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-64 rounded-lg overflow-hidden">
          <img
            src="https://image-worker.mindtrip.ai/image-resize/format=webp,w=960/https:/images.mindtrip.ai/attractions/20c7/6467/cc53/94d6/48c5/7071/d39f/72aa"
            alt="Gallery Image 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-64 rounded-lg overflow-hidden">
          <img
            src="https://files.yappe.in/place/full/temple-pond-vaikom-mahadeva-temple-10815282.webp"
            alt="Gallery Image 3"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-64 rounded-lg overflow-hidden">
          <img
            src="https://images.mindtrip.ai/attractions/2ba7/0378/b218/a441/bc92/4cab/b193/fde8"
            alt="Gallery Image 4"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-64 rounded-lg overflow-hidden">
          <img
            src="https://images.mindtrip.ai/attractions/33a0/a098/4e0b/8d59/a845/84c9/4d30/8808"
            alt="Gallery Image 5"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-64 rounded-lg overflow-hidden">
          <img
            src="https://images.mindtrip.ai/attractions/50b5/ee02/ade2/3269/46e4/b9d8/9d34/4861"
            alt="Gallery Image 6"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Gallery;
