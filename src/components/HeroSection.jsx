import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <section className="relative h-[100vh] md:h-[70vh] w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/assets/videos/coparate.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="bg-white text-indigo-700 text-2xl sm:text-4xl md:text-5xl font-bold px-5 py-3 rounded-xl shadow-lg text-center mb-6 drop-shadow-md">
          Capturing Life's Beautiful Moments
        </h1>
        <p className="text-white text-lg md:text-2xl mb-8 max-w-2xl drop-shadow-sm">
          Experience the art of photography & videography like never before. From weddings to portraits, we capture the essence of every moment.
        </p>
        <Link to="/portfolio"
          className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition"
        >
          View Portfolio
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
