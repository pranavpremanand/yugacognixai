import React, { lazy } from "react";
import Header from "../components/Website/Header";
import Footer from "../components/Website/Footer";
import banner from "../assets/services-banner.webp";
import GetInTouch from "../components/GetInTouch";
import img1 from "../assets/solutions/1.png";
import img2 from "../assets/solutions/2.png";
import img3 from "../assets/solutions/3.png";
import WhyChooseUs from "../components/WhyChooseUs";

const HomePageServicesList = lazy(() =>
  import("../components/HomePageServicesList")
);
const PageBanner = lazy(() => import("../components/Website/PageBanner"));
const WorkingProcess = lazy(() => import("../components/WorkingProcess"));
const Testimonials = lazy(() => import("../components/Testimonials"));
const BrandLogos = lazy(() => import("../components/BrandLogos"));

const OurServices = () => {
  return (
    <>
      <Header />
      <PageBanner title={"Our Services"} banner={banner} position={"left"} />
      <section className="py-[5rem]">
        <div className="wrapper">
          <p className="description text-center">
            In today’s fast-paced world, keeping up with technology can be
            challenging. Many businesses face obstacles like inefficiencies and
            missed opportunities, which can slow down growth and progress. At
            Yugacognix AI, we help businesses overcome these challenges by
            simplifying the complex and empowering them to achieve more.
          </p>
          <div className="space-y-6">
            <HomePageServicesList />
            <WhyChooseUs />
            <div className="space-y-6">
              <h1 className="heading text-center">Solution 1</h1>
              <hr />

              {/* 1 */}
              <div className="py-6">
                <div className="text-center">
                  <h3 className="text-xl font-semibold md:text-3xl md:font-medium mb-4 leading-tight">
                    Transform Your Enterprise Financial Data into Insights with
                    Finsight-GPT by YugaCognix AI
                  </h3>
                  <p className="text-lg md:text-xl mb-8">
                    Save countless hours, reduce operating costs, and serve more
                    clients with automated financial data insights—all in one
                    platform.
                  </p>
                </div>

                <div className="max-w-6xl mx-auto mt-[1rem]">
                  <h2 className="text-xl md:text-2xl font-semibold text-primary mb-4">
                    Why Finsight-GPT?
                  </h2>
                  <p className="text-lg md:text-xl mb-8">
                    In today’s fast-paced financial landscape, businesses need
                    more than just numbers—they need actionable insights that
                    can drive growth, streamline operations, and reduce costs.
                    Finsight-GPT is the all-in-one platform tailored for
                    enterprise finance departments, delivering unmatched
                    precision, efficiency, and scalability.
                  </p>

                  <h3 className="text-lg md:text-xl font-semibold text-primary mb-4">
                    Accelerating Your Finance Departments
                  </h3>
                  <ul className="list-disc list-inside text-lg space-y-2 mb-8">
                    <li>
                      Sales Analytics: Gain clarity on sales performance to
                      boost revenues.
                    </li>
                    <li>
                      Profit & Loss (P&L) Analytics: Understand profitability at
                      every level.
                    </li>
                    <li>
                      Receivables & Payables Analytics: Streamline cash flow
                      management for greater efficiency.
                    </li>
                    <li>
                      Cost Analytics: Identify and control cost drivers to
                      improve margins.
                    </li>
                    <li>
                      Working Capital Analytics: Optimize resources and enhance
                      liquidity.
                    </li>
                    <li>
                      Financial Planning & Forecasting: Make smarter,
                      data-driven plans with predictive AI.
                    </li>
                    <li>
                      Tax Analytics: Ensure compliance and reduce tax-related
                      complexities with confidence.
                    </li>
                  </ul>

                  <h3 className="text-lg md:text-xl font-semibold text-primary mb-4">
                    Features for Smarter Financial Decisions
                  </h3>
                  <ul className="list-disc list-inside text-lg space-y-2">
                    <li>
                      Smart Summarization: Turn complex financial data into
                      easy-to-digest summaries.
                    </li>
                    <li>
                      Actionable Insights: Detect trends, anomalies, and key
                      metrics to make informed decisions.
                    </li>
                    <li>
                      Predictive Intelligence: Anticipate future trends with
                      AI-powered forecasting.
                    </li>
                    <li>
                      Market Insights: Stay competitive with a clear
                      understanding of market movements.
                    </li>
                    <li>
                      Interactive Storyboarding: Present insights through
                      engaging visuals for better stakeholder communication.
                    </li>
                    <li>
                      Cost and Growth Optimization: Pinpoint opportunities for
                      savings and revenue growth.
                    </li>
                    <li>
                      Variance Analysis: Compare planned vs. actual outcomes to
                      stay aligned with goals.
                    </li>
                  </ul>
                </div>
              </div>
              <img
                src={img1}
                alt="Solution"
                className="w-full aspect-video object-contain"
              />
              <hr />

              {/* 2 */}
              <div className="py-6 space-y-6">
                <h1 className="heading text-center">Solution 2</h1>
                <hr />
                <div className="py-6 text-center">
                  <h3 className="text-xl font-semibold md:text-3xl md:font-medium mb-4 leading-tight">
                    Streamline Contract Management System with NegotiateGPT by
                    YugaCognix AI
                  </h3>
                  <p className="text-lg md:text-xl mb-8">
                    Optimize your contract lifecycle, unlock hidden savings, and
                    enhance business negotiations with AI-powered contract
                    management—all in one platform.
                  </p>
                </div>

                <div className="max-w-6xl mx-auto mt-[1rem]">
                  <h2 className="text-xl md:text-2xl font-semibold text-primary mb-4">
                    Why NegotiateGPT?
                  </h2>
                  <p className="text-lg md:text-xl mb-8">
                    In the modern business environment, managing contracts
                    efficiently is key to unlocking value and reducing costs.
                    NegotiateGPT is an AI-driven platform designed to automate
                    and optimize contract negotiation, helping businesses save
                    time, improve contract terms, and drive cost savings. With
                    its seamless integration, powerful analytics, and intuitive
                    interface, NegotiateGPT empowers businesses to manage
                    contracts with precision, speed, and intelligence.
                  </p>

                  <h3 className="text-lg md:text-xl font-semibold text-primary mb-4">
                    Revolutionizing Your Contract Management
                  </h3>
                  <ul className="list-disc list-inside text-lg space-y-2 mb-8">
                    <li>
                      Contract Analysis: Automate the extraction and analysis of
                      key contract details for faster decision-making.
                    </li>
                    <li>
                      Negotiation Recommendations: Unlock potential savings by
                      identifying negotiation opportunities based on contract
                      data.
                    </li>
                    <li>
                      Contract Optimization: Improve contract terms by
                      leveraging AI-driven insights for better alignment with
                      business needs.
                    </li>
                    <li>
                      Risk Identification: Detect and mitigate contractual risks
                      early to safeguard your business interests.
                    </li>
                    <li>
                      Comparison Features: Compare contract versions
                      side-by-side to track changes and ensure better
                      compliance.
                    </li>
                    <li>
                      Smart Summarization: Quickly understand contract terms
                      through AI-generated summaries.
                    </li>
                    <li>
                      Legal Compliance: Ensure that your contracts meet legal
                      standards with AI-powered compliance checks.
                    </li>
                    <li>
                      Cost Savings: Reduce indirect costs by 15-20% with
                      data-driven contract optimization.
                    </li>
                  </ul>

                  <h3 className="text-lg md:text-xl font-semibold text-primary mb-4">
                    Features for Smarter Contract Negotiation
                  </h3>
                  <ul className="list-disc list-inside text-lg space-y-2">
                    <li>
                      Contract Summarization: Convert lengthy legal documents
                      into easy-to-understand summaries for quick
                      decision-making.
                    </li>
                    <li>
                      Negotiation Insights: Discover key areas for negotiation,
                      backed by data and AI-driven recommendations.
                    </li>
                    <li>
                      Smart Contract Generation: Automate the creation of
                      tailored contracts that match your business objectives.
                    </li>
                    <li>
                      Contract Comparison: View changes between contract
                      versions with a detailed side-by-side comparison for
                      improved understanding.
                    </li>
                    <li>
                      Interactive User Interface: Easily review, select, and
                      implement negotiation opportunities through an intuitive
                      interface.
                    </li>
                    <li>
                      Predictive Analytics: Forecast negotiation outcomes and
                      trends to better prepare for contract discussions.
                    </li>
                    <li>
                      Efficiency and Automation: Streamline the contract
                      lifecycle with minimal manual effort, increasing
                      productivity and reducing errors.
                    </li>
                    <li>
                      Comprehensive Integration: Seamlessly integrates with your
                      existing contract management system for enhanced data
                      utilization.
                    </li>
                  </ul>
                </div>
              </div>
              <img
                src={img2}
                alt="Solution"
                className="w-full aspect-video object-contain"
              />
              <hr />

              {/* 3 */}
              <div className="py-6 space-y-6">
                <h1 className="heading text-center">Solution 3</h1>
                <hr />
                <div className="py-6 text-center">
                  <h3 className="text-xl font-semibold md:text-3xl md:font-medium mb-4 leading-tight">
                    Revolutionize Investment Research with Key Insight GPT by
                    YugaCognix AI
                  </h3>
                  <p className="text-lg md:text-xl mb-8">
                    Accelerate your investment research, gain actionable
                    insights, and make data-driven investment decisions with
                    AI-powered analysis—all in one platform.
                  </p>
                </div>

                <div className="max-w-6xl mx-auto mt-[1rem]">
                  <h2 className="text-xl md:text-2xl font-semibold text-primary mb-4">
                    Why Key Insight GPT?
                  </h2>
                  <p className="text-lg md:text-xl mb-8">
                    In today's fast-paced investment environment, making
                    informed decisions quickly is essential. Key Insight GPT is
                    an AI-driven platform designed to automate the extraction of
                    critical insights from company reports, enabling investors
                    to save time, improve decision accuracy, and gain a
                    competitive edge. With its seamless integration, advanced
                    analytics, and intuitive interface, Key Insight GPT empowers
                    investors to make smarter, faster decisions with precision
                    and confidence.
                  </p>

                  <h3 className="text-lg md:text-xl font-semibold text-primary mb-4">
                    Revolutionizing Your Investment Research
                  </h3>
                  <ul className="list-disc list-inside text-lg space-y-2 mb-8">
                    <li>
                      Comprehensive Report Analysis: Instantly analyze any
                      company’s annual report for key financial metrics,
                      strategic initiatives, and future outlook.
                    </li>
                    <li>
                      Investment Opportunities: Identify hidden opportunities
                      and areas for growth based on company performance data and
                      strategic initiatives.
                    </li>
                    <li>
                      Competitive Landscape: Compare companies' market share,
                      competitive advantages, and strategic positions.
                    </li>
                    <li>
                      Data-Driven Insights: Unlock actionable insights with
                      AI-driven analysis for more informed investment
                      strategies.
                    </li>
                    <li>
                      Strategic Visualization: Use AI-powered Mermaid diagrams
                      to visualize data, trends, and strategic connections for
                      better decision-making.
                    </li>
                    <li>
                      Market Outlook: Evaluate global expansion plans,
                      disruptions, and long-term market forecasts.
                    </li>
                    <li>
                      Risk Mitigation: Detect potential risks early and adjust
                      strategies accordingly.
                    </li>
                    <li>
                      Performance Metrics: Get real-time updates on key metrics
                      such as EBITDA, revenue trends, and growth rates.
                    </li>
                  </ul>

                  <h3 className="text-lg md:text-xl font-semibold text-primary mb-4">
                    Features for Smarter Investment Decision-Making
                  </h3>
                  <ul className="list-disc list-inside text-lg space-y-2">
                    <li>
                      Smart Summarization: Turn complex financial documents into
                      easy-to-understand summaries for quick analysis.
                    </li>
                    <li>
                      Investment Insights: Identify key areas for potential
                      investment and assess the long-term value of a company.
                    </li>
                    <li>
                      Interactive Dashboards: Review company performance and
                      strategic initiatives with an intuitive, easy-to-navigate
                      interface.
                    </li>
                    <li>
                      Competitive Comparison: Compare multiple companies’ key
                      metrics side-by-side for a clearer understanding of their
                      strengths and weaknesses.
                    </li>
                    <li>
                      Predictive Analytics: Forecast future trends and market
                      performance with AI-powered predictions.
                    </li>
                    <li>
                      Efficient Research Automation: Save time with automated
                      research processes, enabling faster investment decisions.
                    </li>
                    <li>
                      Comprehensive Data Integration: Seamlessly integrate with
                      your existing investment tools and databases for enhanced
                      research and data utilization.
                    </li>
                  </ul>
                </div>
                <img
                  src={img3}
                  alt="Solution"
                  className="w-full aspect-video object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <WorkingProcess />
      <Testimonials />
      <BrandLogos />
      <GetInTouch />
      <Footer />
    </>
  );
};

export default OurServices;
