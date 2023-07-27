import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL

function SongNewForm() {
    let navigate = useNavigate();
    
    const [song, setSong] = useState({
        name: "",
        album: "",
        time: "",
        is_favorite: false,
    });

    const addNewSong = (newSong) => {
        axios
        .post(`${API}/songs`, newSong)
        .then((res) => {
            //console.log(res.data)
            navigate('/songs')
        })
        .catch((e) => console.warn("catch", e))
    };

    

    const handleCheckboxChange = () => {
        setSong({...song, is_favorite: !song.is_favorite})
    }

    const handleTextChange = (event) => {
        setSong({...song, [event.target.id]: event.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addNewSong(song);
    }


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
      </div>
    )
}

export default SongNewForm;