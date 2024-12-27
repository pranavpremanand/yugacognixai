import React from "react";
import img1 from "../../assets/services-details/data-engineering-1.webp";
import img2 from "../../assets/services-details/data-engineering-2.webp";
import FadeUp from "../../components/FadeUp";

const DataEngineering = () => {
  return (
    <FadeUp>
      <div className="flex flex-col gap-10">
        <img
          src={img1}
          loading="lazy"
          className="h-[25rem] object-cover rounded-3xl object-center"
          alt="Data Engineering"
        />
        <div className="flex flex-col gap-4 md:px-5">
          <h2 className="text-3xl font-semibold">Data Engineering</h2>
          <p className="description">
            In today’s data-driven world, businesses rely on robust data
            infrastructures to unlock actionable insights and drive
            decision-making. Data engineering is the backbone that ensures the
            availability, reliability, and scalability of your data systems.
            <br />
            <br />
            At the core of data engineering lies the design, construction, and
            maintenance of systems that process and manage vast amounts of data.
            From building data pipelines to optimizing storage solutions, data
            engineering is pivotal to transforming raw data into a strategic
            asset.
          </p>
        </div>
        <div className="mt-3 flex flex-col gap-4 md:px-5">
          <h2 className="text-3xl font-semibold">What We Provide</h2>
          <p className="description">
            Our data engineering services empower businesses to harness the full
            potential of their data. We specialize in creating scalable data
            pipelines, managing big data ecosystems, and ensuring seamless
            integration across platforms.
          </p>
          <img
            src={img2}
            loading="lazy"
            className="h-[25rem] object-cover rounded-3xl object-center my-4"
            alt="Data Engineering"
          />
          <p className="description">
            From ETL (Extract, Transform, Load) processes to real-time data
            streaming, we deliver end-to-end solutions tailored to your business
            needs. Our expertise spans across tools like Apache Spark, Hadoop,
            Kafka, and cloud platforms like AWS, Azure, and Google Cloud.
            <br />
            <br />
            On the back end, we design and maintain data warehouses and
            lakes—ensuring optimal performance, scalability, and security.
            Whether you're modernizing your data infrastructure or building it
            from scratch, our data engineering solutions enable you to extract
            meaningful insights and drive your business forward.
          </p>
        </div>
      </div>
    </FadeUp>
  );
};

export default DataEngineering;
