import "./App.css";
import { Route, Routes } from "react-router-dom";
import AboutMe from "./Components/AboutMe/AboutMe";
import Homepage from "./Homepage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default App;
