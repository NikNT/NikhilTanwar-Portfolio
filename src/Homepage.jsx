import { useEffect, useState } from "react";
import Hero from "./Components/Hero/Hero";
import NavBar from "./Components/NavBar/NavBar";

function Homepage() {
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
    <>
      <NavBar clickHandler={clickHandler} mode={darkMode} />
      <Hero mode={darkMode} />
    </>
  );
}

export default Homepage;
