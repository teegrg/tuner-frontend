import axios from "axios";
import { useState, useEffect} from "react";
import Song from "./Song";


const API = process.env.REACT_APP_API_URL;

function Songs() {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        axios.get(`${API}/songs`)
        .then((res) => setSongs(res.data))
        .catch((e) => console.warn("catch", e))
    }, [])   

    return (
        <div className="songs">
            <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>ARTIST</th>
              <th>SEE MORE</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song) => {
              return <Song key={song.id} song={song} />;
            })}
          </tbody>
        </table>
      </section>
        </div>
    )
}

export default Songs;