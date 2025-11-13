import React, { useEffect, useState } from "react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Smooth scroll to top
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
      style={{
        display: isVisible ? "block" : "none",
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.4s ease-in-out",
      }}
    >
      ↑
    </button>
  );
};

export default BackToTop;
