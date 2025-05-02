import { Link } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa";
import { useState } from "react";
import "./styles/Hero.css"; // Ensure this CSS file exists

const HeroSection = () => {
  const scrollToNextSection = () => {
    const next = document.getElementById("next-section");
    if (next) next.scrollIntoView({ behavior: "smooth" });
  };

  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    service: "",
    date: "",
    message: "",
  });

  const phoneNumber = "254729325584";

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hello, I'm ${form.name}.\nService: ${form.service}\nPreferred Date: ${form.date}\nMessage:\n${form.message}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    setIsOpen(false);
    setForm({ name: "", service: "", date: "", message: "" });
  };

  return (
    <section className="hero-section">
      <img
        className="background-image"
        src="/assets/images/back11.jpeg"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      />
      <div className="overlay" />

      <div className="hero-content">
        <h1 className="hero-title">
          Capturing Moments. <br/>
          <span>Telling Stories. Creating Impact.</span>
        </h1>
        <p className="hero-subtitle">
          Every frame tells a story of love, purpose, and human connection. We make every shoot count
        </p>

        <div className="hero-buttons">
          <Link to="/portfolio" className="hero-button portfolio-btn">
            Explore Our Work
          </Link>
          <button
            className="hero-button contact-btn"
            onClick={() => setIsOpen(true)}
          >
            Book a Session
          </button>
        </div>

        <button onClick={scrollToNextSection} className="scroll-down">
          <FaArrowDown />
        </button>
      </div>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h3 className="modal-title">Session Request</h3>
            <form onSubmit={handleSubmit} className="modal-form">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <select
                required
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
              >
                <option value="" disabled>Select a service</option>
                <option value="Wedding Photography">Wedding Photography</option>
                <option value="Portrait Session">Portrait Session</option>
                <option value="Commercial Shoot">Commercial Shoot</option>
                <option value="Baby Shower / Birthday">Baby Shower / Birthday</option>
                <option value="Fashion / Editorial">Fashion / Editorial</option>
                <option value="Other">Other</option>
              </select>
              <input
                type="date"
                placeholder="Preferred Date"
                required
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
              />
              <input
                type="text"
                placeholder="Optional Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
              <div className="modal-buttons">
                <button type="button" onClick={() => setIsOpen(false)}>
                  Cancel
                </button>
                <button type="submit">Send via WhatsApp</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
