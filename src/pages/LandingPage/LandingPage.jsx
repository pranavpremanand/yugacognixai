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
      <Header />
      <Banner page={page} />
      <BrandLogos />
      <div className="bg-primary/5 py-[4rem] mb-[3rem]">
        <div className="wrapper">
          <div className="grid md:grid-cols-2 items-center gap-5">
            <div className="aspect-video relative h-full w-full rounded-xl overflow-hidden">
              <img
                src={isWebDevelopment ? webImg : appImg}
                className="w-full h-full object-cover"
                alt=""
              />
              <div className="absolute left-0 top-0 w-full p-3 h-full flex items-center justify-center bg-black/60">
                <div className="text-white space-y-3 text-center">
                  <p className="font-sans text-3xl sm:text-4xl font-bold">
                    Book Your Free Consultation
                  </p>
                  <p className="description">
                    YugaCognix AI is an AI company based in Bengaluru. We help
                    organizations kickstart their AI journey. If you’re seeking
                    a solution for your organization to enhance customer
                    support, boost employee productivity, and make the most of
                    your organization’s .
                  </p>
                </div>
              </div>
            </div>
            <Form />
          </div>
        </div>
      </div>
      {/* <GetInTouch /> */}
      {/* <section id="about-us" className="relative py-[5rem]">
        <div className="blurred-red-circle h-[25rem] w-[25rem] top-[-10rem] left-[-10rem] -z-10"></div>
        <div className="wrapper">
          <h1
            className="heading text-center mb-5 md:mb-10"
          >
            About Us
          </h1>
          <div className="grid md:grid-cols-2 gap-5 md:gap-10">
            <p  className="description">
              At Yugacognix AI, we believe that technology should be the driving
              force behind your business's growth and success. Headquartered in
              the tech capital of India, Bengaluru, we are a team of passionate
              innovators and technology enthusiasts committed to delivering
              cutting-edge, future-ready solutions. Our mission is to empower
              businesses to navigate the complexities of the digital era with
              confidence, ensuring they remain competitive and agile in a
              fast-evolving marketplace.
            </p>
            <img
               
              loading="lazy"
              src={aboutImg}
              alt="about"
              className="max-h-[25rem] w-full object-cover"
            />
          </div>
        </div>
      </section> */}

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
              to="/contact-us"
              className="primary-btn text-white w-fit mx-auto"
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* <section
        id="services"
        className="w-screen py-[5rem] min-h-[70vh] flex justify-center relative"
      >
        <div className="blue-bg-shape -z-10 left-[-5%] rotate-45 -translate-y-1/2"></div>
        <div className="blue-bg-shape -z-10 right-[-5%] rotate-45 top-1/2 -translate-y-1/2"></div>
        <div className="wrapper flex flex-col items-center gap-5 z-10">
          <h1 className="heading text-center max-w-6xl whitespace-pre-line capitalize">
            {isWebDevelopment
              ? "Your website is your digital storefront;\n Make sure it reflects your brand’s essence."
              : "In the age of smartphones, a mobile app is the key to customer engagement."}
          </h1>
          <p className="text-center max-w-6xl description">
            {isWebDevelopment
              ? "We believe that a great website should not only look good but also function flawlessly, driving conversions and providing measurable results."
              : "Each app we develop is a powerful tool designed to improve productivity, fostering greater engagement and empowering your company to thrive in an increasingly mobile-focused landscape."}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10 mt-4">
            {servicesList.map((item) => (
              <div className="relative group shadow-2xl group py-[4rem] md:py-[8rem] flex items-center overflow-hidden rounded-xl p-5">
                <img
                  src={item.img}
                  alt={item.title}
                  decoding="async"
                  width="550"
                  height="500"
                  className="absolute group-hover:scale-125 transition-all duration-500 w-full h-full inset-0 z-0 object-cover"
                />
                <div className="absolute w-full h-full inset-0 z-0 bg-black/65"></div>
                <div className="flex flex-col gap-2 items-center relative text-white z-10">
                  <h6 className="font-medium text-center text-3xl">
                    {item.title}
                  </h6>
                  <p className=" text-lg text-center">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <HomePageServicesList />
      <CallToAction />
      <IndustriesWeServe />
      <WhyChooseUs />
      <Portfolio />
      {/* <WorkingProcess /> */}
      {/* <section className="py-[5rem] relative">
        <div className="blue-bg-shape -z-10 right-[-5%] rotate-[125deg] top-1/2 -translate-y-1/2"></div>
        <div className="wrapper mx-auto grid lg:grid-cols-2 gap-5 md:gap-10">
          <div  className="flex flex-col gap-5">
            <h1 className="heading text-center lg:text-start">Why Choose Us</h1>
            <div className="lg:hidden h-full min-h-[25rem] relative">
              <img
                loading="lazy"
                src={whyChooseUsBg}
                className="h-full absolute left-1/2 -translate-x-1/2"
                alt=""
              />
              <img
                loading="lazy"
                src={whyChooseUs}
                className="h-full object-contain absolute left-1/2 -translate-x-1/2 bottom-0"
                alt="why choose us"
              />
            </div>
            <p className="description">
              In today's fast-paced, tech-driven world, staying ahead of the
              curve is not just a competitive advantage—it's a necessity. We
              believe that embracing the right technologies can completely
              transform how businesses operate, engage customers, and achieve
              success. That's why we work closely with our clients to create
              tailor-made digital strategies that leverage innovation to drive
              tangible results.
            </p>
            <div className="flex flex-col-reverse sm:flex-col gap-10 mt-6">
              <button className="primary-btn w-fit">To Know More</button>
              <div className="flex sm:flex-row flex-col sm:items-center gap-5 sm:gap-10">
                <div className="flex items-center gap-2">
                  <div className="bg-gray-400 w-[4.5rem] h-[4.5rem] rounded-full flex items-center justify-center">
                    <img
                      loading="lazy"
                      src={whyChooseUs}
                      alt=""
                      className="object-cover w-[4rem] h-[4rem]"
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-2 h-full">
                    <p className="font-medium text-md">Ronald Richards</p>
                    <p className="text-sm text-gray-600">CEO</p>
                  </div>
                </div>
                <Link
                  to={`tel:${clientDetails.phone}`}
                  className="flex items-center gap-2"
                >
                  <div className="bg-primary w-[4.5rem] h-[4.5rem] rounded-full flex items-center justify-center">
                    <FaPhoneAlt className="text-white text-3xl" />
                  </div>
                  <div className="flex flex-col justify-center gap-2 h-full">
                    <p className="font-medium text-md">Call Us Now</p>
                    <p className="text-sm text-gray-600">
                      {clientDetails.phone}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div
             
            className="lg:block hidden h-full min-h-[25rem] relative"
          >
            <img
              loading="lazy"
              src={whyChooseUsBg}
              className="h-full absolute left-1/2 -translate-x-1/2"
              alt=""
            />
            <img
              loading="lazy"
              src={whyChooseUs}
              className="h-full object-contain absolute left-1/2 -translate-x-1/2 bottom-0"
              alt="why choose us"
            />
          </div>
        </div>
      </section> */}
      <CallToAction />
      <Testimonials />
      <GetInTouch />
      <Footer />
    </>
  );
};

export default memo(LandingPage);
