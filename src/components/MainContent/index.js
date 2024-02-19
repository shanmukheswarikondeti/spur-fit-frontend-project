import HomePage from '../HomePage'
import EQBeatIQ from '../EQBeatIQ'
import MeetAheadCard  from '../MeetAheadCard'
import SelfImprovementPage from '../SelfImprovementPage'
import BestWithEQ from '../BestWithEQ'

import './index.css'
const MainContent=()=>(
    <div className="app-container">
        <HomePage/>
        <EQBeatIQ/>
        <MeetAheadCard/>
        <SelfImprovementPage/>  
        <BestWithEQ/>     
    </div>
)
export default MainContent