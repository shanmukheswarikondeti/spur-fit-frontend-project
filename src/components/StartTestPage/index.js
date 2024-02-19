import './index.css'

const StartTestPage=()=>(
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
export default StartTestPage;
