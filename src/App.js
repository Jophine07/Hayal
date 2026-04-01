import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Events from "./components/Events";
import Navbar from "./components/NavBar";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events/>}/>
        <Route path="/NavBar" element={<Navbar/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
