import HomePage from '../HomePage'
import EQBeatIQ from '../EQBeatIQ'
import MeetAheadCard  from '../MeetAheadCard'
import SelfImprovementPage from '../SelfImprovementPage'
import BestWithEQ from '../BestWithEQ'
import RatingSkills from '../RatingSkills'
import StartTestPage from '../StartTestPage'
import WorkWithUs from '../WorkWithUs'
import OpenVacancies from '../OpenVacancies'

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
        <WorkWithUs/>
        <OpenVacancies/>
         
    </div>
)
export default MainContent