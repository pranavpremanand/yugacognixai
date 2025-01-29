import React from "react";
import img1 from "../../assets/services-details/blockchain2.webp";
import img2 from "../../assets/services-details/blockchain1.webp";
import FadeUp from "../../components/FadeUp";

const Blockchain = () => {
  return (
    <FadeUp>
      <div className="flex flex-col gap-10">
        <img
          src={img1}
          loading="lazy"
          className="h-[25rem] object-cover rounded-3xl object-center"
          alt="Blockchain Development"
        />
        <div className="flex flex-col gap-4 md:px-5">
          <h2 className="text-3xl font-semibold">Blockchain Development</h2>
          <p className="description">
            Blockchain technology is revolutionizing industries by providing
            secure, transparent, and decentralized solutions. From finance and
            healthcare to supply chain and gaming, blockchain ensures data
            integrity, eliminates intermediaries, and enhances trust.
            <br />
            <br />
            At the core of blockchain development lies smart contracts, digital
            ledgers, and decentralized applications (dApps). Whether you're
            looking to develop a secure cryptocurrency, NFT marketplace, or
            enterprise blockchain solution, we provide end-to-end blockchain
            development services tailored to your business needs.
          </p>
        </div>
        <div className="mt-3 flex flex-col gap-4 md:px-5">
          <h2 className="text-3xl font-semibold">What We Provide</h2>
          <p className="description">
            Our blockchain development services empower businesses with
            innovative, scalable, and secure solutions. We specialize in:
          </p>
          <ul className="list-disc pl-5 description">
            <li>Smart contract development and auditing</li>
            <li>Decentralized applications (dApps)</li>
            <li>Private and public blockchain solutions</li>
            <li>Cryptocurrency and token development</li>
            <li>Non-fungible token (NFT) marketplace development</li>
            <li>Blockchain-based supply chain and financial solutions</li>
            <li>Layer 2 scaling solutions for enhanced efficiency</li>
          </ul>
          <img
            src={img2}
            loading="lazy"
            className="h-[25rem] object-cover rounded-3xl object-center my-4"
            alt="Blockchain Solutions"
          />
          <p className="description">
            We work with leading blockchain platforms such as Ethereum,
            Hyperledger, Solana, Binance Smart Chain, and Polygon. Our team
            ensures seamless integration of blockchain with your existing
            systems, enhancing security, transparency, and operational
            efficiency.
            <br />
            <br />
            Whether you're building a decentralized finance (DeFi) platform, a
            blockchain-powered voting system, or a secure identity management
            solution, we have the expertise to turn your vision into reality.
            <br />
            <br />
            Leverage the power of blockchain with our cutting-edge solutions and
            stay ahead in the decentralized digital economy.
          </p>
        </div>
      </div>
    </FadeUp>
  );
};

export default Blockchain;
