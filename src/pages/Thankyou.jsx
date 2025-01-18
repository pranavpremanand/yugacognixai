import React from "react";
import Footer from "../components/LandingPage/Footer";
import Logo from "../components/Logo";
import { useNavigate } from "react-router-dom";

const Thankyou = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col justify-between gap-[4rem]">
      <div className="fixed z-40 top-0 left-0 w-full backdrop-blur-md">
        <div className="bg-[#edf6ff]">
          <div className="flex w-full justify-between items-center gap-5 py-5 wrapper">
            <div className="">
              <Logo />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex items-center pt-[10rem] pb-[4rem]">
        <div className="wrapper flex flex-col items-center gap-3">
          <h2 className="heading text-center"> Thank you for your inquiry</h2>
          <p className="description text-center">
            We will get back to you soon.
          </p>
          <button onClick={() => navigate(-1)} className="primary-btn mt-5">
            Go Back
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Thankyou;
