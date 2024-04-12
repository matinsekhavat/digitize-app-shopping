import React from "react";
import { FaChevronUp } from "react-icons/fa";
function Chevron({ isOpen }) {
  return (
    <span
      className={`transition-all duration-300 ${isOpen ? "rotate-180" : ""} `}
    >
      <FaChevronUp />
    </span>
  );
}

export default Chevron;
