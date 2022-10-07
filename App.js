import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Aboutme, Portfolio, Home } from "./Components";

function App() {
  return (
    <div id="bck">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Portfolio />} />
        <Route path="/AboutMe" element={<Aboutme />} />
      </Routes>
    </div>
  );
}

export default App;
