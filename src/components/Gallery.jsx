// src/components/GalleryPreview.jsx
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function GalleryPreview() {
  return (
    <section className="max-w-7xl mx-auto px-[4%] md:px-[10%] py-16">
      <div className="text-center mb-12">
        <h2 className="text-indigo-700 text-2xl sm:text-4xl md:text-4xl font-bold mb-7 text-center">A Glimpse of Moments</h2>
        <p className="text-gray-600 text-lg">
          Just a taste. Dive deeper into the stories behind each frame.
        </p>
      </div>

      {/* Images Preview */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <LazyLoadImage 
            src="assets/images/w3.jpg" 
            alt="Gallery preview 1" 
            effect="blur"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="overflow-hidden rounded-2xl shadow-lg">
          <LazyLoadImage 
            src="assets/images/ad2.jpg" 
            alt="Gallery preview 2" 
            effect="blur"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* View More Button */}
      <div className="text-center">
        <Link to="/portfolio">
          <button className="px-8 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition">
            View Full Gallery
          </button>
        </Link>
      </div>
    </section>
  );
}

export default GalleryPreview;
