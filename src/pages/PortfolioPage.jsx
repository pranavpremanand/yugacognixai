import React, { useState, useMemo } from "react";
import Header from "../components/Website/Header";
import PageBanner from "../components/Website/PageBanner";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Website/Footer";
import banner from "../assets/portfolio-banner.webp";
import FadeUp from "../components/FadeUp";
import { appPortfolio, webPortfolio, aiPortfolio, blockchainPortfolio } from "../constants";
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
  const [activeFilter, setActiveFilter] = useState("all");
  
  // Combine all portfolios and remove duplicates based on title
  const allPortfolio = useMemo(() => {
    const combined = [...webPortfolio, ...appPortfolio, ...aiPortfolio, ...blockchainPortfolio];
    const uniqueMap = new Map();
    
    combined.forEach(item => {
      if (!uniqueMap.has(item.title)) {
        uniqueMap.set(item.title, item);
      }
    });
    
    return Array.from(uniqueMap.values());
  }, []);
  
  // Filter portfolio based on selected filter
  const filteredPortfolio = useMemo(() => {
    if (activeFilter === "all") {
      return allPortfolio;
    } else if (activeFilter === "web") {
      return webPortfolio;
    } else if (activeFilter === "app") {
      return appPortfolio;
    } else if (activeFilter === "ai") {
      return aiPortfolio;
    } else if (activeFilter === "blockchain") {
      return blockchainPortfolio;
    }
    return allPortfolio;
  }, [activeFilter, allPortfolio]);
  
  // Filter button component
  const FilterButton = ({ label, value }) => (
    <button
      onClick={() => setActiveFilter(value)}
      className={`px-4 py-2 rounded-md transition-all duration-300 ${
        activeFilter === value
          ? "bg-primary text-white"
          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
      }`}
    >
      {label}
    </button>
  );
  
  return (
    <FadeUp>
      <div id="portfolio" className="py-[2rem] relative">
        <div className="blue-bg-shape rotate-[-45deg] top-[2rem] right-3 -z-10"></div>
        <div className="blurred-red-circle h-[25rem] w-[25rem] bottom-[-2rem] left-[-2rem] -z-10"></div>
        <div className="wrapper">
          <div className="flex flex-col items-center gap-8">
            {/* Filter buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-4">
              <FilterButton label="All Projects" value="all" />
              <FilterButton label="Web Development" value="web" />
              <FilterButton label="App Development" value="app" />
              <FilterButton label="AI & ML" value="ai" />
              <FilterButton label="Blockchain" value="blockchain" />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
              {filteredPortfolio.map((item) => (
                <div
                  key={item.id + item.title}
                  className="flex justify-self-center aspect-square flex-col gap-3 rounded-md overflow-hidden relative group w-full shadow-2xl"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    width="300"
                    height="300"
                    loading="lazy"
                    className="h-full w-full object-cover group-hover:scale-110 transition-all duration-300"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-primary flex flex-col gap-2">
                    <h3 className="font-medium text-center text-white text-xl">
                      {item.title}
                    </h3>
                    <p className="text-center text-white text-sm opacity-80">
                      {item.service}
                    </p>
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
