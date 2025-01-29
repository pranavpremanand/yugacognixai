import React from "react";
import { Link } from "react-router-dom";
import PageBanner from "../components/Website/PageBanner";
import Header from "../components/Website/Header";
import Footer from "../components/Website/Footer";
import banner from "../assets/blogs-banner.webp";
import CallToAction from "../components/CallToAction";

export const blogs = [
  {
    id: 1,
    image: require("../assets/blogs/1.png"),
    title:
      "Web3: The Internet's Next Evolution - Building a User-Owned Digital Future",
    desc: "The internet is undergoing a fundamental transformation. While Web2 brought us social media giants and digital marketplaces, Web3 promises something far more revolutionary: a truly decentralized internet where users don't just interact with applications – they own them.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7254803071212392451/",
  },
  {
    id: 2,
    image: require("../assets/blogs/2.png"),
    title:
      "How YugaCognix AI Transforms Investment Decision-Making: A Game-Changer for VCs and Investors",
    desc: "In the high-stakes world of venture capital and investment, making informed decisions has never been more challenging. Investors and venture capitalists face an overwhelming maze of complex financial documents, annual reports, and corporate communications. The traditional approach to investment research is fraught with challenges",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7269313402039136257/",
  },
  {
    id: 3,
    image: require("../assets/blogs/3.png"),
    title: "Revolutionizing App Development Services with Yugacognix AI",
    desc: "In the dynamic digital era, applications have become the cornerstone of business success, enabling organizations to connect, innovate, and grow. At Yugacognix AI, we specialize in delivering cutting-edge app development services that not only meet today’s demands but also prepare businesses for tomorrow’s challenges.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7268115727415484417/",
  },
  {
    id: 4,
    image: require("../assets/blogs/4.png"),
    title:
      "Revolutionizing Contract Negotiations: YugaCognix AI's Breakthrough Contract Negotiator GPT",
    desc: "In the intricate world of business operations, contract negotiations have long been a time-consuming and error-prone process. YugaCognix AI is changing the game with its innovative Contract Negotiator GPT (CNGPT), a cutting-edge solution designed to transform contract management from a tedious manual task to a streamlined, intelligent process.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7274298612904329216/",
  },
  {
    id: 5,
    image: require("../assets/blogs/5.png"),
    title:
      "Developing a Profitable Poker App for the Online Market: A Comprehensive Guide?",
    desc: "Poker is a timeless card game cherished for its unique blend of chance, strategy, and skill. While traditionally played in person with friends, family, or in casinos, the digital age has revolutionized how poker enthusiasts connect and compete. The rise of mobile apps and online platforms has made poker more accessible than ever, opening a wealth of opportunities for businesses in the gaming sector.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7284428609103032320/",
  },
  {
    id: 6,
    image: require("../assets/blogs/6.png"),
    title:
      "How to Develop an E-commerce Website Like Bluejestic: A Comprehensive Guide",
    desc: "In the ever-evolving digital landscape, e-commerce has become the cornerstone of modern business. Platforms like Bluejestic have set a benchmark for seamless shopping experiences, robust performance, and customer-centric design. If you're envisioning building an e-commerce website like Bluejestic, this guide will walk you through the essential steps and strategies to turn your vision into reality.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7285524800729440256/",
  },
  {
    id: 7,
    image: require("../assets/blogs/7.png"),
    title:
      "Real Estate Website Development: Your Complete Guide to Digital Success in 2025 By YUGACOGNIX AI",
    desc: "Are you ready to transform your real estate business with a custom website that drives consistent leads? At Yugacognix AI, we specialize in building high-performance real estate websites that not only look stunning but also deliver measurable results. In this comprehensive guide, we’ll show you why professional website development is essential, the features you need, and how we can help you achieve digital success.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7287402770305880064/",
  },
];
const Blogs = () => {
  return (
    <>
      <Header />
      <PageBanner title="Blogs" banner={banner} />
      <div className="bg-secondary/5 relative text-primary_text">
        <div className="py-[5rem] flex flex-col gap-5 items-center wrapper">
          <h4 className="heading text-center max-w-6xl mx-auto">
            Exploring the Edge of Digital Transformation
          </h4>
          <div className="mt-[2rem] grid sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-7">
            {blogs.map((blog) => (
              <BlogItem key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </div>
      <div className="mb-[4rem]">
        <CallToAction />
      </div>
      <Footer />
    </>
  );
};

export default Blogs;

// blog item
export const BlogItem = ({ blog }) => {
  return (
    <div className="bg-white rounded-xl p-5 relative z-10 group border">
      <Link to={blog.link} target="_blank">
        <img
          src={blog.image}
          alt=""
          width="600"
          height="400"
          className="bg-cover aspect-video w-full rounded-xl group-hover:opacity-85 transition-all duration-200"
        />
      </Link>
      <div className="flex flex-col gap-3 mt-[1rem]">
        <Link
          to={blog.link}
          target="_blank"
          className="text-[1.5rem] hyphen-auto font-medium leading-tight line-clamp-2 text-ellipsis hover:text-tertiary transition-all duration-200"
        >
          {blog.title}
        </Link>
        <p className="description text-gray-800 line-clamp-3 text-ellipsis hyphen-auto">
          {blog.desc}
        </p>
      </div>
      <div className="mt-6 w-full flex justify-center">
        <Link
          to={blog.link}
          target="_blank"
          className="w-full text-center bg-background border border-primary text-primary px-5 py-3 rounded-full hover:bg-primary hover:text-white hover:-translate-y-1 duration-300 transition-all"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};
