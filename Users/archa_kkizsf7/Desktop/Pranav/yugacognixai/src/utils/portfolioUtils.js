import { useEffect, useState } from 'react';

// Function to get all portfolio items from the assets/portfolio directory
export const usePortfolioItems = () => {
  const [portfolioItems, setPortfolioItems] = useState({
    webDevelopment: [],
    mobileAppDevelopment: [],
    aiMlDevelopment: [],
    blockchainDevelopment: []
  });

  useEffect(() => {
    // Web Development portfolio
    const webContext = require.context('../assets/portfolio/Web Development', false, /\.(png|jpe?g|webp)$/);
    const webItems = webContext.keys().map((key, index) => {
      const fileName = key.replace('./', '');
      const title = fileName.replace(/\.(png|jpe?g|webp)$/, '');
      return {
        id: `web-${index}`,
        img: webContext(key),
        title,
        service: 'Web Development'
      };
    });

    // Mobile App Development portfolio
    const appContext = require.context('../assets/portfolio/Mobile App Development', false, /\.(png|jpe?g|webp)$/);
    const appItems = appContext.keys().map((key, index) => {
      const fileName = key.replace('./', '');
      const title = fileName.replace(/\.(png|jpe?g|webp)$/, '');
      return {
        id: `app-${index}`,
        img: appContext(key),
        title,
        service: 'Mobile App Development'
      };
    });

    // AI & ML Development portfolio
    const aiContext = require.context('../assets/portfolio/AI & ML Development', false, /\.(png|jpe?g|webp)$/);
    const aiItems = aiContext.keys().map((key, index) => {
      const fileName = key.replace('./', '');
      const title = fileName.replace(/\.(png|jpe?g|webp)$/, '');
      return {
        id: `ai-${index}`,
        img: aiContext(key),
        title,
        service: 'AI & ML Development'
      };
    });

    // Blockchain Development portfolio
    const blockchainContext = require.context('../assets/portfolio/Blockchain Development', false, /\.(png|jpe?g|webp)$/);
    const blockchainItems = blockchainContext.keys().map((key, index) => {
      const fileName = key.replace('./', '');
      const title = fileName.replace(/\.(png|jpe?g|webp)$/, '');
      return {
        id: `blockchain-${index}`,
        img: blockchainContext(key),
        title,
        service: 'Blockchain Development'
      };
    });

    setPortfolioItems({
      webDevelopment: webItems,
      mobileAppDevelopment: appItems,
      aiMlDevelopment: aiItems,
      blockchainDevelopment: blockchainItems
    });
  }, []);

  return portfolioItems;
};

// Function to get portfolio items based on the page
export const getPortfolioByPage = (portfolioItems, page) => {
  if (page === "web-development") {
    return portfolioItems.webDevelopment;
  } else if (page === "app-development") {
    return portfolioItems.mobileAppDevelopment;
  } else if (page === "artificial-intelligence-ml") {
    return portfolioItems.aiMlDevelopment;
  } else if (page === "blockchain") {
    return portfolioItems.blockchainDevelopment;
  } else if (page === "/") {
    // For homepage, get a mix of items (4 from each category)
    return [
      ...portfolioItems.webDevelopment.slice(0, 4),
      ...portfolioItems.mobileAppDevelopment.slice(0, 4),
      ...portfolioItems.aiMlDevelopment.slice(0, 4),
      ...portfolioItems.blockchainDevelopment.slice(0, 4)
    ];
  } else {
    // For portfolio page, get all items
    return [
      ...portfolioItems.webDevelopment,
      ...portfolioItems.mobileAppDevelopment,
      ...portfolioItems.aiMlDevelopment,
      ...portfolioItems.blockchainDevelopment
    ];
  }
};