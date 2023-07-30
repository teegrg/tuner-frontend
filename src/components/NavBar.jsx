import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="nav">
            {/* <img src={icon} alt="icon" /> */}
            <h1>             
                <Link to="/songs" className="title">Tuner App</Link>
            </h1>
            <button>
                <Link to="/songs/new" >Add new songs</Link>
            </button>
        </div>
    )
}

export default NavBar;