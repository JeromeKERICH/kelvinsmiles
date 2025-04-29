// src/pages/FamilyPackage.jsx
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { useEffect } from "react";

function FamilyPackage() {
   useEffect(() => {
               window.scrollTo(0, 0); // Scroll to top on component mount
           }
           , []);
  const inclusions = [
    "1-Hour Family Session at Your Location",
    "Up to 5 Family Members Included in Base Price",
    "Outdoor or Indoor Location of Your Choice",
    "Beautiful Natural Editing and Retouching",
    "Online Viewing Gallery for Easy Sharing",
    "High-Res Digital Downloads for Print and Social Media",
  ];

  return (
    <section className="w-full">
      <div
        className="h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/assets/images/po4.jpeg')" }}
      >
        <h1 className="bg-white text-indigo-700 text-2xl sm:text-4xl md:text-5xl font-bold px-6 py-3 rounded-xl shadow-lg text-center">
            Create Lasting Family Memories
        </h1>

      </div>

      <div className="max-w-5xl mx-auto px-[4%] md:px-[10%] py-16">
        <div className="text-center mb-12">
          <p className="text-gray-800 text-lg">
            Real smiles, real connections, portraits that feel like home. We capture the love.
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
          <p className="text-2xl font-semibold text-indigo-600">Starting at $350</p>
        </div>

        <div className="text-center">
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition text-lg"
          >
            Book Now
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FamilyPackage;
