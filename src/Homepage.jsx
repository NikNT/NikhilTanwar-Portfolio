import { useEffect, useState } from "react";
import Hero from "./Components/Hero/Hero";
import NavBar from "./Components/NavBar/NavBar";
import AboutMe from "./Components/AboutMe/AboutMe";
import Chevron from "./Components/Shared/Chevron";

function Homepage() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add("darkMode");
      localStorage.setItem("theme", "dark");
    } else {
      body.classList.remove("darkMode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const clickHandler = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <NavBar clickHandler={clickHandler} mode={darkMode} />
      <Hero mode={darkMode} />
      <Chevron mode={darkMode} />
      {/* <AboutMe /> */}
    </>
  );
}

export default Homepage;
