import React from "react";

const InputSelect = ({ children, ...rest }) => {
  return (
    <div className="my-2">
      <select {...rest}>{children}</select>
    </div>
  );
};

export default InputSelect;
