const Scores = ({
  playerScore,
  topScore,
}: {
  playerScore: number;
  topScore: number;
}) => {
  return (
    <div className="flex justify-between items-center text-white px-2 bg-slate-800 -top-9 h-8 absolute left-0 right-0">
      <div>Your Score: {playerScore}</div>
      <div>Top Score: {topScore}</div>
    </div>
  );
};

export default Scores;
