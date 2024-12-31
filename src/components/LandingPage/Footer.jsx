import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import Logo from "../Logo";

const Footer = () => {
  return (
    <div className="bg-[#0a2146] pt-[3rem] pb-[2rem] text-white">
      <div className="wrapper space-y-7">
        <div className="flex flex-col gap-3 sm:flex-row items-center justify-between">
          <div className="flex flex-col gap-3 items-start">
            {/* <img
            fetchPriority="high"
            src={logo}
            alt="logo"
            width="150"
            height="100"
            className="h-[4rem] object-contain"
          /> */}
            <Logo color="white" />
          </div>
          <div className="">
            <div className="flex mt-3 gap-5 justify-start">
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
        </div>
        <hr />
        <div className="flex text-center md:text-start md:flex-row flex-col-reverse justify-between gap-5">
          <p className="text-center">
            @YugaCognix AI {new Date().getFullYear()}. All rights reserved.
          </p>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
