// src/pages/BabyPackage.jsx
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { useEffect } from "react";

function BabyPackage() {

    useEffect(() => {
                window.scrollTo(0, 0); // Scroll to top on component mount
            }
            , []);
  const inclusions = [
    "2-Hour Event Coverage of Your Choice",
    "Candid & Portrait Shots of Your Baby",
    "Balloon & Cake Moments Captured Beautifully",
    "Gentle Color Grading and Retouching ",
    "Private Online Gallery for Sharing and Downloading",
    "Download-Ready Files for Social Media and Print",
  ];

  return (
    <section className="w-full">
      <div
        className="h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/assets/images/baby.jpeg')" }}
      >
        <h1 className="bg-white text-indigo-700 text-2xl sm:text-4xl md:text-5xl font-bold px-6 py-3 rounded-xl shadow-lg text-center">
            Capture Your Baby's Milestones
        </h1>
      </div>

      <div className="max-w-5xl mx-auto px-[4%] md:px-[10%] py-16">
        <div className="text-center mb-12">
        <p className="text-gray-800 text-lg">
            Wholesome memories of your little one's biggest days.
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
          <p className="text-2xl font-semibold text-indigo-600">Starting at $500</p>
        </div>

        <div className="text-center">
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition text-lg"
          >
            Reserve a Spot
          </Link>
        </div>
      </div>
    </section>
  );
}

export default BabyPackage;
