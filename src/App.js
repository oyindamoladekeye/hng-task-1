import "./App.css";
import Profilepage from "./Pages/Profilepage";
import {Route, Routes} from "react-router-dom";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className="container">
        <Routes>
            <Route path = "/hng-task-1" element={<Profilepage />} />
            <Route path = "/contact" element={<Contact />} />
        </Routes>
    </div>
  );
}

export default App;
