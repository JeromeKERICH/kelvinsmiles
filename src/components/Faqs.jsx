import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend booking at least 4–6 weeks in advance to secure your preferred date, especially for weddings and large events.",
  },
  {
    question: "Do you travel for shoots?",
    answer:
      "Yes! Kevin is available for travel across Kenya and internationally. Travel fees may apply depending on location.",
  },
  {
    question: "How long does it take to receive photos or videos?",
    answer:
      "Typically, photos are delivered within 1–2 weeks, and video projects within 3–4 weeks. Expedited delivery is available upon request.",
  },
  {
    question: "Can I customize a package?",
    answer:
      "Absolutely. All packages can be tailored to suit your specific needs, whether it’s event duration, location, or style.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-100 py-20 px-[4%] md:px-[10%]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-indigo-700 text-2xl sm:text-4xl md:text-4xl font-bold mb-7 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-4">
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="text-lg font-medium text-gray-700">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
