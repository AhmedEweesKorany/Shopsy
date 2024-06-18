import React, { useState } from "react";
import lightPng from "../../assets/website/light-mode-button.png";
import darkPng from "../../assets/website/dark-mode-button.png";
const DarkMode = () => {
  const [dark, setDark] = useState(false);
  const element = document.documentElement;

  if (dark) {
    element.classList.add("dark");
  } else {
    element.classList.remove("dark");
  }
  return (
    <div>
      {dark ? (
        <img
          src={darkPng}
          alt={"darkmode"}
          className="w-12 cursor-pointer  duration-300 transition-all"
          onClick={() => setDark(!dark)}
        />
      ) : (
        <img
          src={lightPng}
          alt={"lightcode"}
          className="w-12 cursor-pointer  duration-300 transition-all"
          onClick={() => setDark(!dark)}
        />
      )}
    </div>
  );
};

export default DarkMode;
