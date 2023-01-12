import { useEffect, useState } from "react";
import { Snake } from "../components";

const GameBoard = () => {
  const [grid, setGrid] = useState<{
    colNum: number;
    rowNum: number;
  }>({ colNum: 15, rowNum: 10 });

  return (
    <div className="border border-black w-[40%] h-[70%] grid grid-cols-30 grid-rows-20">
      <Snake
        xPositionStart={grid.colNum}
        xPositionEnd={grid.colNum}
        yPositionStart={grid.rowNum}
        yPositionEnd={grid.rowNum}
      />
    </div>
  );
};

export default GameBoard;
