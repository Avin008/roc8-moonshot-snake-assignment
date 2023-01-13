import React, { useState } from "react";
import { Snake } from "../components";
// @ts-ignore
import useKeypress from "react-use-keypress";
import { useInterval } from "usehooks-ts";

const GameBoard = () => {
  const [grid, setGrid] = useState<
    {
      colNum: number;
      rowNum: number;
    }[]
  >([
    { colNum: 15, rowNum: 10 },
    { colNum: 15, rowNum: 11 },
    { colNum: 15, rowNum: 12 },
  ]);

  const [lastKeyPressed, setLastKeyPressed] = useState<
    "ArrowUp" | "ArrowDown" | "ArrowLeft" | "ArrowRight"
  >("ArrowUp");

  useKeypress(
    ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
    (e: React.KeyboardEvent) => {
      if (
        e.key === "ArrowUp" &&
        lastKeyPressed !== "ArrowDown"
      ) {
        setLastKeyPressed("ArrowUp");
      } else if (
        e.key === "ArrowDown" &&
        lastKeyPressed !== "ArrowUp"
      ) {
        setLastKeyPressed("ArrowDown");
      } else if (
        e.key === "ArrowLeft" &&
        lastKeyPressed !== "ArrowRight"
      ) {
        setLastKeyPressed("ArrowLeft");
      } else if (
        e.key === "ArrowRight" &&
        lastKeyPressed !== "ArrowLeft"
      ) {
        setLastKeyPressed("ArrowRight");
      }
    }
  );

  useInterval(() => {
    if (lastKeyPressed === "ArrowUp") {
      setGrid((prev) => {
        return prev.map((x, index) => {
          if (index === 0) {
            return { ...x, rowNum: x.rowNum - 1 };
          } else return x;
        });
      });
    } else if (lastKeyPressed === "ArrowDown") {
      setGrid((prev) => {
        return prev.map((x, index) => {
          if (index === 0) {
            return { ...x, rowNum: x.rowNum + 1 };
          } else return x;
        });
      });
    } else if (lastKeyPressed === "ArrowLeft") {
      setGrid((prev) => {
        return prev.map((x, index) => {
          if (index === 0) {
            return { ...x, colNum: x.colNum - 1 };
          } else return x;
        });
      });
    } else if (lastKeyPressed === "ArrowRight") {
      setGrid((prev) => {
        return prev.map((x, index) => {
          if (index === 0) {
            return { ...x, colNum: x.colNum + 1 };
          } else return x;
        });
      });
    }
  }, 1000);

  return (
    <div className="border border-black w-[40%] h-[70%] grid grid-cols-30 grid-rows-20">
      {grid.map((snakePosition) => (
        <Snake
          xposition={snakePosition.colNum}
          yposition={snakePosition.rowNum}
        />
      ))}
    </div>
  );
};

export default GameBoard;
