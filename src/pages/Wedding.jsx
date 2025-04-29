// src/pages/WeddingPackage.jsx
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { useEffect } from "react";

function WeddingPackage() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top on component mount
    }
    , []);
  const inclusions = [
    "Full-Day Wedding Coverage (8-10 Hours)",
    "Professional Editing & Retouching of Images",
    "Highlight Video + Ceremony Film (3-5 Minutes) and Optional Full-Length Video",
    "Online Gallery for Sharing and Downloading",
    "High-Resolution Downloads for Social Media and Print",
    "Optional Second Shooter for Extra Coverage",
    "Pre-Wedding Consultation and Planning Session",
  ];

  return (
    <section className="w-full">
      {/* Hero Banner */}
      <div
        className="h-[400px] bg-cover bg-center flex items-center justify-center linear-gradient-to-r from-[#00000] to-[#333] opacity-70"
        style={{ backgroundImage: "url('assets/images/weed6.jpeg')" }}
      >
        <h1 className="bg-white text-indigo-700 text-2xl sm:text-4xl md:text-5xl font-bold px-6 py-3 rounded-xl shadow-lg text-center">
            Capture Your Love Story
        </h1>

      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-[4%] md:px-[10%] py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">What's Included</h2>
          <p className="text-gray-600 text-lg">
            Relive every moment, laugh, and tear. Beautifully captured.
          </p>
        </div>

        {/* Inclusions */}
        <ul className="grid sm:grid-cols-2 gap-6 mb-12">
          {inclusions.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-700">
              <FaCheckCircle className="text-indigo-500 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Pricing (Optional) */}
        <div className="text-center mb-12">
          <p className="text-2xl font-semibold text-indigo-600">Starting at $2,500</p>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition text-lg"
          >
            Book Your Wedding
          </Link>
        </div>
      </div>
    </section>
  );
}

export default WeddingPackage;
