import React, { lazy, memo } from "react";
import Header from "../components/Website/Header";
import Footer from "../components/Website/Footer";
import CallToAction from "../components/CallToAction";
import Testimonials from "../components/Testimonials";
import WhyChooseUs from "../components/WhyChooseUs";

const Portfolio = lazy(() => import("../components/Portfolio"));
const BrandLogos = lazy(() => import("../components/BrandLogos"));
const Banner = lazy(() => import("../components/Website/Banner"));
const TrustWorthySection = lazy(() =>
  import("../components/TrustWorthySection")
);
const IndustriesWeServe = lazy(() => import("../components/IndustriesWeServe"));
const HomePageServicesList = lazy(() =>
  import("../components/HomePageServicesList")
);
const GetInTouch = lazy(() => import("../components/GetInTouch"));

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <BrandLogos />
      <HomePageServicesList />
      <CallToAction />
      <TrustWorthySection />
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

export default memo(Home);
