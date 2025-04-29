// src/components/Packages.jsx
import { Link } from "react-router-dom";

function Packages() {
  const packages = [
    {
      title: "Wedding Memories",
      description: "Capture the magic of your special day with cinematic photos and heartwarming videos.",
      bgImage: "assets/images/weed6.jpeg",
      link: "/weddingpackage",
    },
    {
      title: "Portrait Sessions",
      description: "Personal, powerful portraits crafted with natural light and artistic vision.",
      bgImage: "assets/images/gr1.jpg",
      link: "/portraitpackage",
    },
    {
      title: "Commercial Projects",
      description: "Brand storytelling through crisp visuals, products, campaigns, events, and more.",
      bgImage: "assets/images/9.jpeg",
      link: "/commercialpackage",
    },

    {
      title: "Family Moments",
      description: "Timeless family portraits that capture the essence of your loved ones.",
      bgImage: "assets/images/po4.jpeg",
      link: "/familypackage",
    },
    {
      title: "Baby shower and birthday",
      description: "Celebrate your little one's milestones with heartwarming photography.",
      bgImage: "assets/images/baby.jpeg",
      link: "/babypackage",
    },
    {
      title: "Fashion & Editorial",
      description: "Stylish and creative photography for brands and magazines.",
      bgImage: "assets/images/c5.jpg",
      link: "/fashionpackage",
    },
  ];

  return (
    <section className="bg-gray-100 max-w-7xl mx-auto px-[4%] md:px-[10%] py-20">
      <div className="text-center mb-12">
        <h2 className="text-indigo-700 text-2xl sm:text-4xl md:text-4xl font-bold mb-7 text-center">My best plans for you</h2>
        <p className="text-gray-600 text-lg">
          Crafted experiences to capture your world perfectly. Choose your adventure and let’s create magic together. 
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="relative rounded-3xl overflow-hidden shadow-xl group hover:shadow-2xl transition duration-300 h-[400px] flex flex-col justify-end p-8"
            style={{
              backgroundImage: `url(${pkg.bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition"></div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">{pkg.title}</h3>
              <p className="text-gray-200 mb-6">{pkg.description}</p>
              <Link
                to={pkg.link}
                className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition"
              >
                View Package
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Packages;
