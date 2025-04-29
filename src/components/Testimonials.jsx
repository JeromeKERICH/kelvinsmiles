const testimonials = [
    {
      name: "Joy Wanjiru",
      role: "Bride | Nairobi",
      image: "/assets/testimonials/joy.jpg",
      quote:
        "Kevin didn't just capture our wedding — he captured every emotion. We laughed, cried, and now we relive it every time we look at our photos.",
    },
    {
      name: "Mark Otieno",
      role: "Creative Director | Rise Agency",
      image: "/assets/testimonials/mark.jpg",
      quote:
        "Working with Kevin is effortless. His eye for detail and ability to translate brand identity into visuals is unmatched.",
    },
    {
      name: "Aisha Mwende",
      role: "Program Officer | NGO Kenya",
      image: "/assets/testimonials/aisha.jpg",
      quote:
        "We hired Kevin for a community impact project. He told stories that touched hearts, not just ticked boxes. We’ll work with him again!",
    },
  ];
  
  const Testimonials = () => {
    return (
      <section className="bg-gray-100 py-20 px-[4%] md:px-[10%]">
        <div className="text-center mb-12">
          <h2 className="text-indigo-700 text-2xl sm:text-4xl md:text-4xl font-bold mb-4">What Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real moments. Real people. Here’s what they had to say.
          </p>
        </div>
  
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed italic">“{testimonial.quote}”</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  