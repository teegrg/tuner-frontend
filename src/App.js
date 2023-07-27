import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


import NavBar from "./components/NavBar";
import Home from "./pages/Home"
import Show from "./pages/Show"
import New from "./pages/New"
import Edit from "./pages/Edit"
import FourOFour from "./pages/FourOFour";


function App() {
  return (
    <div>
      <Router>
      <NavBar/>
        <Routes>
          <Route path="/songs" element={<Home />} />
          <Route path="/songs/:id" element={<Show />} />
          <Route path="/songs/new" element={<New/>} />
          <Route path="/songs/:id/edit" element={<Edit />} />
          <Route path="*" element={<FourOFour />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
