import { useState, useEffect } from "react";
import { FaInstagram, FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";

function About() {

     useEffect(() => {
                    window.scrollTo(0, 0); // Scroll to top on component mount
                }
                , []);
  const [showLinks, setShowLinks] = useState(false);

  return (
    <section className="w-full bg-white text-gray-800">
      {/* Hero Section */}
      <div className="h-[400px] bg-cover bg-center flex items-center justify-center relative" style={{ backgroundImage: "url('/assets/images/5.jpeg')" }}>
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <h1 className="bg-white text-indigo-700 text-2xl sm:text-4xl md:text-5xl font-bold px-6 py-3 rounded-xl shadow-lg text-center">
            Kevin Smiles Photography
        </h1>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-[4%] md:px-[10%] py-20">
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
            <h2 className="text-3xl text-indigo-800 font-bold mb-6">The Man Behind the Lens</h2>
            <p className="mb-6 text-gRAY-600 leading-relaxed">
              I'm a passionate photographer and videographer with a background in <strong>Communication and Media Studies</strong> from Kenyatta University. Over the years, I’ve had the privilege of collaborating with <strong>top corporate brands, government bodies, and international organizations</strong>, telling their stories through clean, compelling visuals.
            </p>

            <p className="mb-6 text-gray-600 leading-relaxed">
              My work is grounded in <strong>storytelling, emotion, and intentionality</strong>. Whether I’m documenting a high-profile event or capturing quiet moments in community-driven projects, I focus on the <strong>details that matter</strong> and the <strong>stories that need to be seen</strong>.
            </p>

            <p className="text-gray-600 leading-relaxed">
              I believe that visuals should not only look good, they should feel <em>real</em>. Every frame is crafted with purpose, to connect, inspire, and leave a lasting impression.
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
