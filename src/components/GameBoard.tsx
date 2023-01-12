import React, { useState } from "react";
import { Snake } from "../components";
// @ts-ignore
import useKeypress from "react-use-keypress";
import { useInterval } from "usehooks-ts";

const GameBoard = () => {
  const [grid, setGrid] = useState<{
    colNum: number;
    rowNum: number;
  }>({ colNum: 15, rowNum: 10 });

  const [lastKeyPressed, setLastKeyPressed] = useState<
    "ArrowUp" | "ArrowDown" | "ArrowLeft" | "ArrowRight"
  >("ArrowUp");

  useKeypress(
    ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowUp") {
        setLastKeyPressed("ArrowUp");
      } else if (e.key === "ArrowDown") {
        setLastKeyPressed("ArrowDown");
      } else if (e.key === "ArrowLeft") {
        setLastKeyPressed("ArrowLeft");
      } else if (e.key === "ArrowRight") {
        setLastKeyPressed("ArrowRight");
      }
    }
  );

  useInterval(() => {
    if (lastKeyPressed === "ArrowUp") {
      setGrid((prev) => ({
        ...prev,
        rowNum: prev.rowNum - 1,
      }));
    } else if (lastKeyPressed === "ArrowDown") {
      setGrid((prev) => ({
        ...prev,
        rowNum: prev.rowNum + 1,
      }));
    } else if (lastKeyPressed === "ArrowLeft") {
      setGrid((prev) => ({
        ...prev,
        colNum: prev.colNum - 1,
      }));
    } else if (lastKeyPressed === "ArrowRight") {
      setGrid((prev) => ({
        ...prev,
        colNum: prev.colNum + 1,
      }));
    }
  }, 1000);

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
