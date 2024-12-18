import React from "react";
import img1 from "../../assets/services-details/web-development2.webp";
import img2 from "../../assets/services-details/web-development1.webp";

const WebDevelopment = () => {
  return (
    <div className="flex flex-col gap-10">
      <img
        data-aos="fade-up"
        src={img1}
        loading="lazy"
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="web development"
      />
      <div className="flex flex-col gap-4 md:px-5">
        <h2 data-aos="fade-up" className="text-3xl font-semibold">
          Web Development
        </h2>
        <p data-aos="fade-up" className="description">
          In today's digital era, web applications have transformed how we live,
          work, and connect. From e-commerce platforms to educational resources,
          these tools empower businesses and individuals alike. Developing a
          successful web application requires a perfect blend of creativity,
          technical expertise, and a deep understanding of user needs.
          <br />
          <br />
          At the heart of web development is the collaboration between front-end
          and back-end technologies. The front-end focuses on user-facing
          elements, delivering engaging and intuitive interfaces that captivate
          and inform.
        </p>
      </div>
      <div className="mt-3 flex flex-col gap-4 md:px-5">
        <h2 data-aos="fade-up" className="text-3xl font-semibold">
          What We Provide
        </h2>
        <p data-aos="fade-up" className="description">
          Your website is often the first impression your brand makes. We ensure
          it’s a lasting one. Our web development services are designed to
          create responsive, visually striking websites that provide seamless
          user experiences while staying true to your brand identity.
        </p>
        <img
          data-aos="fade-up"
          src={img2}
          loading="lazy"
          className="h-[25rem] object-cover rounded-3xl object-center my-4"
          alt="web development"
        />
        <p data-aos="fade-up" className="description">
          Whether you need a sleek landing page or a complex e-commerce
          platform, we deliver end-to-end web development solutions. Our
          expertise spans full-stack development, ensuring both robust back-end
          functionality and intuitive front-end interfaces. Our websites don’t
          just look great—they perform flawlessly, driving conversions and
          delivering measurable results.
          <br />
          <br />
          On the back-end, we handle the critical logic, data management, and
          security that power your application. Leveraging technologies like
          Python, PHP, Ruby, and Java, along with databases such as MySQL,
          PostgreSQL, and MongoDB, we build efficient, scalable solutions that
          guarantee reliability and performance.
        </p>
      </div>
    </div>
  );
};

export default WebDevelopment;
