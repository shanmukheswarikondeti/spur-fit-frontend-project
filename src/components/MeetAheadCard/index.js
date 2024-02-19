import { useEffect } from "react";
import gsap from "gsap";

import './index.css'

const MeetAheadCard=()=>{useEffect(() => {
    const handleScroll = () => {
      // Calculate the percentage scrolled
      const scrollPercentage =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;

      // Use GSAP to animate based on the scroll percentage
      gsap.fromTo(
        ".meet-ahead-header",
        {
          x: scrollPercentage >= 10 ? 0 : 20,
          duration: 2,
          ease: "power2.out",
        },
        { x: scrollPercentage >= 30 ? 0 : 200, duration: 1, repeat: false }
      );

      gsap.fromTo(
        ".meet-ahead-content",
        {
          x: scrollPercentage >= 30 ? 0 : 300,
          duration: 2,
        },
        { x: scrollPercentage >= 30 ? 0 : 100, duration: 1, repeat: false }
      );
      gsap.to(".meet-ahead-image", {
        rotate: scrollPercentage >= 30 ? 0 : 360,
      });
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup: remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

return(
    <div className="meet-ahead-container">
        <div className="meet-ahead-header">
            <p className="meet-ahead-top-text">Built out of frusstration</p>
            <p className="meet-ahead-title">Meet the ahead app</p>
        </div>
        <div className="meet-ahead-body">
            <img src="https://res.cloudinary.com/dlju0quch/image/upload/v1708255481/Screenshot_2024-02-18_165353_w0ubeq.png" className="meet-ahead-image" alt="meet ahead"/>
            <p className="meet-ahead-content">
                A personalized pocket coach that provides bite-sized, science-driven tools to boost emotional intelligence.
                <br/>
                <br/>
                Think of it as a pocket cheerleader towards a better, more fulfilling.
            </p>
        </div>

    </div>


)
}
export default MeetAheadCard;