import React from "react";
import img1 from "../../assets/services-details/iot-1.webp";
import img2 from "../../assets/services-details/iot-2.webp";

const IoT = () => {
  return (
    <div className="flex flex-col gap-10">
      <img
        data-aos="fade-up"
        src={img1}
        loading="lazy"
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="IoT Development"
      />
      <div className="flex flex-col gap-4 md:px-5">
        <h2 data-aos="fade-up" className="text-3xl font-semibold">
          Internet of Things (IoT)
        </h2>
        <p data-aos="fade-up" className="description">
          The Internet of Things (IoT) is transforming the way businesses and
          consumers interact with the world around them. By connecting devices,
          sensors, and systems to the internet, IoT enables real-time data exchange
          and automated decision-making, unlocking new levels of efficiency,
          productivity, and convenience.
          <br />
          <br />
          At [Your Company Name], we specialize in creating smart, connected
          solutions that bridge the gap between the physical and digital worlds.
          Whether it’s for smart homes, industrial automation, or fleet management,
          our IoT solutions are designed to make data-driven decisions easy, fast,
          and impactful.
        </p>
      </div>
      <div className="mt-3 flex flex-col gap-4 md:px-5">
        <h2 data-aos="fade-up" className="text-3xl font-semibold">
          What We Provide
        </h2>
        <p data-aos="fade-up" className="description">
          Our IoT services are built around real-time connectivity, data
          analysis, and automation. We provide end-to-end IoT solutions that
          connect your devices, sensors, and systems for seamless communication,
          data collection, and actionable insights.
        </p>
        <img
          data-aos="fade-up"
          src={img2}
          loading="lazy"
          className="h-[25rem] object-cover rounded-3xl object-center my-4"
          alt="IoT Development"
        />
        <p data-aos="fade-up" className="description">
          Our IoT services include:
          <ul className="list-disc pl-6 mt-2">
            <li>Smart Device Integration: Seamlessly connect and manage devices and sensors.</li>
            <li>IoT Platforms & Architecture: Develop robust platforms that ensure smooth communication between devices and systems.</li>
            <li>Data Collection & Analysis: Collect, store, and analyze data from IoT devices to gain valuable insights.</li>
            <li>Automation & Control: Enable real-time decision-making and automate processes for better operational efficiency.</li>
            <li>IoT Security: Implement secure IoT solutions that protect data and ensure device integrity.</li>
          </ul>
          <br />
          <br />
          Our expertise spans across a wide range of IoT technologies, from embedded systems and wireless communication protocols to cloud computing and AI-driven analytics. By leveraging these technologies, we build scalable and future-proof IoT solutions that can adapt to your business’s evolving needs.
        </p>
      </div>
    </div>
  );
};

export default IoT;
