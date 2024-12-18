// work process
import process1 from "./assets/working-process-1.png";
import process2 from "./assets/working-process-2.png";
import process3 from "./assets/working-process-3.png";
import process4 from "./assets/working-process-4.png";

// web development services icons
import ecomWebIcon from "./assets/icons/online-shopping.png";
import socialWebIcon from "./assets/icons/socialmedia.png";
import landingWebIcon from "./assets/icons/landing-page.png";
import customWebIcon from "./assets/icons/software-development.png";

// app development services icons
import iosAppIcon from "./assets/icons/ios-development.png";
import androidAppIcon from "./assets/icons/android-development.png";
import flutterAppIcon from "./assets/icons/flutter-development.png";
import hybridAppIcon from "./assets/icons/hybrid-app-development.png";

// all services images
import service1 from "./assets/services-details/web-development1.webp";
import service2 from "./assets/services-details/app-development1.webp";
import service3 from "./assets/services-details/ai1.webp";
import service4 from "./assets/services-details/generative-ai-1.webp";
import service5 from "./assets/services-details/data-engineering-1.webp";
import service6 from "./assets/services-details/web3-1.webp";
import service7 from "./assets/services-details/software-development-1.webp";
import service8 from "./assets/services-details/iot-1.webp";

// clients
import client1 from "./assets/client-1.png";
import client2 from "./assets/client-2.png";
import client3 from "./assets/client-3.png";
import client4 from "./assets/client-4.png";

// client details
export const clientDetails = {
  phone: "917989856338",
  address:
    "101, UNTI 101 OXFORD TOWERS, 139 HAL OLD AIRPORT ROAD, KODIHALLI, - 560008",
};

// landing page header links
export const landingPageHeaderLinks = [
  {
    id: 1,
    title: "Home",
    link: "banner",
  },
  {
    id: 2,
    title: "About Us",
    link: "about-us",
  },
  {
    id: 3,
    title: "Services",
    link: "services",
  },
  // {
  //   id: 4,
  //   title: "Contact Us",
  //   link: "contact",
  // },
];

// website pages
export const websitePagesLinks = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Industries",
    link: "/industries",
  },
  {
    id: 3,
    title: "Our Services",
    link: "/services",
  },
];

// working process
export const workingProcess = [
  {
    id: 1,
    title: "In-Depth Consultation",
    description: "Understand your needs, discuss goals.",
    img: process1,
  },
  {
    id: 2,
    title: "Strategic Planning",
    description: "Create roadmap, define KPIs, set timeline.",
    img: process2,
  },
  {
    id: 3,
    title: "Design and Development",
    description: "Design visually stunning, develop functional website",
    img: process3,
  },
  {
    id: 4,
    title: "Rigorous Testing",
    description: "Ensure optimal performance, compatibility, security",
    img: process4,
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerence Websites",
    icon: ecomWebIcon,
    img: require("./assets/landingpage-services-imgs/ecommerce.webp"),
    description:
      "Empowering your online business with tailored ecommerce solutions. Our platforms boost customer engagement, streamline operations, and drive revenue growth. ",
  },
  {
    id: 2,
    title: "Social Media Websites",
    icon: socialWebIcon,
    img: require("./assets/landingpage-services-imgs/socialmedia.webp"),
    description:
      "Get custom social media websites that captivate and engage your audience, driving growth and brand loyalty effortlessly.",
  },
  {
    id: 3,
    title: "Landing Websites",
    icon: landingWebIcon,
    img: require("./assets/landingpage-services-imgs/landing.webp"),
    description:
      " Creating high-converting landing pages that capture attention and drive action. Tailored designs that showcase your brand’s message and maximize conversions.",
  },
  {
    id: 4,
    title: "Custom Websites",
    icon: customWebIcon,
    img: require("./assets/landingpage-services-imgs/customweb.webp"),
    description:
      "Delivering tailor-made websites designed to meet your unique business needs. Our solutions blend creativity and functionality for an exceptional online experience.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    icon: iosAppIcon,
    img: require("./assets/landingpage-services-imgs/ios.webp"),
    description:
      "Our skilled developers work with both Swift and Objective-C to build robust and efficient apps. We optimize your app for performance, speed, and responsiveness.",
  },
  {
    id: 2,
    title: "Android App Development",
    icon: androidAppIcon,
    img: require("./assets/landingpage-services-imgs/android.webp"),
    description:
      "We design and develop tailor-made Android apps that align with your vision and business goals.Proficient in both Java and Kotlin, we build robust and efficient apps.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    icon: flutterAppIcon,
    img: require("./assets/landingpage-services-imgs/flutter.webp"),
    description:
      "Flutter allows you to build apps for both iOS and Android using a single codebase. While Flutter's default web app architecture presents challenges, we can overcome them with smart strategies. ",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    icon: hybridAppIcon,
    img: require("./assets/landingpage-services-imgs/hybrid.webp"),
    description:
      "We build feature-rich hybrid apps tailored to your business needs. We create mobile-friendly apps that work seamlessly across iOS and Android devices.",
  },
];

