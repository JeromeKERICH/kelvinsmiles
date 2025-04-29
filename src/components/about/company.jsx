import { useState } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";

function About() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <section className="w-full bg-white text-gray-900">

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-[4%] md:px-[6%] py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div>
            <img
              src="/assets/images/kev.jpeg"
              alt="Kevin Smiles working on set"
              className="rounded-2xl shadow-md"
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-indigo-700 text-2xl sm:text-4xl md:text-4xl font-bold mb-7 text-center">The Man Behind the Lens</h2>
            <p className="mb-6 text-gray-600 leading-relaxed">
              I'm a passionate photographer and videographer with a background in <strong>Communication and Media Studies</strong> from Kenyatta University. Over the years, I’ve had the privilege of collaborating with <strong>top corporate brands, government bodies, and international organizations</strong> — telling their stories through clean, compelling visuals.
            </p>

            <p className="mb-6 text-gray-600 leading-relaxed">
              My work is grounded in <strong>storytelling, emotion, and intentionality</strong>. Whether I’m documenting a high-profile event or capturing quiet moments in community-driven projects, I focus on the <strong>details that matter</strong> and the <strong>stories that need to be seen</strong>.
            </p>

           

            {/* Connect Button */}
            <div className="text-center mt-12">
              {!showLinks ? (
                <button
                  onClick={() => setShowLinks(true)}
                  className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition"
                >
                  Let's Connect
                </button>
              ) : (
                <div className="flex justify-center gap-6 mt-6">
                  <a
                    href="https://instagram.com/kevin_smiles"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 text-2xl hover:text-indigo-800 transition"
                    title="Follow on Instagram"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://facebook.com/kevin.smiles"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 text-2xl hover:text-indigo-800 transition"
                    title="Connect on Facebook"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="https://youtube.com/@kevinsmiles"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 text-2xl hover:text-indigo-800 transition"
                    title="Watch on YouTube"
                  >
                    <FaYoutube />
                  </a>
                  <a
                    href="https://linkedin.com/in/kevin-smiles"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 text-2xl hover:text-indigo-800 transition"
                    title="Connect on LinkedIn"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
