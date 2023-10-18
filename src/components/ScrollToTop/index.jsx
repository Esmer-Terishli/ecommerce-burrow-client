import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "../../assets/styles/_ScrollToTop.style.scss";

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.scrollY > 560) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 560) {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`scrollup${
        showScroll ? " show-scroll" : ""
      } fixed right-5 opacity-80`}
      onClick={scrollToTop}
    >
      <FontAwesomeIcon icon={faArrowUp} className="scrollup-icon" />
    </div>
  );
};

export default ScrollToTop;
