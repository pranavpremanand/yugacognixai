import React from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <div className="flex flex-col wrapper gap-3 items-center pt-[4rem] pb-[3rem]">
      <h1 className="heading text-center max-w-7xl mx-auto">
        “Book your Free Strategic Call to Advance Your Business with Generative
        AI!”
      </h1>
      <p className="description text-center max-w-7xl mx-auto">
        Take the first step on this exciting journey by booking a Free Discovery
        Call with us today and let us help you make your organization
        future-ready and unlock the full potential of AI for your organization.
      </p>
      <Link to="/contact-us" className="tertiary-btn rounded-full w-fit mt-6">
        Get Your Free Consultation Today.
      </Link>
    </div>
  );
};

export default CallToAction;