// all services
export const allServices = [
  {
    id: 1,
    img: service2,
    title: "Web Development",
    link: "/services/web-development",
    smallPara:
      "In today's interconnected world, website applications have become an integral part of our daily lives. From e-commerce platforms to social media networks, from educational resources to government services, these digital tools have revolutionized the way we interact, communicate, and conduct business. The development of website applications is a complex process that involves a blend of creativity, technical expertise, and a deep understanding of user needs.\n\nAt the core of website application development lies the interplay of front-end and back-end development. The front-end, or client-side, is what the user sees and interacts with.",
    keyBenefits: [
      "Responsive and user-friendly design.",
      "Custom-built solutions tailored to your business needs.",
      "Secure and scalable architecture.",
      "Seamless integration with third-party tools and APIs.",
    ],
  },
  {
    id: 2,
    img: service1,
    title: "Mobile App Development",
    link: "/services/app-development",
    smallPara:
      "Mobile applications have become an integral part of our daily lives, transforming the way we communicate, consume information, and conduct business. The development of mobile apps requires a unique set of skills and considerations, as compared to website development.\n\nOne of the key differences between mobile and web app development is the platform-specific nature of mobile apps. While web apps can be accessed on any device with a web browser, mobile apps are designed for specific platforms, such as iOS and Android. This necessitates developing separate versions for each platform, often using different programming languages and development environments.",
    keyBenefits: [
      "Cross-platform compatibility for iOS and Android.",
      "User-centric design for better engagement.",
      "Robust performance and offline capabilities.",
      "Advanced security features for data protection.",
    ],
  },
  {
    id: 3,
    img: service3,
    title: "Artificial Intelligence & ML",
    link: "/services/artificial-intelligence-ml",
    smallPara:
      "Artificial Intelligence and Machine Learning (AI & ML) are transformative technologies driving innovation across industries. From automating tasks to delivering data-driven insights, AI & ML are redefining how businesses operate and solve complex challenges.\n\nThese technologies enable systems to learn from data and make informed decisions, improving efficiency and accuracy. Whether it's customer personalization, predictive analytics, or intelligent automation, AI & ML offer endless possibilities for growth and transformation.",
    keyBenefits: [
      "Automates repetitive tasks and saves time.",
      "Enables smarter decision-making with real-time data insights.",
      "Drives customer engagement through personalized experiences.",
      "Enhances operational efficiency with predictive analytics.",
    ],
  },
  {
    id: 4,
    img: service4,
    title: "Generative AI",
    link: "/services/generative-ai",
    smallPara:
      "Generative AI is at the forefront of innovation, enabling machines to create new content, from text and images to music and designs. By leveraging advanced machine learning models, such as GANs and transformers, generative AI has applications across creative industries, content generation, and problem-solving.\n\nThis technology empowers businesses to streamline creative processes, produce realistic simulations, and generate innovative solutions tailored to specific needs.",
    keyBenefits: [
      "Accelerates content creation and design processes.",
      "Delivers high-quality, AI-generated media and visuals.",
      "Enables realistic simulations and prototyping.",
      "Fuels innovation with AI-driven creativity.",
    ],
  },
  {
    id: 5,
    img: service5,
    title: "Data Engineering",
    link: "/services/data-engineering",
    smallPara:
      "Data Engineering focuses on designing, building, and maintaining scalable data pipelines and systems that enable organizations to harness the power of their data. It ensures the availability of high-quality, structured data for analytics and decision-making.\n\nFrom data integration and ETL processes to real-time analytics platforms, data engineering empowers businesses to make data-driven decisions with efficiency and accuracy.",
    keyBenefits: [
      "Builds scalable and efficient data pipelines.",
      "Ensures data quality and reliability for analytics.",
      "Optimizes storage and processing of large datasets.",
      "Enables real-time insights for informed decision-making.",
    ],
  },
  {
    id: 6,
    img: service6,
    title: "Web3 Development",
    link: "/services/web3",
    smallPara:
      "Web3 represents the next generation of the internet, built on blockchain technology to enable decentralized applications (dApps) and smart contracts. It empowers users with greater control over their data and digital assets while fostering trustless interactions.\n\nWeb3 development is revolutionizing industries by enabling peer-to-peer transactions, tokenization, and innovative decentralized solutions, driving a new era of digital transformation.",
    keyBenefits: [
      "Enables decentralized and trustless applications.",
      "Provides secure and transparent digital ecosystems.",
      "Empowers users with data ownership and control.",
      "Facilitates tokenization and innovative business models.",
    ],
  },
  {
    id: 7,
    img: service7,
    title: "Software Development",
    link: "/services/software-development",
    smallPara:
      "Software development is the foundation of modern technology, enabling businesses to create tailored solutions that address their unique needs. From desktop applications to enterprise-grade systems, software development powers innovation and operational efficiency.\n\nBy blending technical expertise with business insights, software development delivers secure, scalable, and user-friendly applications that drive growth and transformation.",
    keyBenefits: [
      "Custom-built solutions for unique business requirements.",
      "Robust and scalable architecture.",
      "Seamless integration with existing systems.",
      "Optimized performance and user-friendly interfaces.",
    ],
  },
  {
    id: 8,
    img: service8,
    title: "IoT",
    link: "/services/iot",
    smallPara:
      "The Internet of Things (IoT) is revolutionizing how devices and systems interact, enabling seamless connectivity and intelligent automation. IoT solutions enhance operational efficiency, monitor processes in real-time, and improve decision-making through actionable insights.\n\nIoT is transforming industries, from smart homes and cities to manufacturing and healthcare, delivering innovative, data-driven solutions that shape the future.",
    keyBenefits: [
      "Facilitates real-time monitoring and automation.",
      "Improves operational efficiency and productivity.",
      "Enhances decision-making with actionable insights.",
      "Connects and manages devices seamlessly.",
    ],
  },
];

