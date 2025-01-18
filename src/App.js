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
const IoT = lazy(() => import("./pages/ServicesPages/IoT"));
const LandingPage = lazy(() => import("./pages/LandingPage/LandingPage"));
const Industries = lazy(() => import("./pages/Industries"));
const Blogs = lazy(() => import("./pages/Blogs"));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));

function App() {
  return (
    <BrowserRouter>
      <SpinnerContextProvider>
        <LoadingSpinnerContext />
        <Suspense fallback={<LoadingSpinner />}>
          <ScrollToTop />
          <Toaster position="top-center" />
          <NormalizeSlash>
            <WhatsAppIcon />
            <Routes>
              <Route path="*" element={<Navigate to="/" replace />} />
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/services" element={<OurServices />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/thank-you" element={<Thankyou />} />

              {/* Services Detail Routes with Layout */}
              <Route path="/services" element={<ServicePageLayout />}>
                <Route path="web-development" element={<WebDevelopment />} />
                <Route path="app-development" element={<AppDevelopment />} />
                <Route
                  path="artificial-intelligence-ml"
                  element={<AIandML />}
                />
                <Route path="generative-ai" element={<GenerativeAI />} />
                <Route path="data-engineering" element={<DataEngineering />} />
                <Route path="web3" element={<Web3Development />} />
                <Route
                  path="software-development"
                  element={<SoftwareEngineering />}
                />
                <Route path="iot" element={<IoT />} />
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
