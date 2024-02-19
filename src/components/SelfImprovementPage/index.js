import './index.css'

const selfImprovementList=[
    {
        id:1,
        title:"It's not as easy as 1-2-3.",
        description:"The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else).",
    },
    {
        id:2,
        title:"Old habits are hard to break.",
        description:"And bad behaviors die hard. Fortunately, we give you great, science-backed techniques to use.",
    },
    {
        id:3,
        title:"You and your motivation don't have a long-term relationship.",
        description:"Luckily, we can proactively prepare you for the marathon, not just the race. Effective, memorable exerciseswill help you stick to your goals.",
    },
    {
        id:4,
        title:"Books just don't after practical solutions.",
        description:"Remember when you learned to ride a bike just by reading? Yeah, we don't either. We help you take concrete small steps towards your goals. Learning just a bit, then immediately springing into action.",
    },
    {
        id:5,
        title:"Inspiration is great, but then what.",
        description:"We made sure your energy from all the content you consume does not fizzle out.",
    },
]
const SelfImprovementPage=()=>(
    <div className="self-improvement-container">
        <div className="self-improvement-header">
            <p className="self-improvement-top-title">
                Wrong with self-improvement & how we're fixed it.
            </p>
            <h1 className="self-improvement-title">
                Self-improvement.Ugh.
            </h1>
        </div>
        <div className="self-improvement-timeline">
            {selfImprovementList.map((item)=>(
                <div className="timeline-container" key={item.id}>
                    <div className="timeline-dot"></div>
                    <div className="timeline-details">
                        <h1 className="timeline-title">{item.title}</h1>
                        <p className="timeline-description">{item.description}</p>
                    </div>
                </div>

            ))}
        </div>
    </div>


);
export default SelfImprovementPage;