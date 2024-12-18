import React from "react";
import img1 from "../../assets/services-details/generative-ai-1.webp";
import img2 from "../../assets/services-details/generative-ai-2.webp";

const GenerativeAI = () => {
  return (
    <div className="flex flex-col gap-10">
      <img
        data-aos="fade-up"
        src={img1}
        loading="lazy"
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="Generative AI"
      />
      <div className="flex flex-col gap-4 md:px-5">
        <h2 data-aos="fade-up" className="text-3xl font-semibold">
          Generative AI
        </h2>
        <p data-aos="fade-up" className="description">
          Generative AI is redefining creativity, enabling businesses to craft
          unique content, designs, and solutions with the power of artificial
          intelligence. From generating high-quality visuals to creating
          personalized customer experiences, Generative AI is at the forefront
          of innovation.
          <br />
          <br />
          At its core, Generative AI leverages advanced models such as
          Generative Adversarial Networks (GANs) and Transformer-based
          architectures to produce original outputs. Whether it's text, images,
          or even code, Generative AI empowers businesses to unlock new levels
          of efficiency and creativity.
        </p>
      </div>
      <div className="mt-3 flex flex-col gap-4 md:px-5">
        <h2 data-aos="fade-up" className="text-3xl font-semibold">
          What We Provide
        </h2>
        <p data-aos="fade-up" className="description">
          Our Generative AI services are designed to transform your vision into
          reality. From automated content creation to AI-driven design tools, we
          provide solutions that align with your business objectives and fuel
          innovation.
        </p>
        <img
          data-aos="fade-up"
          src={img2}
          loading="lazy"
          className="h-[25rem] object-cover rounded-3xl object-center my-4"
          alt="Generative AI"
        />
        <p data-aos="fade-up" className="description">
          We specialize in creating cutting-edge Generative AI applications,
          including virtual assistants, creative design tools, and text-to-image
          solutions. Our expertise includes leveraging platforms like OpenAI,
          Stable Diffusion, and MidJourney to build tailored solutions that
          deliver results.
          <br />
          <br />
          On the back end, we ensure scalable and secure infrastructure for
          deploying AI models. Whether you need AI-driven marketing tools,
          personalized content generation, or real-time chatbot solutions, our
          Generative AI services are designed to elevate your business to new
          heights.
        </p>
      </div>
    </div>
  );
};

export default GenerativeAI;
