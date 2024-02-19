import {useEffect } from 'react';
import {gsap} from "gsap";

import WorkWithUsRightCardItem from "../WorkWithUsRightCardItem"

import './index.css'


const workWithUsRightCardDetails=[
    {
        id:1,
        title:"Power through, even when the going gets tough",
        description:"We help you spot and work around whatever stands in the way, be it bad habits, fears, etc.",

    },
    {
        id:2,
        title:"Learn more about who are you are and where you want to go",
        description:"We ask the right questions to help you better understand why you do things the way you do.",

    },
    {
        id:3,
        title:"Play and grow together with others on the same journey",
        description:"Ahead feels like a game, not like a chore. See yourself grow every day towards achieving your goals!",

    },
    {
        id:4,
        title:"Master how to make it happen in real life",
        description:"We support you towards ninja-level skills with sleek tools such as dry-runs, quizzes, and flashcards.",

    },
    {
        id:5,
        title:"Learn about practical skills that you can actually use in real life for your needs",
        description:"We build your personal roadmap of lessons and actions towards your goals.",

    },
]

const WorkWithUs=()=>{
    

    useEffect(() => {
        const handleScroll = () => {
          // Calculate the percentage scrolled
          const scrollPercentage =
            (window.scrollX /
              (document.documentElement.scrollHeight - window.innerHeight)) *
            100;
    
          // Use GSAP to animate based on the scroll percentage
          gsap.fromTo(
            ".work-with-us-title",
            {
              x: scrollPercentage >= 10 ? 0 : 20,
              duration: 2,
              
            },
            { x: scrollPercentage >= 30 ? 0 : 200, duration: 1, repeat: false }
          );
    
          gsap.fromTo(
            ".work-with-us-side-title",
            {
              x: scrollPercentage >= 30 ? 0 : 300,
              duration: 2,
            },
            { x: scrollPercentage >= 30 ? 0 : 100, duration: 1, repeat: false }
          );

          gsap.to(".about-logo", {
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
        <div className="work-with-us-container">
            <div className="work-with-us-header">
               <h1 className="work-with-us-title">
                   Work with us
               </h1>
               <h1 className="work-with-us-side-title">ahead</h1>
            </div>

            <div className="work-with-us-cards">
                <div className="work-with-us-left-card">
                    <div className="about-card">
                    <img src="https://res.cloudinary.com/dlju0quch/image/upload/v1708272812/Screenshot_2024-02-18_214125_muxbav.png" alt="about logo" className="about-logo"/>
                        <p className="about-product-text">About</p>
                        <p className="about-product-description">
                        At ahead goal is to make self-improvement fun and lasting. We know there's a way how to make it work. And that's what aHead is all about!
                        </p>
                    </div>
                    <div className="product-card">
                        <p className="about-product-text">Product</p>
                        <p className="about-product-description">
                        Sure, you could spend ages reading books or sitting in seminars on how to become a better spouse, parent, or manager - like we did...
                        </p>
                    </div>
                </div>

                <ul className="work-with-us-right-card">
                    {workWithUsRightCardDetails.map((rightCardItem)=>(
                        <WorkWithUsRightCardItem key={rightCardItem.id} cardDetails={rightCardItem}/>
                    ))}
                </ul>

            </div>
        </div>
    )
};
export default WorkWithUs