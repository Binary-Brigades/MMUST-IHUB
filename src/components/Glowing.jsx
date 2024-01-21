import React from "react";

function Glowing({ top, className }) {
  return (
    <div className={`wrapped absolute ${className}`}>
      <div className="elem"></div>
    </div>
  );
}

export default Glowing;
