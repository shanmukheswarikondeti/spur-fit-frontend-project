import HomePage from '../HomePage'
import EQBeatIQ from '../EQBeatIQ'
import MeetAheadCard  from '../MeetAheadCard'
import SelfImprovementPage from '../SelfImprovementPage'
import BestWithEQ from '../BestWithEQ'
import RatingSkills from '../RatingSkills'
import StartTestPage from '../StartTestPage'

import './index.css'
const MainContent=()=>(
    <div className="app-container">
        <HomePage/>
        <EQBeatIQ/>
        <MeetAheadCard/>
        <SelfImprovementPage/>  
        <BestWithEQ/>  
        <RatingSkills/>
        <StartTestPage/>  
         
    </div>
)
export default MainContent