// src/pages/Contact.jsx
import { useState, useEffect } from "react";
import { GiH2O } from "react-icons/gi";


function Contact() {

  useEffect(() => {
              window.scrollTo(0, 0); // Scroll to top on component mount
          }
          , []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Thank you! Your message has been sent."); // You can replace with backend handling later
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="w-full">
      <div>
        <title>Contact Kevin Smiles | Photography & Videography</title>
        <meta name="description" content="Reach out to Kevin Smiles for booking inquiries, package details, and personalized photography and videography experiences." />
      </div>

      {/* Hero */}
      <div
        className="h-[300px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('assets/images/ad1.jpg')" }}
      >
      </div>

      {/* Contact Form Section */}
      <div className="max-w-4xl mx-auto px-[4%] md:px-[10%] py-16">
        <div className="text-center mb-12">
        <h2 className="text-indigo-700 text-2xl sm:text-4xl md:text-4xl font-bold text-center mb-4">
            Let's Create Magic Together
        </h2>
          <p className="text-gray-600 text-lg">
            Tell me a little about your vision, I can't wait to hear your story.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-700 mb-2 font-medium">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Name"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-700 mb-2 font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Email Address"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-gray-700 mb-2 font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              required
              value={formData.message}
              onChange={handleChange}
              className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
              placeholder="Tell me about your event, project, or session!"
            ></textarea>
          </div>

          <div className="text-center pt-6">
            <button
              type="submit"
              className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition text-lg"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Contact Details */}
        
      </div>
    </section>
  );
}

export default Contact;
