import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;  

function SongDetails() {
    const [song, setSong] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    const handleDelete = () => {
        axios.delete(`${API}/songs/${id}`)
        .then(() => navigate('/songs'))
        .catch((e) => console.warn("catch", e))
    }

    useEffect(() => {
     axios.get(`${API}/songs/${id}`)
     .then((res) => setSong(res.data))
     .catch((e) => console.log(e))

    }, [id])

    return (
        <article>
      <h3>{true ? <span>⭐️</span> : null} {song.name}</h3>
      <h4>Album: {song.album}</h4>
      <p>Duration: {song.time}</p>
      <div className="showNavigation">
        <div>
          <Link to={`/songs`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/songs/${id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </article>
        )
}

export default SongDetails;