const GameOverScreen = ({
  setGameStatus,
  yourScore,
  topScore,
  resetGame,
}: {
  setGameStatus: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  yourScore: number;
  topScore: number;
  resetGame: () => void;
}) => {
  return (
    <div className="border flex items-center justify-center flex-col absolute top-0 bottom-0 left-0 right-0 bg-black/70">
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
