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
    { colNum: 15, rowNum: 13 },
    { colNum: 15, rowNum: 14 },
    { colNum: 15, rowNum: 15 },
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

  const FollowHead = (
    grid: { colNum: number; rowNum: number }[]
  ) => {
    const newGrid = [...grid];

    for (let x = newGrid.length - 2; x >= 0; x--) {
      newGrid[x + 1] = { ...newGrid[x] };
    }
    return newGrid;
  };

  useInterval(() => {
    if (lastKeyPressed === "ArrowUp") {
      setGrid(
        [...FollowHead(grid)].map((x, index) => {
          if (index === 0) {
            return { ...x, rowNum: x.rowNum - 1 };
          } else {
            return x;
          }
        })
      );
    } else if (lastKeyPressed === "ArrowDown") {
      setGrid(
        [...FollowHead(grid)].map((x, index) => {
          if (index === 0) {
            return { ...x, rowNum: x.rowNum + 1 };
          } else {
            return x;
          }
        })
      );
    } else if (lastKeyPressed === "ArrowLeft") {
      setGrid(
        [...FollowHead(grid)].map((x, index) => {
          if (index === 0) {
            return { ...x, colNum: x.colNum - 1 };
          } else {
            return x;
          }
        })
      );
    } else if (lastKeyPressed === "ArrowRight") {
      setGrid(
        [...FollowHead(grid)].map((x, index) => {
          if (index === 0) {
            return { ...x, colNum: x.colNum + 1 };
          } else {
            return x;
          }
        })
      );
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
