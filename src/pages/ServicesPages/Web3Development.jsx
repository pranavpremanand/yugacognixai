import React from "react";
import img1 from "../../assets/services-details/web3-1.webp";
import img2 from "../../assets/services-details/web3-2.webp";

const Web3Development = () => {
  return (
    <div className="flex flex-col gap-10">
      <img
        data-aos="fade-up"
        src={img1}
        loading="lazy"
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="Web3 Development"
      />
      <div className="flex flex-col gap-4 md:px-5">
        <h2 data-aos="fade-up" className="text-3xl font-semibold">
          Web3 Development
        </h2>
        <p data-aos="fade-up" className="description">
          Web3 is revolutionizing how the internet works, shifting power from
          centralized platforms to decentralized networks. By leveraging
          blockchain and smart contracts, Web3 offers unprecedented security,
          transparency, and user control. As the future of the internet unfolds,
          businesses must embrace these new technologies to remain competitive.
          <br />
          <br />
          Web3 development is not just about creating decentralized applications
          (dApps) but also about integrating innovative technologies that allow
          users to have ownership of their data and digital assets. From
          decentralized finance (DeFi) to NFTs, Web3 opens up a new world of
          possibilities.
        </p>
      </div>
      <div className="mt-3 flex flex-col gap-4 md:px-5">
        <h2 data-aos="fade-up" className="text-3xl font-semibold">
          What We Provide
        </h2>
        <p data-aos="fade-up" className="description">
          Our Web3 development services help businesses embrace the future of
          the decentralized web. Whether you're looking to develop
          blockchain-based applications or integrate smart contracts, we provide
          the expertise to bring your vision to life.
        </p>
        <img
          data-aos="fade-up"
          src={img2}
          loading="lazy"
          className="h-[25rem] object-cover rounded-3xl object-center my-4"
          alt="Web3 Development"
        />
        <p data-aos="fade-up" className="description">
          We specialize in:
          <ul className="list-disc pl-6 mt-2">
            <li>
              Smart Contracts: Automating processes and ensuring security on
              blockchain platforms.
            </li>
            <li>
              Decentralized Applications (dApps): Creating scalable and
              transparent solutions for a decentralized world.
            </li>
            <li>
              Tokenization & NFTs: Exploring opportunities in tokenized assets
              and blockchain-based platforms.
            </li>
          </ul>
          <br />
          <br />
          Whether you're a startup looking to integrate blockchain or an
          enterprise aiming to scale your Web3 presence, we offer tailored
          solutions that fit your needs. Our team is well-versed in the latest
          blockchain platforms like Ethereum, Solana, and Polkadot, ensuring
          that your project is built with the best tools available.
        </p>
      </div>
    </div>
  );
};

export default Web3Development;
