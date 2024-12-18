import React from "react";
import img1 from "../../assets/services-details/app-development1.webp";
import img2 from "../../assets/services-details/app-development2.webp";

const AppDevelopment = () => {
  return (
    <div className="flex flex-col gap-10">
      <img
        data-aos="fade-up"
        src={img1}
        loading="lazy"
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="app development"
      />
      <div className="flex flex-col gap-4 md:px-5">
        <h2 data-aos="fade-up" className="text-3xl font-semibold">
          App Development
        </h2>
        <p data-aos="fade-up" className="description">
          In an increasingly mobile-driven world, having a powerful app is no longer a luxury—it's a necessity. Mobile apps have revolutionized the way we interact with brands, access services, and perform daily tasks. From streamlining business operations to enhancing customer engagement, the potential of mobile apps is limitless.
          <br />
          <br />
          Successful app development requires an innovative approach, blending user-centric design with robust technology. Our expertise lies in creating intuitive, high-performance apps tailored to your business goals. Whether it’s for iOS, Android, or cross-platform solutions, we ensure your app delivers seamless experiences and drives value for your users.
        </p>
      </div>
      <div className="mt-3 flex flex-col gap-4 md:px-5">
        <h2 data-aos="fade-up" className="text-3xl font-semibold">
          What We Provide
        </h2>
        <p data-aos="fade-up" className="description">
          Your app is a gateway to connect with your audience, and we’re here to make it impactful. Our app development services focus on creating feature-rich, visually appealing, and scalable solutions that cater to your unique requirements. We work with you to transform your vision into a reality.
        </p>
        <img
          data-aos="fade-up"
          src={img2}
          loading="lazy"
          className="h-[25rem] object-cover rounded-3xl object-center my-4"
          alt="app development"
        />
        <p data-aos="fade-up" className="description">
          From sleek, user-friendly interfaces to secure back-end systems, we offer end-to-end app development solutions. Our process involves everything from planning and design to development, testing, and deployment. We leverage modern frameworks and technologies like React Native, Flutter, Swift, and Kotlin to ensure your app is not only visually stunning but also highly functional.
          <br />
          <br />
          On the back-end, we prioritize reliability and performance. Our expertise includes integrating APIs, managing databases, and optimizing server infrastructure to support seamless operations. Whether you're building a consumer app, an enterprise solution, or a gaming platform, we deliver apps that exceed expectations.
        </p>
      </div>
    </div>
  );
};

export default AppDevelopment;
