import React, { useEffect, useState } from "react";
import './BacktoTop.css';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      id="backToTop"
      onClick={scrollToTop}
      style={{ display: isVisible ? "block" : "none" }}
      aria-label="Back to top"
    >
      ^
    </button>
  );
};

export default BackToTop;

