import React from "react";
import img1 from "../../assets/services-details/ai1.webp";
import img2 from "../../assets/services-details/ai2.webp";

const AIandML = () => {
  return (
    <div className="flex flex-col gap-10">
      <img
        data-aos="fade-up"
        src={img1}
        loading="lazy"
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="AI and ML"
      />
      <div className="flex flex-col gap-4 md:px-5">
        <h2 data-aos="fade-up" className="text-3xl font-semibold">
          Artificial Intelligence & Machine Learning
        </h2>
        <p data-aos="fade-up" className="description">
          Artificial Intelligence (AI) and Machine Learning (ML) are
          revolutionizing industries, enabling businesses to work smarter and
          deliver exceptional customer experiences. From automating routine
          tasks to uncovering actionable insights from complex data, AI and ML
          open doors to transformative opportunities.
          <br />
          <br />
          At the core of AI and ML development lies the ability to turn data
          into intelligence. Our solutions leverage cutting-edge algorithms and
          frameworks to build intelligent systems that adapt, learn, and evolve
          with your business needs. Whether you're streamlining operations,
          enhancing customer interactions, or predicting trends, we provide the
          tools to lead in a data-driven world.
        </p>
      </div>
      <div className="mt-3 flex flex-col gap-4 md:px-5">
        <h2 data-aos="fade-up" className="text-3xl font-semibold">
          What We Provide
        </h2>
        <p data-aos="fade-up" className="description">
          AI and ML solutions tailored to solve your unique business challenges.
          We focus on designing systems that empower smarter decision-making and
          deliver measurable outcomes. From predictive analytics to natural
          language processing, our expertise covers a wide range of AI
          applications.
        </p>
        <img
          data-aos="fade-up"
          src={img2}
          loading="lazy"
          className="h-[25rem] object-cover rounded-3xl object-center my-4"
          alt="AI and ML"
        />
        <p data-aos="fade-up" className="description">
          Our services include developing custom AI models, integrating machine
          learning algorithms, and deploying intelligent applications across
          industries. We use advanced tools and technologies like TensorFlow,
          PyTorch, and Scikit-learn to craft solutions that drive efficiency and
          innovation.
          <br />
          <br />
          On the back end, we ensure seamless data integration, scalable
          infrastructure, and robust security to power AI-driven systems.
          Whether it's implementing recommendation engines, automating
          workflows, or optimizing supply chains, our AI and ML expertise brings
          intelligence to your fingertips.
        </p>
      </div>
    </div>
  );
};

export default AIandML;
