const AboutSection = () => {
    return (
      <section className="py-16 px-[4%] md:px-[10%] bg-white text-gray-800" id="about">
      
     
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-indigo-700">KS Photography</h2>
          <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-3xl mx-auto text-sm:text-center">
            More than just photography. It’s about capturing emotion, essence, and truth. At KS Photography, we aim to create lasting visuals that speak louder than words. We believe in the power of storytelling through images, and we are committed to delivering work that resonates with our clients and their audiences.
          </p>
        </div>
  
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Our Mission</h3>
              <p className="text-gray-700 text-base leading-relaxed">
                To tell powerful stories through compelling visual narratives. Whether it's a wedding, a corporate campaign, or a personal moment, our mission is to deliver work that reflects heart, honesty, and excellence.
              </p>
            </div>
  
            {/* Vision */}
            <div className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Our Vision</h3>
              <p className="text-gray-700 text-base leading-relaxed">
                To be a trusted visual storyteller for brands, families, and individuals across Africa and beyond — one frame at a time. We envision photography as a tool for connection, identity, and change.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutSection;
  