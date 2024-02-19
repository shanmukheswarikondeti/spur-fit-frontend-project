import appstore from './assets/appstore.png'

import rating from './assets/rating.png'

import mobile from './assets/mobile.png'

import './index.css'

const HomePage=()=>(
    <div className="home-page-container">
        <div className="home-content">
            <p className="ahead-app-text">Ahead app</p>
            <h1 className="home-heading">Master your life<br/> by mastering <br/> emotions</h1>
            <div className="app-and-rating-container">
            <img src={appstore} className="app-store-image" alt="app store"/>
                <div className="rating-container">
                    <img src={rating} className="five-star-image" alt="five star"/>
                    <p className="rating">100+ AppStore reviews</p>
                </div>
            </div>
        </div>
        <img src={mobile} className="mobile-image" alt="mobile"/>
    </div>
)
export default HomePage