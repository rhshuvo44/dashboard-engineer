import React from "react";

const SectionTitle = ({ children }) => {
  return (
    <h2 className="font-bold text-xl text-primary capitalize">
      {children}
    </h2>
  );
};

export default SectionTitle;
