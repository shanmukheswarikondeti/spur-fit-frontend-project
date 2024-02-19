import './index.css'

const Header=()=>(
    <nav className="nav-conatainer">
        <div className="header-container">
            <img src="https://res.cloudinary.com/dlju0quch/image/upload/v1708158501/Screenshot_2024-02-17_1353382_fh0tzi.png" alt="website logo" className="website-logo"/>
            <ul className="nav-items">
                <li className="nav-list-item">
                    <a href='#' className="nav-items">Emotions</a>
                </li>
                <li className="nav-list-item">
                    <a href='#' className="nav-items">Manifesto</a>
                </li>
                <li className="nav-list-item">
                    <a href='#' className="nav-items">Self-awareness test</a>
                </li>
                <li className="nav-list-item">
                    <a href='#' className="nav-items">Work With Us</a>
                </li>
            </ul>
            <button className="download-app-button">Download App</button>
        </div>
    </nav>
)
export default Header