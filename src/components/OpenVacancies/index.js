import { useEffect } from "react";
import gsap from "gsap";

import VacancyItem from "../VacancyItem";

import './index.css';

const vacanciesList = [
  {
    id: 1,
    role: "Senior Full-Stack Engineer",
    type: "Full-time position",
    location: "Berlin or remote",
    salary: "65-85k, 0.5-1.50% equity share options",
  },
  {
    id: 2,
    role: "Senior Designer",
    type: "Full-time position",
    location: "Berlin or remote",
    salary: "40-55k, 0.25-0.50% equity share options",
  },
  {
    id: 3,
    role: "Superstar Intern",
    type: "Full-time position",
    location: "Berlin or remote",
    salary: "20-24k, 0.5-1.50% equity share options",
  },
];

const OpenVacancies = () => {
  useEffect(() => {
    const handleScroll = () => {
      // Calculate the percentage scrolled
      const scrollPercentage =
        (window.scrollX /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;
  
      // Use GSAP to animate based on the scroll percentage
      gsap.fromTo(
        ".vacancies-title",
        {
          x: scrollPercentage >= 10 ? 0 : 20,
          duration: 2,
          
        },
        { x: scrollPercentage >= 30 ? 0 : 200, duration: 1, repeat: false }
      );   
    };
  
    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);
  
    // Cleanup: remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
return(
  <div className="vacancies-container">
    <h1 className="vacancies-title">Open vacancies</h1>
    <ul className="vacancies-list">
      {vacanciesList.map((vacancy) => (
        <VacancyItem key={vacancy.id} vacancyDetails={vacancy} />
      ))}
    </ul>
  </div>
);
      }

export default OpenVacancies;