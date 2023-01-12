import { GameBoard } from "./components";

function App() {
  return (
    <div className="h-screen">
      <div className="bg-white w-full h-full flex items-center justify-center">
        <GameBoard />
      </div>
    </div>
  );
}

export default App;
