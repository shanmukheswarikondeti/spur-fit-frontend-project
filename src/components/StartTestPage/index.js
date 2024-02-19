import { useEffect } from "react";
import gsap from "gsap";

import './index.css'

const StartTestPage=()=>{
  useEffect(() => {
    const handleScroll = () => {
      // Calculate the percentage scrolled
      const scrollPercentage =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;

      // Use GSAP to animate based on the scroll percentage
      gsap.fromTo(
        ".start-test-btn",
        {
          opacity: 0,
        },
        { opacity: 1, duration: 2 }
      );
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup: remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return(
    <div className="start-test-container">
        <p className="start-test-text">We take privacy seriously</p>
        <h1 className="start-test-title">Before you get started</h1>
        <p className="start-test-instructions">"We won't share your answers with anyone (and won't ever tell you which friends said what about you)"</p>
        <p className="with-love-text">with love, 
          <span className="with-love-sign">Team ahead</span>
        </p>
        <button className="start-test-btn">Start a test</button>
        <p className="test-duration">Take only 5 minutes</p>
    </div>
);
  }
export default StartTestPage;
