import React, { useState } from "react";
import { Snake } from "../components";
// @ts-ignore
import useKeypress from "react-use-keypress";

const GameBoard = () => {
  const [grid, setGrid] = useState<{
    colNum: number;
    rowNum: number;
  }>({ colNum: 15, rowNum: 10 });

  useKeypress(
    ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowUp") {
        setGrid((prev) => ({
          ...prev,
          rowNum: prev.rowNum - 1,
        }));
      } else if (e.key === "ArrowDown") {
        setGrid((prev) => ({
          ...prev,
          rowNum: prev.rowNum + 1,
        }));
      } else if (e.key === "ArrowLeft") {
        setGrid((prev) => ({
          ...prev,
          colNum: prev.colNum - 1,
        }));
      } else if (e.key === "ArrowRight") {
        setGrid((prev) => ({
          ...prev,
          colNum: prev.colNum + 1,
        }));
      }
    }
  );

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
