import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { lazy, memo, Suspense, useEffect } from "react";
import NormalizeSlash from "./components/NormalizeSlash";
import WhatsAppIcon from "./components/WhatsAppIcon";
import { LoadingSpinner } from "./components/LoadingSpinner";
import SpinnerContextProvider, {
  LoadingSpinnerContext,
} from "./components/SpinnerContext";
import { Toaster } from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { clientDetails } from "./constants";

AOS.init({
  once: true,
  duration: 500,
  offset: -70,
});

const Home = lazy(() => import("./pages/Home"));
const OurServices = lazy(() => import("./pages/OurServices"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Thankyou = lazy(() => import("./pages/Thankyou"));
const WebDevelopment = lazy(() =>
  import("./pages/ServicesPages/WebDevelopment")
);
const ServicePageLayout = lazy(() =>
  import("./components/Website/ServicePageLayout")
);
const AppDevelopment = lazy(() =>
  import("./pages/ServicesPages/AppDevelopment")
);
const AIandML = lazy(() => import("./pages/ServicesPages/AIandML"));
const GenerativeAI = lazy(() => import("./pages/ServicesPages/GenerativeAI"));
const DataEngineering = lazy(() =>
  import("./pages/ServicesPages/DataEngineering")
);
const Web3Development = lazy(() =>
  import("./pages/ServicesPages/Web3Development")
);
const SoftwareEngineering = lazy(() =>
  import("./pages/ServicesPages/SoftwareDevelopment")
);
const BlockchainDevelopment = lazy(() =>
  import("./pages/ServicesPages/Blockchain")
);
const IoT = lazy(() => import("./pages/ServicesPages/IoT"));
const ERPDevelopment = lazy(() => import("./pages/ServicesPages/ERPDevelopment"));
const LandingPage = lazy(() => import("./pages/LandingPage/LandingPage"));
const Industries = lazy(() => import("./pages/Industries"));
const Blogs = lazy(() => import("./pages/Blogs"));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));

// Add SEO metadata component
const SEOMetadata = ({ title, description, canonical }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={`https://yourwebsite.com${canonical}`} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={`https://yourwebsite.com${canonical}`} />
  </Helmet>
);

// Add structured data
const OrganizationSchema = () => (
  <Helmet>
    <script type="application/ld+json">
      {JSON.stringify({
        "@type": "Organization",
        name: "Yugacognix AI",
        url: "https://yugacognixai.com",
        logo: "https://www.yugacognixai.com/favicon.ico",
        sameAs: [
          "https://www.linkedin.com/company/yugacognixai/",
          "https://x.com/YugaCognixAI?t=xH2iJ9ix2PR6cTjDkmX9fg&s=09",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: clientDetails.phone,
          contactType: "customer service",
        },
      })}
    </script>
  </Helmet>
);

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <SpinnerContextProvider>
          <LoadingSpinnerContext />
          <Suspense fallback={<LoadingSpinner />}>
            <ScrollToTop />
            <Toaster position="top-center" />
            <OrganizationSchema />
            <NormalizeSlash>
              <WhatsAppIcon />
              <Routes>
                <Route path="*" element={<Navigate to="/" replace />} />
                <Route
                  path="/"
                  element={
                    <>
                      <SEOMetadata
                        title="Yugacognix AI - Home"
                        description="Leading AI solutions provider helping businesses transform with cutting-edge artificial intelligence."
                        canonical="/"
                      />
                      <Home />
                    </>
                  }
                />
                <Route
                  path="/contact"
                  element={
                    <>
                      <SEOMetadata
                        title="Yugacognix AI - Contact Us"
                        description="Get in touch with Yugacognix AI for AI solutions, software development, and more."
                        canonical="/contact"
                      />
                      <ContactUs />
                    </>
                  }
                />
                <Route
                  path="/about-us"
                  element={
                    <>
                      <SEOMetadata
                        title="Yugacognix AI - About Us"
                        description="Learn more about Yugacognix AI, our mission, and our expertise in AI and software development."
                        canonical="/about-us"
                      />
                      <AboutUs />
                    </>
                  }
                />
                <Route
                  path="/services"
                  element={
                    <>
                      <SEOMetadata
                        title="Yugacognix AI - Our Services"
                        description="Discover our range of AI, software development, and blockchain services tailored to your business needs."
                        canonical="/services"
                      />
                      <OurServices />
                    </>
                  }
                />
                <Route
                  path="/industries"
                  element={
                    <>
                      <SEOMetadata
                        title="Yugacognix AI - Industries We Serve"
                        description="Explore how Yugacognix AI delivers innovative solutions across various industries."
                        canonical="/industries"
                      />
                      <Industries />
                    </>
                  }
                />
                <Route
                  path="/blogs"
                  element={
                    <>
                      <SEOMetadata
                        title="Yugacognix AI - Blogs"
                        description="Read insightful articles on AI, machine learning, and emerging technologies."
                        canonical="/blogs"
                      />
                      <Blogs />
                    </>
                  }
                />
                <Route
                  path="/portfolio"
                  element={
                    <>
                      <SEOMetadata
                        title="Yugacognix AI - Portfolio"
                        description="Check out our past projects and case studies showcasing our expertise."
                        canonical="/portfolio"
                      />
                      <PortfolioPage />
                    </>
                  }
                />
                <Route
                  path="/privacy-policy"
                  element={
                    <>
                      <SEOMetadata
                        title="Yugacognix AI - Privacy Policy"
                        description="Read our privacy policy to understand how we handle your data and information."
                        canonical="/privacy-policy"
                      />
                      <PrivacyPolicy />
                    </>
                  }
                />
                <Route
                  path="/thank-you"
                  element={
                    <>
                      <SEOMetadata
                        title="Yugacognix AI - Thank You"
                        description="Thank you for reaching out to Yugacognix AI. We appreciate your interest."
                        canonical="/thank-you"
                      />
                      <Thankyou />
                    </>
                  }
                />
                <Route path="/services" element={<ServicePageLayout />}>
                  <Route path="web-development" element={<WebDevelopment />} />
                  <Route path="app-development" element={<AppDevelopment />} />
                  <Route
                    path="artificial-intelligence-ml"
                    element={<AIandML />}
                  />
                  <Route path="generative-ai" element={<GenerativeAI />} />
                  <Route
                    path="data-engineering"
                    element={<DataEngineering />}
                  />
                  <Route path="web3" element={<Web3Development />} />
                  <Route
                    path="software-development"
                    element={<SoftwareEngineering />}
                  />
                  <Route
                    path="blockchain"
                    element={<BlockchainDevelopment />}
                  />
                  <Route path="iot-development" element={<IoT />} />
                  <Route path="erp-development" element={<ERPDevelopment />} />
                </Route>

                {/* Generic Routes */}
                <Route
                  path="/web-development"
                  element={<LandingPage page={"web-development"} />}
                />
                <Route
                  path="/app-development"
                  element={<LandingPage page={"app-development"} />}
                />
              </Routes>
            </NormalizeSlash>
          </Suspense>
        </SpinnerContextProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default memo(App);

// scroll to top
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
