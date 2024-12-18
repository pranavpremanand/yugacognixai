import React, { useState } from "react";
import { allServices } from "../constants";
import { Link, useLocation } from "react-router-dom";

const HomePageServicesList = () => {
  const [selectedService, setSelectedService] = useState(allServices[0]);
  const { pathname } = useLocation();

  // set active service
  const handleServiceSelect = (item) => {
    setSelectedService(item);
  };
  return (
    <section className="wrapper py-[3rem]">
      {!pathname.includes("/services") && (
        <h1 className="heading text-center mb-8">Explore Our Offering</h1>
      )}
      <div className="grid md:grid-cols-[38%_58%] gap-10 p-5 bg-primary/25 rounded-lg">
        <div className="w-full flex flex-col gap-10">
          <div
            data-aos="fade-up"
            className="bg-[#ECF8FF] p-4 lg:p-6 rounded-lg h-full"
          >
            <h4 className="text-2xl font-medium">Our Services</h4>
            <div className="mt-5 flex flex-wrap md:flex-col gap-3">
              {allServices.map((item) => (
                <button
                  key={item.title}
                  className={`${
                    item.id === selectedService.id
                      ? "primary-btn text-white"
                      : "bg-primary/15"
                  } flex items-center gap-2 justify-center rounded-full text-center px-5 py-3 transition-all duration-300 hover:-translate-y-1`}
                  onClick={() => handleServiceSelect(item)}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-5">
          <div data-aos="fade-up" className="py-[2rem]">
            <h4 className="text-3xl font-medium">{selectedService.title}</h4>
            <img width='500' height='550' src={selectedService.img} className="aspect-video min-h-[10rem] my-[1.5rem] object-cover rounded-lg" alt="" />
            {/* <p
              data-aos="fade-up"
              className="mt-4 description whitespace-pre-line"
            >
              {selectedService.smallPara}
            </p> */}
            <ul>
              {selectedService.keyBenefits.map((item) => (
                <li key={item} className="flex gap-2 mt-4">
                  <span className="w-2 h-2 mt-[.6rem] flex items-center justify-center bg-black/80 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to={selectedService.link}
              className="tertiary-btn rounded-full w-fit mt-6"
            >
              Click for More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageServicesList;
