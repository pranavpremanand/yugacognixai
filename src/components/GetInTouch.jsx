import React, { useEffect, useRef, useState } from "react";
import { allServices } from "../constants";
import { BiCaretRight } from "react-icons/bi";

const GetInTouch = () => {
  return (
    <div id="contact" className="py-[5rem] relative">
      <div className="blurred-red-circle h-[25rem] w-[25rem] bottom-[2rem] right-3 -z-10"></div>
      <div className="blue-bg-shape bottom-[-2rem] left-[-2rem] -z-10 rotate-[-45deg]"></div>
      <div className="wrapper grid grid-cols-1 lg:grid-cols-2 justify-items-center lg:justify-items-stretch items-center gap-7">
        <div data-aos="fade-right" className="flex flex-col gap-5">
          <h1 className="heading text-center lg:text-start">
            Ready to Lead with Innovation? <br /> Let’s Start Your Project
          </h1>
          <p className="description text-center lg:text-start">
            Reach out to discover how our tech solutions can propel your
            business forward.
          </p>
        </div>
        <InquiryForm />
      </div>
    </div>
  );
};

export default GetInTouch;

export const InquiryForm = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(allServices[0].title);
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Handler for clicking outside of the dropdown
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false); // Close the dropdown
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div data-aos="fade-left" className="flex flex-col items-start gap-3 group">
      <p className="gradient-text uppercase">Let's connect</p>
      <div className="bg-gradient-to-b from-primary to-primary/70 rounded-2xl w-fit p-7">
        <h2 className="text-3xl text-white font-medium">
          Connect With Our Team to Get Started!
        </h2>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="grid grid-cols-1 gap-3 mt-3"
        >
          <div className="grid lg:grid-cols-2 gap-3">
            <div className="">
              <label className="text-white">Name</label>
              <input
                type="text"
                className="w-full outline-none p-3 rounded-lg  "
                required
                autoComplete="off"
                placeholder="Enter your name"
              />
            </div>
            <div className="">
              <label className="text-white">Email</label>
              <input
                type="email"
                className="w-full outline-none p-3 rounded-lg  "
                required
                autoComplete="off"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-3">
            <div className="">
              <label className="text-white">Subject</label>
              <input
                type="text"
                className="w-full outline-none p-3 rounded-lg  "
                required
                autoComplete="off"
                placeholder="Enter subject"
              />
            </div>
            <div className="">
              <label className="text-white">Phone Number</label>
              <input
                type="tel"
                className="w-full outline-none p-3 rounded-lg  "
                autoComplete="off"
                placeholder="Enter your phone number"
              />
            </div>
          </div>
          <div className="flex flex-col relative" ref={dropdownRef}>
            <label className="text-white">Service You Are Interested In</label>
            <div
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="p-3 bg-background rounded-lg cursor-default flex justify-between items-center"
            >
              {selectedService}
              <BiCaretRight
                className={`${
                  dropdownOpen && "rotate-90"
                } transition-all duration-200 text-2xl text-primary`}
              />
            </div>
            {dropdownOpen && (
              <div
                name=""
                id=""
                className="outline-none rounded-lg overflow-hidden top-[5rem] absolute bg-gray-50 w-full"
              >
                {allServices.map((item) => (
                  <div
                    key={item.id}
                    className="hover:bg-primary/20 p-3 cursor-pointer"
                    value={item.title}
                    onClick={() => {
                      setSelectedService(item.title);
                      setDropdownOpen(false);
                    }}
                  >
                    <span className="">{item.title}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div>
            <label className="text-white">Message</label>
            <textarea
              type="text"
              rows="4"
              placeholder="Enter your message here"
              className="w-full outline-none p-3 rounded-lg  "
              required
              autoComplete="off"
            />
          </div>
          <button className="mt-4 bg-background border border-white text-primary px-5 py-3 rounded-full hover:bg-primary hover:text-white hover:-translate-y-1 duration-300 transition-all">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};
