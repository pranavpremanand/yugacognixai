import { FaCheck } from "react-icons/fa";

const WhyChooseUs = () => {
  const benefits = [
    {
      title: "Technology Excellence",
      description:
        "Our expert team combines AI innovation with proven IT solutions, delivering powerful systems that drive your business forward.",
    },
    {
      title: "Quality & Speed",
      description:
        "We pride ourselves on delivering high-quality solutions on time, every time. Our efficient processes ensure swift project completion without compromising excellence.",
    },
    {
      title: "Smart Investment",
      description:
        "Get competitive pricing paired with exceptional value. We optimize our solutions to maximize your return on investment while keeping costs manageable.",
    },
    {
      title: "Dedicated Partnership",
      description:
        "Experience personalized attention and responsive support throughout your journey. We're committed to your success, from project start to completion and beyond.",
    },
  ];

  return (
    <div className="bg-white/5 py-[4rem]">
      <div className="wrapper">
        <div className="text-center mb-12">
          <h2 className="heading font-bold text-gray-900 mb-4">
            Why Choose YugaCognix AI?
          </h2>
          <p className="desc max-w-3xl mx-auto">
            YugaCognix AI delivers cutting-edge AI and IT solutions that
            transform businesses. Our expertise in artificial intelligence,
            software development, and advanced technology makes us your ideal
            digital transformation partner.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="border border-gray-300 shadow-inner rounded-lg"
            >
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <FaCheck className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="desc text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
