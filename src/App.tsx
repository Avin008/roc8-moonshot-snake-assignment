import { GameBoard } from "./components";

function App() {
  return (
    <div className="h-screen dark">
      <div className="dark:bg-slate-800 w-full h-full flex items-center justify-center">
        <GameBoard />
      </div>
    </div>
  );
}

export default App;
