import React from "react";
import Header from "../components/Website/Header";
import PageBanner from "../components/Website/PageBanner";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Website/Footer";
import banner from "../assets/portfolio-banner.webp";
import FadeUp from "../components/FadeUp";
import { appPortfolio, sharedPortfolio, webPortfolio } from "../constants";
import GetInTouch from "../components/GetInTouch";
import WhyChooseUs from "../components/WhyChooseUs";

const PortfolioPage = () => {
  return (
    <>
      <Header />
      <PageBanner title="Portfolio" banner={banner} />
      <CallToAction />
      <div className="bg-secondary/5 relative text-primary_text">
        <div className="py-[5rem] flex flex-col gap-5 items-center wrapper">
          <h4 className="heading text-center max-w-6xl mx-auto">Our Works</h4>
          <Works />
        </div>
      </div>
      <WhyChooseUs />
      <div className="mb-[4rem]">
        <GetInTouch />
      </div>
      <Footer />
    </>
  );
};

export default PortfolioPage;

const Works = () => {
  return (
    <FadeUp>
      <div id="portfolio" className="  py-[2rem] relative">
        <div className="blue-bg-shape rotate-[-45deg] top-[2rem] right-3 -z-10"></div>
        <div className="blurred-red-circle h-[25rem] w-[25rem] bottom-[-2rem] left-[-2rem] -z-10"></div>
        <div className="wrapper">
          <div className="flex flex-col items-center gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
              {appPortfolio.concat(webPortfolio,sharedPortfolio).map((item) => (
                <div
                  key={item.id}
                  className="flex justify-self-center aspect-square flex-col gap-3 rounded-md overflow-hidden relative group w-full shadow-2xl"
                >
                  <img
                    src={item.img}
                    alt=""
                    width="300"
                    height="300"
                    loading="lazy"
                    className="h-full w-full object-cover group-hover:scale-110 transition-all duration-300"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-primary flex flex-col gap-2">
                    <h3 className="font-medium text-center text-white text-xl">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </FadeUp>
  );
};