// trusted clients
export const clients = [
  {
    id: 1,
    img: client1,
  },
  {
    id: 2,
    img: client2,
  },
  {
    id: 3,
    img: client3,
  },
  {
    id: 4,
    img: client4,
  },
];

// testimonials
export const testimonials = [
  {
    id: 1,
    img: "",
    name: "Rohan Sharma",
    title: "CEO of ShopSmart Pvt Ltd",
    description:
      "YugaCognixAI provided exceptional service and quality. Their attention to detail and creativity set them apart from the rest.",
  },
  {
    id: 2,
    img: "",
    name: "Priya Bansal",
    title: "Managing Director of SafeFunds Financial Group",
    description:
      "Working with YugaCognixAI was a fantastic experience. They brought our vision to life with impeccable design and seamless functionality.",
  },
  {
    id: 3,
    img: "",
    name: "Vikram Rao",
    title: "Operations Manager at FreshMart Retail Solutions",
    description:
      "The team at YugaCognixAI delivered beyond our expectations. Professional, innovative, and always on time – highly recommended!",
  },
  {
    id: 4,
    img: "",
    name: "Dr. Meera Nair",
    title: "Co-Founder of HealthNet Solutions",
    description:
      "YugaCognixAI transformed our website into a stunning, user-friendly platform. Their expertise and dedication are truly unmatched!",
  },
];

