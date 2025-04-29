// src/pages/PortraitPackage.jsx
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { useEffect } from "react";

function PortraitPackage() {

    useEffect(() => {
            window.scrollTo(0, 0); // Scroll to top on component mount
        }
        , []);
  const inclusions = [
    "1-Hour Portrait Session at Your Location",
    "Multiple Outfit Changes (Optional)",
    "Location of Your Choice (Indoor/Outdoor)",
    "Professional Editing & Retouching Images and Videos (Optional)",
    "Online Private Gallery for Sharing and Downloading",
    "High-Resolution Downloads for Social Media and Print",
  ];

  return (
    <section className="w-full">
      {/* Hero Banner */}
      <div
        className="h-[400px] bg-cover bg-center flex items-center justify-center linear-gradient-to-r from-[#00000] to-[#333] opacity-70"
        style={{ backgroundImage: "url('assets/images/c4.jpg')" }}
      >
        <h1 className="bg-white text-indigo-700 text-2xl sm:text-4xl md:text-5xl font-bold px-6 py-3 rounded-xl shadow-lg text-center">
            Capture Your Essence
        </h1>

      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-[4%] md:px-[10%] py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">What's Included</h2>
          <p className="text-gray-600 text-lg">
            Authentic, soulful portraits crafted with light and heart.
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

        {/* Pricing */}
        <div className="text-center mb-12">
          <p className="text-2xl font-semibold text-indigo-600">Starting at $400</p>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition text-lg"
          >
            Book Your Session
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PortraitPackage;
