// src/pages/Portfolio.jsx
import { useState, useEffect } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function Portfolio() {
  useEffect(() => {
              window.scrollTo(0, 0); // Scroll to top on component mount
          }
          , []);
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [category, setCategory] = useState("Lifestyle");

  const galleries = {
    Lifestyle: [
      { src: "assets/images/2.jpeg", alt: "Bride and groom first dance", title: "Wedding - First Dance" },
      { src: "assets/images/k1.jpg", alt: "Outdoor wedding ceremony", title: "Wedding - Outdoor Ceremony" },
      { src: "assets/images/3.jpeg", alt: "Wedding couple portrait", title: "Wedding - Couple Portrait" },
      { src: "assets/images/1.jpeg", alt: "Wedding reception decor", title: "Wedding - Reception Decor" },
      { src: "assets/images/w4.jpg", alt: "Bride getting ready", title: "Wedding - Bride Getting Ready" },
      { src: "assets/images/6.jpeg", alt: "Bride getting ready", title: "Wedding - Bride Getting Ready" },
    ],
    Community: [
      { src: "assets/images/4.jpeg", alt: "Woman portrait in natural light", title: "Portrait - Natural Light" },
      { src: "assets/images/po4.jpeg", alt: "Man stylish portrait", title: "Portrait - Stylish Mood" },
      { src: "assets/images/c2.jpg", alt: "Family portrait outdoors", title: "Portrait - Family Outdoors" },
      { src: "assets/images/p5.jpeg", alt: "Child portrait with soft light", title: "Portrait - Soft Light" },
      { src: "assets/images/c1.jpg", alt: "Couple portrait in the city", title: "Portrait - City Vibes" },
     
    ],
    Corporate: [
      { src: "assets/images/9.jpeg", alt: "Product shoot for jewelry", title: "Commercial - Jewelry Product" },
      { src: "assets/images/chu1.jpg", alt: "Brand promotional shoot", title: "Commercial - Brand Promo" },
      
      { src: "assets/images/cop1.jpeg", alt: "Food photography for restaurant", title: "Commercial - Food Photography" },
      { src: "assets/images/cop2.jpeg", alt: "Fashion shoot for clothing brand", title: "Commercial - Fashion Shoot" },
      { src: "assets/images/cop3.jpeg", alt: "Event photography for corporate event", title: "Commercial - Corporate Event" },
      { src: "assets/images/cop4.jpeg", alt: "Product shoot for electronics", title: "Commercial - Electronics Product" },
    ],
  };

  const currentGallery = galleries[category];

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <section className="max-w-7xl mx-auto px-[4%] md:px-[10%] py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-indigo-800 mb-4">Experiences that last</h2>
        <p className="text-gray-600 text-lg">
          Every frame tells a story. Explore the world through my lens. let’s create magic together.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex justify-center gap-6 mb-12">
        {Object.keys(galleries).map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`text-lg font-medium ${
              category === cat ? "text-indigo-600 underline" : "text-gray-500"
            } transition`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {currentGallery.map((image, index) => (
          <div 
            key={index} 
            className="overflow-hidden rounded-2xl cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => handleImageClick(index)}
          >
            <LazyLoadImage
              src={image.src}
              alt={image.alt}
              title={image.title}
              className="w-full mb-4 object-cover rounded-2xl"
              effect="blur" 
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={currentGallery.map(image => ({ src: image.src }))}
          index={currentIndex}
        />
      )}

      {/* Video Section */}
      <div className="mt-20 text-center">
        <h3 className="text-4xl font-bold text-indigo-800 mb-4">Visuals that Inspire</h3>
        <p className="text-gray-600 text-lg mb-8">
          Experience the art of storytelling through our curated video collection. 
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Video 1 */}
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <video 
              src="assets/videos/tet.mp4" 
              controls 
              className="w-full h-auto rounded-2xl"
              preload="metadata"
              muted
              loop
              playsInline
            />
          </div>

          {/* Video 2 */}
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <video 
              src="assets/videos/coparate.mp4" 
              controls 
              className="w-full h-auto rounded-2xl"
              preload="metadata"
              muted
              loop
              playsInline
            />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg">
          <video 
              src="assets/videos/investment.mp4" 
              controls 
              className="w-full h-auto rounded-2xl"
              preload="metadata"
              muted
              loop
              playsInline
            />

          </div>
          
        </div>

      </div>

    </section>
  );
}

export default Portfolio;
