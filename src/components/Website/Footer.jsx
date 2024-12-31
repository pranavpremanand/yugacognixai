import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import Logo from "../Logo";
import { allServices } from "../../constants";

const Footer = () => {
  return (
    <div className="bg-[#0a2146] pt-[3rem] pb-[2rem] text-white">
      <div className="wrapper space-y-7">
        <div className="flex flex-col gap-3 sm:flex-row justify-between">
          <div className="flex flex-col gap-3 items-start">
            {/* <img
            fetchPriority="high"
            src={logo}
            width="150"
            height="100"
            alt="logo"
            className="h-[4rem] object-contain"
          /> */}
            <Logo color="white" />
            <p className="max-w-[25rem]">
              Follow us on our social media handles to keep up to date with our
              latest work and announcements.
            </p>

            {/* <p className="max-w-[25rem] mt-3">Address: {clientDetails.address}</p> */}
            <div className="flex mt-3 gap-5 items-center">
              <Link to="https://www.linkedin.com/company/yugacognixai/">
                <FaLinkedinIn className="text-2xl" />
              </Link>
              <Link to="https://www.instagram.com/yugacognixai?igsh=dTBud21kYnlxZXV4">
                <AiFillInstagram className="text-2xl" />
              </Link>
              <Link to="https://www.facebook.com/YugaCognixAILLP">
                <GrFacebookOption className="text-2xl" />
              </Link>
              <Link to="https://x.com/YugaCognixAI?t=xH2iJ9ix2PR6cTjDkmX9fg&s=09">
                <FaTwitter className="text-2xl" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col mt-6 sm:mt-0 sm:flex-row gap-7 md:gap-14">
            <div className="flex flex-col gap-3">
              <p className="text-lg font-semibold">Our Services</p>
              {allServices.map((item) => (
                <Link key={item.id} to={item.link} className="cursor-pointer">
                  {item.title}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-lg font-semibold">Quick Links</p>
              <Link to="/about-us" className="cursor-pointer">
                About Us
              </Link>
              <Link to="/services" className="cursor-pointer">
                Services
              </Link>
              <Link to="/contact-us" className="cursor-pointer">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <hr />
        <p className="text-center">
          @YugaCognix AI {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
