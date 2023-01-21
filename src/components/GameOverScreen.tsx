import { GameOverScreenProps } from "../types";

const GameOverScreen = ({
  yourScore,
  topScore,
  resetGame,
}: GameOverScreenProps) => {
  return (
    <div className="border flex items-center justify-center space-y-4 flex-col absolute top-0 bottom-0 left-0 right-0 bg-black/70">
      <h1 className="text-4xl text-red-500 font-semibold">
        Game Over!
      </h1>
      <div className="text-white font-medium flex gap-5">
        <span>Your Score: {yourScore}</span>
        <span>Top Score: {topScore}</span>
      </div>
      <div className="text-white flex gap-3 mt-5">
        <button
          className="bg-green-500 px-4 py-1 rounded-lg"
          onClick={resetGame}
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default GameOverScreen;
