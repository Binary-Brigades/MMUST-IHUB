import React from "react";

function Glow({ top, className }) {
  return (
    <div className={`wrapper absolute ${className}`}>
      <div className="element"></div>
    </div>
  );
}

export default Glow;
