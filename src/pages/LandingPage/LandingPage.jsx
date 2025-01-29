import React, { lazy, memo } from "react";
import Header from "../../components/LandingPage/Header";
import {
  appDevelopmentServices,
  webDevelopmentServices,
} from "../../constants";
import Footer from "../../components/LandingPage/Footer";
import CallToAction from "../../components/CallToAction";
import Form from "../../components/Form";
import webImg from "../../assets/landingpage-services-imgs/web-development.webp";
import appImg from "../../assets/landingpage-services-imgs/app-development.webp";
import bgImg from "../../assets/our-expertise-bg.png";
import { Link } from "react-router-dom";
import WhyChooseUs from "../../components/WhyChooseUs";
import PopupForm from "../../components/PopupForm";

const GetInTouch = lazy(() => import("../../components/GetInTouch"));
const Testimonials = lazy(() => import("../../components/Testimonials"));
const HomePageServicesList = lazy(() =>
  import("../../components/HomePageServicesList")
);
const TrustWorthySection = lazy(() =>
  import("../../components/TrustWorthySection")
);
const IndustriesWeServe = lazy(() =>
  import("../../components/IndustriesWeServe")
);
const BrandLogos = lazy(() => import("../../components/BrandLogos"));
const Portfolio = lazy(() => import("../../components/Portfolio"));
const Banner = lazy(() => import("../../components/LandingPage/Banner"));

const LandingPage = ({ page }) => {
  const isWebDevelopment = Boolean(page === "web-development");
  const servicesList = isWebDevelopment
    ? webDevelopmentServices
    : appDevelopmentServices;
  return (
    <>
      <PopupForm storageKey={`popup-${isWebDevelopment ? "web" : "app"}-form`} />
      <Header />
      <Banner page={page} />
      <BrandLogos />
      <div className="bg-primary/5 py-[4rem] mb-[3rem]">
        <div className="wrapper">
          <div className="grid md:grid-cols-2 items-center gap-5">
            <div className="md:aspect-video relative h-full w-full rounded-xl overflow-hidden">
              <img
                src={isWebDevelopment ? webImg : appImg}
                className="w-full h-full object-cover"
                alt=""
              />
              <div className="absolute left-0 top-0 w-full p-3 h-full flex items-center justify-center bg-black/60">
                <div className="p-5 text-white space-y-3 text-center">
                  <p className="font-sans text-3xl sm:text-4xl font-bold">
                    Book Your Free Consultation
                  </p>
                  <p className="description">
                    YugaCognix AI is an AI company based in Bengaluru. We help
                    organizations kickstart their AI journey.
                  </p>
                </div>
              </div>
            </div>
            <Form />
          </div>
        </div>
      </div>

      <TrustWorthySection />

      <section
        id="services"
        className="my-[3rem] py-[5rem] bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="wrapper text-white text-center">
          <h1 className="heading text-start mb-2">
            {isWebDevelopment
              ? "Professional Website Design and Development Company"
              : "Professional Mobile App Development Company"}
          </h1>
          <p className="description text-white/70">
            {isWebDevelopment
              ? "Our Full-Stack Web Developers have the programming expertise and industry-specific experience to build, integrate, and customize your website or application to align perfectly with your vision."
              : "Our Mobile App Developers have the programming expertise and industry-specific experience to build, integrate, and customize your website or application to align perfectly with your vision."}
          </p>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {servicesList.map((item) => (
              <div
                key={item.id}
                className="rounded-xl flex flex-col items-center p-5 bg-white hover:bg-[#011225] hover:text-white text-[#22092D] transition-all duration-300"
              >
                <img
                  className="w-[6rem] object-contain"
                  src={item.icon}
                  alt=""
                />
                <h6 className="mt-5 font-medium text-lg">{item.title}</h6>
                <p className="description mt-3">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="w-full flex justify-center pt-[2rem] lg:pt-[6rem]">
            <Link
              to="/contact"
              className="primary-btn text-white w-fit mx-auto"
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </section>
      <HomePageServicesList />
      <CallToAction />
      <IndustriesWeServe />
      <WhyChooseUs />
      <Portfolio />
      <CallToAction />
      <Testimonials />
      <GetInTouch />
      <Footer />
    </>
  );
};

export default memo(LandingPage);
