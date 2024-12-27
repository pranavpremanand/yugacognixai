import React from "react";
import logo from "../../assets/logo/logo.png";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import Logo from "../Logo";

const Footer = () => {
  return (
    <div className="bg-[#0a2146] py-[3rem] text-white">
      <div className="px-5 sm:px-10 flex flex-col gap-3 sm:flex-row items-center justify-between">
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
    </div>
  );
};

export default Footer;
