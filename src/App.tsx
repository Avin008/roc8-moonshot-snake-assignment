import { GameBoard, Navbar } from "./components";
import { MdDarkMode } from "react-icons/md";

function App() {
  return (
    <div className="h-screen dark">
      <div className="dark:bg-slate-800 w-full h-full flex items-center justify-center">
        <Navbar />
        {/* <GameBoard /> */}
      </div>
    </div>
  );
}

export default App;
