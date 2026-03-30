import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Events from "./components/Events";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
