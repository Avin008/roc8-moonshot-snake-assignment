import { useEffect, useState } from "react";
import { Snake } from "../components";

const GameBoard = () => {
  const [grid, setGrid] = useState<{
    colNum: number;
    rowNum: number;
  }>({ colNum: 1, rowNum: 1 });

  return (
    <div className="border border-black w-[40%] h-[70%] grid grid-cols-30 grid-rows-20">
      <Snake
        xPositionStart={20}
        xPositionEnd={30}
        yPositionStart={5}
        yPositionEnd={5}
      />
    </div>
  );
};

export default GameBoard;
