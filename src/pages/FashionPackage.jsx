// src/pages/FashionPackage.jsx
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { useEffect } from "react";

function FashionPackage() {
    useEffect(() => {
                window.scrollTo(0, 0); // Scroll to top on component mount
            }
            , []);
  const inclusions = [
    "Creative Direction & Styling Consultation",
    "Editorial-Grade Retouchingns for All Images",
    "Half-Day Sessions Available for Quick Shoots",
    "Web & Print-Ready Output for All Images and Videos",
    "Model Coaching Included for Posing and Expression",
  ];

  return (
    <section className="w-full">
      <div
        className="h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/assets/images/c5.jpg')" }}
      >
        <h1 className="bg-white text-indigo-700 text-2xl sm:text-4xl md:text-5xl font-bold px-6 py-3 rounded-xl shadow-lg text-center">
            Don't Just Wear It, Own It
        </h1>


      </div>

      <div className="max-w-5xl mx-auto px-[4%] md:px-[10%] py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Details & Features</h2>
          <p className="text-gray-600 text-lg">
            Bold visuals crafted to tell your brand's story in style.
          </p>
        </div>

        <ul className="grid sm:grid-cols-2 gap-6 mb-12">
          {inclusions.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-700">
              <FaCheckCircle className="text-indigo-500 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="text-center mb-12">
          <p className="text-2xl font-semibold text-indigo-600">Starting at $950</p>
        </div>

        <div className="text-center">
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition text-lg"
          >
            Let's Create Together
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FashionPackage;
