import { Link } from "react-router-dom";
import icon from "./icon.png"
function NavBar() {
    return (
        <div className="nav">
            <h2>
                <img src={icon} alt="icon" />
                <Link to="/songs">Tuner App</Link>
            </h2>
            <button>
                <Link to="/songs/new" >Add new songs</Link>
            </button>
        </div>
    )
}

export default NavBar;