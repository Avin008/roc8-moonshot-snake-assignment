import {
  GameBoard,
  MobileControls,
  Navbar,
} from "./components";
import { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] =
    useState<boolean>(true);

  const darkModeSetter = (): void => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className={`h-screen ${isDarkMode && "dark"}`}>
      <div className="dark:bg-slate-800 w-full h-full flex items-center justify-center">
        <Navbar
          darkMode={isDarkMode}
          darkModeSetter={darkModeSetter}
        />
        <GameBoard />
        <MobileControls />
      </div>
    </div>
  );
}

export default App;
