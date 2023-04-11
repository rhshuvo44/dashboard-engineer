import React from "react";

const Input = ({ ...rest }) => {
  return (
    <div className="my-2">
      <input {...rest} required />
    </div>
  );
};

export default Input;
