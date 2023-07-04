import { useEffect, useState } from "react";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add("darkMode");
    } else {
      body.classList.remove("darkMode");
    }
  }, [darkMode]);

  const clickHandler = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="App">
      <NavBar clickHandler={clickHandler} mode={darkMode} />
      <Hero mode={darkMode} />
      <Hero mode={darkMode} />
    </div>
  );
}

export default App;
