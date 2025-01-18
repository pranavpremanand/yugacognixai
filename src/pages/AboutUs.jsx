import React, { lazy } from "react";
import Header from "../components/Website/Header";
import Footer from "../components/Website/Footer";
import img1 from "../assets/aboutus-1.webp";
// import img2 from "../assets/aboutus-2.webp";
// import img3 from "../assets/aboutus-3.webp";
import { Link } from "react-router-dom";
import bannerImg from "../assets/about-us-banner.webp";
import bgImg from "../assets/1111.webp";
import mission from "../assets/mission.png";
import vision from "../assets/vision.png";
import GetInTouch from "../components/GetInTouch";
import FadeUp from "../components/FadeUp";

const PageBanner = lazy(() => import("../components/Website/PageBanner"));
const BrandLogos = lazy(() => import("../components/BrandLogos"));

const AboutUs = () => {
  return (
    <>
      <Header />
      <PageBanner
        position="left"
        title={"About Us"}
        banner={bannerImg}
        description="We deliver cutting-edge AI solutions designed for startups, scale-ups, and enterprises. Utilizing the latest technologies, we drive innovation and prepare your business for the future."
      />
      <FadeUp>
        <section className="py-[5rem] wrapper grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col">
            <h1 className="heading">
              Yugacognix AI Leading in Custom Software Development and Advanced
              Tech Solutions
            </h1>
            <p className="description mt-4">
              At Yugacognix AI, we specialize in delivering bespoke digital
              solutions tailored to your business needs. Our expert team of over
              51 full-stack developers, designers, and innovators excels in
              crafting custom software, mobile apps, and web solutions.
              Leveraging cutting-edge technologies such as AI, Machine Learning,
              Data Engineering, and IoT, we drive innovation and growth for
              businesses globally.
              <br />
              <br />
              We also provide Cloud Migration, IT consulting and strategy,
              robust Cybersecurity, IT infrastructure management, and
              user-centric UX/UI design. With a proven track record of
              successful collaborations with over 30 companies, we are committed
              to turning your vision into reality and achieving outstanding
              results.
            </p>
          </div>
          <div className="relative w-full h-full rounded-lg overflow-hidden">
            <img
              loading="lazy"
              src={img1}
              alt="about us"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </section>
      </FadeUp>
      <FadeUp>
        <section className="wrapper">
          <h1 className="heading">Who Are We?</h1>
          <h5 className="text-2xl mt-4">The Beginning of YugaCognixAI :</h5>
          <p className="description mt-3">
            In 2022, when artificial intelligence was beginning to shape the
            future, YugaCognixAI was born with a clear mission: to make
            intelligent technologies accessible and meaningful for everyone. We
            didn’t want to be just another tech company; we wanted to be
            pioneers, bridging the gap between complex AI possibilities and
            real-world solutions that benefit people.
            <br />
            <br />
            Our journey started with a small, passionate team of AI enthusiasts
            who shared a big dream to create AI that doesn’t just process data
            but understands human needs and context. Through late nights,
            creative thinking, and curiosity, we set out to change the way AI
            could impact the world.
          </p>
          <h5 className="text-2xl mt-8">Our Growth and Impact :</h5>
          <p className="description mt-3">
            What began as a startup has grown into a thriving team of over 204+
            talented individuals. We’ve created more than 60+ advanced AI
            solutions, making a difference in industries like healthcare,
            finance, education, and sustainability.
          </p>
          <h5 className="text-2xl mt-8">
            Our achievements speak for themselves :
          </h5>
          <ul className="description mt-3 list-disc list-inside">
            <li>60+ AI-driven solutions deployed globally</li>
            <li> 42+ digital transformation projects for enterprises</li>
            <li>Partnerships with 100+ forward-thinking organizations</li>
            <li>95% client satisfaction rate</li>
          </ul>
          <p className="mt-5 description">
            We don't just build technology — we create smart solutions that
            solve real-world problems. Every project we complete reflects our
            dedication to pushing the limits of AI’s potential.
          </p>
        </section>
      </FadeUp>

      <FadeUp>
        <section className="my-[3rem] py-[3rem]">
          <div className="wrapper">
            <div className="mt-5 grid lg:grid-cols-2 gap-5">
              <div className="bg-primary/10 space-y-6 p-7 rounded-md">
                <h1 className="heading">Core Values</h1>
                {[
                  {
                    id: 1,
                    title: "Cognitive Innovation",
                    desc: "We believe AI should do more than just process information. It should understand, adapt, and create meaningful insights that lead to real change.",
                  },
                  {
                    id: 2,
                    title: "Ethical Intelligence",
                    desc: "We design AI with responsibility, ensuring transparency, fairness, and a human-centered approach in everything we build.",
                  },
                  {
                    id: 3,
                    title: "Continuous Learning",
                    desc: "Just like the AI we develop, we’re always learning and evolving. We embrace new challenges, learn from every project, and continuously improve.",
                  },
                  {
                    id: 4,
                    title: "Collaborative Excellence",
                    desc: "The best ideas come from diverse perspectives. We bring together experts from different fields to create innovative solutions.",
                  },
                  {
                    id: 5,
                    title: "Human-Centric Design",
                    desc: "Technology should enhance human potential, not replace it. Our AI solutions are designed to solve complex challenges and open up new opportunities for people.",
                  },
                ].map((item) => (
                  <div key={item.id} className="space-y-1">
                    <h3 className="text-xl font-semibold">{item.title} :</h3>
                    <p className="description">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 gap-5 h-full">
                {[
                  {
                    id: 1,
                    img: mission,
                    title: "Our Mission",
                    desc: "To create intelligent AI solutions that transform the way people and businesses interact with technology. We aim to make AI accessible, understandable, and impactful across industries.",
                  },
                  {
                    id: 2,
                    img: vision,
                    title: "Our Vision",
                    desc: "To be at the forefront of the AI revolution, building technologies that not only respond to the world but help shape a more efficient, empathetic, and innovative future.",
                  },
                ].map((item) => (
                  <div
                    key={item.id}
                    className="space-y-2 h-full p-5 bg-blue-500/40 gap-5 rounded-md"
                  >
                    <img
                      src={item.img}
                      alt=""
                      className="h-[10rem] object-contain fill-white mb-5"
                    />
                    <h3 className="text-2xl font-semibold">{item.title}</h3>
                    <p className="description">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </FadeUp>

      <FadeUp>
        <section className="wrapper my-[5rem]">
          <div className="py-[5rem] px-4 rounded-lg text-white relative overflow-hidden">
            <img
              loading="lazy"
              src={bgImg}
              alt="about us"
              className="absolute w-full h-full object-cover inset-0"
            />
            <div className="absolute inset-0 bg-primary/50"></div>
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative z-10 flex flex-col items-center gap-2 text-center">
              <h1 className="heading">Be the First With Us</h1>
              <p className="description max-w-2xl">
                There are many reasons to get down and start to get depressed
                about your situation.
              </p>
              <Link to="/contact" className="primary-btn w-fit mt-5">
                Get Started
              </Link>
            </div>
          </div>
        </section>
      </FadeUp>

      {/* <section className="pb-[5rem] wrapper text-center">
        <h1   className="heading">
          Innovative Alliances
        </h1>
        <div className="grid lg:grid-cols-2 gap-7 mt-7">
          <div  className="">
            <h2 className="text-2xl font-semibold">
              "Brands We Collaborate With"
            </h2>
            <p className="description mt-4 text-start">
              At Yugacognix AI, we understand that collaboration is key to
              unlocking innovation and driving success. We are proud to partner
              with industry-leading brands that share our commitment to
              excellence and innovation. Together, we leverage our combined
              expertise to deliver cutting-edge solutions that empower
              businesses and enhance user experiences.
            </p>
            <ul className="flex flex-col gap-2 list-disc text-start mt-5 ml-5 description">
              <li>
                <strong>Strategic Partnerships:</strong> Aligning with leading
                brands to amplify our impact.
              </li>
              <li>
                <strong>Shared Vision:</strong> Collaborating on groundbreaking
                projects that push boundaries.
              </li>
              <li>
                <strong>Industry Expertise:</strong> Harnessing collective
                knowledge to solve complex challenges.
              </li>
              <li>
                <strong>Mutual Growth:</strong> Fostering relationships that
                benefit all parties involved.
              </li>
            </ul>
          </div>
          <img
             
            loading="lazy"
            src={img3}
            alt="about us"
            className="w-full rounded-lg h-[50vh] lg:h-full object-cover object-center mt-7"
          />
        </div>
      </section> */}
      <BrandLogos />
      <GetInTouch />
      <Footer />
    </>
  );
};

export default AboutUs;
