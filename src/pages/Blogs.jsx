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
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7269313402039136257/",
  },
  {
    id: 2,
    image: require("../assets/blogs/2.png"),
    title:
      "How YugaCognix AI Transforms Investment Decision-Making: A Game-Changer for VCs and Investors",
    desc: "In the high-stakes world of venture capital and investment, making informed decisions has never been more challenging. Investors and venture capitalists face an overwhelming maze of complex financial documents, annual reports, and corporate communications. The traditional approach to investment research is fraught with challenges",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7254803071212392451/",
  },
];
const Blogs = () => {
  return (
    <>
      <Header />
      <PageBanner title="Blogs" banner={banner} />
      <div className="bg-secondary/5 relative text-primary_text">
        <div className="py-[5rem] flex flex-col gap-5 items-center wrapper">
          <h4
            data-aos="fade-up"
            className="heading text-center max-w-6xl mx-auto"
          >
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
    <div
      data-aos="fade-up"
      className="bg-white rounded-xl p-5 relative z-10 group border"
    >
      <Link to={blog.link} target="_blank">
        <img
          src={blog.image}
          alt=""
          width="600"
          height="400"
          className="bg-cover aspect-video w-full rounded-xl group-hover:opacity-85 transition-all duration-200"
        />
      </Link>
      <div className="flex flex-col gap-2 mt-[1rem]">
        <Link
          to={blog.link}
          target="_blank"
          className="text-xl hyphen-auto font-medium leading-tight line-clamp-2 text-ellipsis hover:text-tertiary transition-all duration-200"
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
