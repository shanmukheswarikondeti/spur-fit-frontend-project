import EmotionCard from '../EmotionCard'

import './index.css'

const emotionsList=[
    {
        id:"ANGRY",
        imageUrl:"https://res.cloudinary.com/dlju0quch/image/upload/v1708251623/Screenshot_2024-02-18_154833_tlagtk.png",
        title:"You argue with a colleague",
        description:"You get angry and defensive, instead of staying open and working towards common ground.",
        cardColor:"#cde4f7",
    },
    {
        id:"WONDER",
        imageUrl:"https://res.cloudinary.com/dlju0quch/image/upload/v1708251774/Screenshot_2024-02-18_155136_x2v7dq.png",
        title:"You get a promotion at work",
        description:"You question yourself and wonder when they'll realize you're an unqualified impostre. Instead of trusing yourself & your abilities.",
        cardColor:"#eedefc",
        
    },
    {
        id:"DOUBT",
        imageUrl:"https://res.cloudinary.com/dlju0quch/image/upload/v1708251894/Screenshot_2024-02-18_155349_mo5xdx.png",
        title:"You attend a class reunion",
        description:"You compare yourself with your peers' achievements, instead of making your self-judgement more independent of others.",
        cardColor:"#5f1ef7",
    },
    {
        id:"DISAPPOINT",
        imageUrl:"https://res.cloudinary.com/dlju0quch/image/upload/v1708252335/Screenshot_2024-02-18_160104_ipxfil.png",
        title:"You are at a lively dinner party",
        description:"You play on your phone, instead of confidently approaching strangers and striking up a chat.",
        cardColor:"#fccfb1",
    },
    {
        id:"Nervous",
        imageUrl:"https://res.cloudinary.com/dlju0quch/image/upload/v1708252482/Screenshot_2024-02-18_160234_libc6l.png",
        title:"You hit dead end in a negotiation",
        description:"You get nervous, frazzied, and frustrated, instead of staying optimistic and solution-oriented.",
        cardColor:"#fcf9c5",
    },
]
const EQBeatIQ=()=>(
    <div className="eq-page--container">
        <div className="eqbeatiq-container">
            <h1 className="eqbeatiq-title">EQ beats IQ</h1>
            <p className="eqbeatiq-description1">
                People with high emotional<br/> intelligence (EQ) live more fulfilled<br/> lives. They tend to be happier and<br/> have healthier relationships.
            </p>
            <p className="eqbeatiq-description2">
                They are more successful in their<br/> pursuits and make for inspiring<br/> leaders. According to science, they<br/> earn $29k a year.
            </p>
        </div>
        
        <div className="emotions-container">
            <div className="emotions-container1">
            <h1 className="emotions-heading">Does this sound familiar...</h1>
            <img src="https://res.cloudinary.com/dlju0quch/image/upload/v1708275712/Screenshot_2024-02-18_223106_yc3fws.png" className="image" alt="image"/>
            </div>
            <ul className="emotions-list">
                {emotionsList.map((emotion)=>(
                    <EmotionCard key={emotion.id} emotionDetails={emotion} isHighlighted={emotion.id==="DOUBT"}/>
                ))}
            </ul>
        </div>
    </div>
)

export default EQBeatIQ