import React from "react";

const Logo = ({ color }) => {
  return (
    <h2
      className={`text-3xl font-semibold ${
        color ? `text-${color}` : "text-[#0082FB]"
      }`}
    >
      YugaCognix AI
    </h2>
  );
};

export default Logo;
