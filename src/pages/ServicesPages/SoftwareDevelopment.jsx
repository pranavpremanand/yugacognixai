import React from "react";
import img1 from "../../assets/services-details/software-development-1.webp";
import img2 from "../../assets/services-details/software-development-2.webp";
import FadeUp from "../../components/FadeUp";

const SoftwareDevelopment = () => {
  return (
    <FadeUp>
      <div className="flex flex-col gap-10">
        <img
          src={img1}
          loading="lazy"
          className="h-[25rem] object-cover rounded-3xl object-center"
          alt="Software Development"
        />
        <div className="flex flex-col gap-4 md:px-5">
          <h2 className="text-3xl font-semibold">Software Development</h2>
          <p className="description">
            In today’s digital era, software development is the backbone of
            innovation. From custom applications to enterprise software
            solutions, businesses require reliable, scalable, and secure
            software to meet evolving market demands. We specialize in building
            tailored software that drives operational efficiency, enhances
            customer experience, and delivers lasting value.
            <br />
            <br />
            Whether you’re looking to develop a new product or optimize an
            existing one, our team leverages modern development practices and
            technologies to bring your ideas to life. We ensure seamless
            integration and scalability while adhering to the best industry
            standards.
          </p>
        </div>
        <div className="mt-3 flex flex-col gap-4 md:px-5">
          <h2 className="text-3xl font-semibold">What We Provide</h2>
          <p className="description">
            Our software development services are designed to meet the unique
            needs of your business. We focus on creating high-quality solutions
            that deliver results. From ideation to deployment, we guide you
            through every stage of the software development lifecycle, ensuring
            that your project is a success.
          </p>
          <img
            src={img2}
            loading="lazy"
            className="h-[25rem] object-cover rounded-3xl object-center my-4"
            alt="Software Development"
          />
          <p className="description">
            Our services include:
            <ul className="list-disc pl-6 mt-2">
              <li>
                Custom Software Development: Tailored applications that align
                with your business goals.
              </li>
              <li>
                Enterprise Software Solutions: Robust, scalable solutions
                designed to handle complex organizational needs.
              </li>
              <li>
                Cloud Computing & Integration: Scalable, cloud-based solutions
                that enhance accessibility and collaboration.
              </li>
              <li>
                Software Maintenance & Support: Continuous updates and
                optimization to keep your software running smoothly.
              </li>
            </ul>
            <br />
            <br />
            Our team is proficient in a wide range of programming languages and
            frameworks, including Java, Python, C#, .NET, and JavaScript,
            ensuring that we select the best technologies for your project. We
            also focus on security, performance, and user experience to deliver
            high-quality software that exceeds expectations.
          </p>
        </div>
      </div>
    </FadeUp>
  );
};

export default SoftwareDevelopment;
