import { useState } from "react";

const CTASection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    service: "",
    date: "",
    message: "",
  });

  const phoneNumber = "254729325584"; // Your WhatsApp number

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hello, I'm ${form.name}.\nService: ${form.service}\nPreferred Date: ${form.date}\nMessage:\n${form.message}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    setIsOpen(false);
    setForm({ name: "", service: "", date: "", message: "" });
  };

  return (
    <section className="bg-indigo-600 text-white py-16 px-[4%] md:px-[10%] text-center relative">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Let’s Capture Something Beautiful Together</h2>
      <p className="mb-8 text-lg text-indigo-100">
        Tell me what you need, and I’ll help bring your vision to life.
      </p>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
      >
        Request a Session
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4">
          <div className="bg-white w-full max-w-md rounded-2xl p-6 shadow-xl relative">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Session Request</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-gray-100 border border-gray-300 px-4 py-2 rounded-md text-gray-800"
              />
              <select
                required
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full bg-gray-100 border border-gray-300 px-4 py-2 rounded-md text-gray-800"
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
                required
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full bg-gray-100 border border-gray-300 px-4 py-2 rounded-md text-gray-800"
              />
              <input
                type="text"
                placeholder="Optional Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-gray-100 border border-gray-300 px-4 py-2 rounded-md text-gray-800"
              />
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-600 hover:text-red-600 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-5 py-2 rounded-md hover:bg-indigo-700 transition"
                >
                  Send via WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default CTASection;
