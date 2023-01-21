import { AiFillTrophy } from "react-icons/ai";
import { ScoresProps } from "../types";
const Scores = ({ playerScore, topScore }: ScoresProps) => {
  return (
    <div className="flex justify-between items-center dark:text-white px-2 dark:bg-slate-800 -top-9 h-8 absolute left-0 right-0">
      <div>Your Score: {playerScore}</div>
      <div className="flex items-center gap-1">
        <AiFillTrophy
          className="dark:text-yellow-200"
          size={25}
        />{" "}
        {topScore}
      </div>
    </div>
  );
};

export default Scores;
