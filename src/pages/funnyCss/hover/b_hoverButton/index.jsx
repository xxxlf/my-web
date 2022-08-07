import React from "react";
// import "./index.css";

function B_hoverButton({ onClick = () => {}, children }) {
  return (
    <button onClick={onClick} className="my_btn">
      <span>{children}</span>
    </button>
  );
}

export default B_hoverButton;
