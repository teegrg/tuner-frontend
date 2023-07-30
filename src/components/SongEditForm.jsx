import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams  } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function SongEditForm() {
    const params = useParams();
    const id = params.id
    let navigate = useNavigate();

    const [song, setSong] = useState({
        name: "",
        album: "",
        time: "",
        is_favorite: false,
    });


    useEffect(() => {
      axios
      .get(`${API}/songs/${id}`)
      .then((res) => setSong(res.data))
      .catch((e) => {
        navigate('/not-found')
        console.warn("catch", e)
      })
  },[id,navigate])

    

    const handleCheckboxChange = () => {
        setSong({...song, is_favorite: !song.is_favorite})
    };

    const handleTextChange = (event) => {
        setSong({...song, [event.target.id] : event.target.value})
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        updateSong(song);
    }

    const updateSong = (updatedSong) => {
      axios
      .put(`${API}/songs/${id}`, updatedSong)
      .then((res) => {
          setSong(res.data)
          navigate(`/songs/${id}`)
      })
      .catch((e) => console.warn("catch", e))
  };

    return (
        <div className="New">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Artist:</label>
          <input
            id="name"
            value={song.name}
            type="text"
            onChange={handleTextChange}
            placeholder="Name of Artist"
            required
          />
          <label htmlFor="album">Album:</label>
          <input
            id="album"
            type="text"
            required
            value={song.album}
            placeholder="Album"
            onChange={handleTextChange}
          />
          <label htmlFor="time">Duration:</label>
          <input
            id="time"
            type="text"
            name="time"
            value={song.time}
            placeholder="Duration"
            onChange={handleTextChange}
          />
          <label htmlFor="is_favorite">Favorite:</label>
          <input
            id="is_favorite"
            type="checkbox"
            onChange={handleCheckboxChange}
            checked={song.is_favorite}
          />
          <br />
          <input type="submit" />
        </form>
        <Link to={`/songs/${id}`}>
        <button>Cancel</button>
      </Link>
      </div>
    )
}

export default SongEditForm;
