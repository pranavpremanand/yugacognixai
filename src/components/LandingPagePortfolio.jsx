import React from "react";
import { appPortfolio, webPortfolio, aiPortfolio, blockchainPortfolio } from "../constants";
import FadeUp from "./FadeUp";
import { Link } from "react-router-dom";

const LandingPagePortfolio = ({ isWebDevelopment }) => {
    // For landing page, show a curated selection of projects (2 from each category)
    const landingPagePortfolio = isWebDevelopment ? webPortfolio : appPortfolio

    return (
        <FadeUp>
            <div id="portfolio" className="py-[2rem] relative">
                <div className="blue-bg-shape rotate-[-45deg] top-[2rem] right-3 -z-10"></div>
                <div className="blurred-red-circle h-[25rem] w-[25rem] bottom-[-2rem] left-[-2rem] -z-10"></div>
                <div className="wrapper">
                    <div className="flex flex-col items-center gap-5">
                        <p className="gradient-text uppercase">Portfolio</p>
                        <h2 className="heading text-center mb-5">Our Selected Projects</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
                            {landingPagePortfolio.map((item) => (
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
                        <div className="flex justify-center mt-7">
                            <Link to="/portfolio" className="primary-btn">
                                View All Projects
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </FadeUp>
    );
};

export default LandingPagePortfolio;