// industry company serve
export const industriesCompanyServe = [
  {
    id: 1,
    title: "Healthcare",
    img: require("./assets/industries/Healthcare.webp"),
    desc: "Transforming patient care and operations with AI-powered diagnostics, data analytics, and telemedicine solutions.",
  },
  {
    id: 2,
    title: "Retail",
    img: require("./assets/industries/E-commerce & Retail.webp"),
    desc: "Enhancing customer experiences with personalized recommendations, inventory management, and secure online transactions.",
  },
  {
    id: 3,
    title: "Fintech",
    img: require("./assets/industries/Fintech.webp"),
    desc: "Streamlining financial services with AI-driven fraud detection, automated customer support, and predictive analytics.",
  },
  {
    id: 4,
    title: "Insurance",
    img: require("./assets/industries/Insurance.webp"),
    desc: "Improving risk assessment, claims processing, and customer engagement through advanced analytics and AI solutions.",
  },
  {
    id: 5,
    title: "Hospitality",
    img: require("./assets/industries/Hospitality.webp"),
    desc: "Enhancing guest experiences with smart booking systems, personalized services, and efficient resource management.",
  },
  {
    id: 6,
    title: "Manufacturing",
    img: require("./assets/industries/Manufacturing.webp"),
    desc: "Driving automation, predictive maintenance, and operational efficiency with AI, machine learning, and IoT technologies.",
  },
  {
    id: 7,
    title: "On Demand",
    img: require("./assets/industries/On Demand.webp"),
    desc: "Empowering on-demand platforms with intelligent matchmaking, real-time tracking, and user-centric analytics.",
  },
  {
    id: 8,
    title: "Food & Restaurant",
    img: require("./assets/industries/Food & Restaurant.webp"),
    desc: "Optimizing food services with smart inventory, personalized menus, and efficient order management solutions.",
  },
  {
    id: 9,
    title: "Logistics",
    img: require("./assets/industries/Logistics & Supply Chain.webp"),
    desc: "Enhancing logistics, inventory, and supply chain management with AI and IoT-enabled tracking and optimization.",
  },
  {
    id: 10,
    title: "Education",
    img: require("./assets/industries/Education.webp"),
    desc: "Personalized learning experiences, predictive analytics for student outcomes, and automated administrative processes using AI and ML.",
  },
  {
    id: 11,
    title: "Game",
    img: require("./assets/industries/Game.webp"),
    desc: "Elevating game development with AI-enhanced graphics, player behavior analytics, and immersive experiences.",
  },
];

// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    img: require("./assets/web_projects/1.webp"),
    title: "FE-Finance",
  },
  {
    id: 2,
    img: require("./assets/web_projects/2.webp"),
    title: "Ocxee",
  },
  {
    id: 3,
    img: require("./assets/web_projects/3.webp"),
    title: "Leaderbridge",
  },
  {
    id: 4,
    img: require("./assets/web_projects/4.webp"),
    title: "Gigzio",
  },
  {
    id: 5,
    img: require("./assets/web_projects/5.webp"),
    title: "FE Group",
  },
  {
    id: 6,
    img: require("./assets/web_projects/6.webp"),
    title: "V Talkz",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: require("./assets/app_projects/1.webp"),
    title: "PartEx",
  },
  {
    id: 2,
    img: require("./assets/app_projects/2.webp"),
    title: "Find A Driver",
  },
  {
    id: 3,
    img: require("./assets/app_projects/3.webp"),
    title: "Glowsy",
  },
  {
    id: 4,
    img: require("./assets/app_projects/4.webp"),
    title: "Artisan Express",
  },
  {
    id: 5,
    img: require("./assets/app_projects/5.webp"),
    title: "House of Deliverance",
  },
];
