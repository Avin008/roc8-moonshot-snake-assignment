import React, { useState } from "react";
import { Food, Scores, Snake } from "../components";
// @ts-ignore
import { useInterval } from "usehooks-ts";
import { INITIAL_SNAKE_POSITION } from "../constants";
import {
  getRandomFoodPosition,
  followHead,
} from "../utility";
import { useControls } from "../hooks";

const GameBoard = () => {
  const [grid, setGrid] = useState<
    typeof INITIAL_SNAKE_POSITION
  >(INITIAL_SNAKE_POSITION);

  const [food, setFood] = useState<{
    colNum: number;
    rowNum: number;
  }>(getRandomFoodPosition(grid));

  const [displayFood, setDisplayFood] =
    useState<boolean>(false);

  const [score, setScore] = useState<number>(0);

  const [isGameOver, setIsGameOver] =
    useState<boolean>(false);

  const { lastKeyPressed } = useControls();

  useInterval(
    () => {
      if (lastKeyPressed === "ArrowUp") {
        setGrid(
          [...followHead(grid)].map((x, index) => {
            if (index === 0) {
              return { ...x, rowNum: x.rowNum - 1 };
            } else {
              return x;
            }
          })
        );
      } else if (lastKeyPressed === "ArrowDown") {
        setGrid(
          [...followHead(grid)].map((x, index) => {
            if (index === 0) {
              return { ...x, rowNum: x.rowNum + 1 };
            } else {
              return x;
            }
          })
        );
      } else if (lastKeyPressed === "ArrowLeft") {
        setGrid(
          [...followHead(grid)].map((x, index) => {
            if (index === 0) {
              return { ...x, colNum: x.colNum - 1 };
            } else {
              return x;
            }
          })
        );
      } else if (lastKeyPressed === "ArrowRight") {
        setGrid(
          [...followHead(grid)].map((x, index) => {
            if (index === 0) {
              return { ...x, colNum: x.colNum + 1 };
            } else {
              return x;
            }
          })
        );
      }

      if (
        grid[0].colNum >= food.colNum &&
        grid[0].rowNum >= food.rowNum &&
        grid[0].colNum <= food.colNum &&
        grid[0].rowNum <= food.rowNum
      ) {
        setFood({
          colNum: Math.floor(Math.random() * 30) + 1,
          rowNum: Math.floor(Math.random() * 20) + 1,
        });
        setDisplayFood(false);
        setScore((prev) => prev + 1);
        const lastSlice = { ...[...grid].slice(-1) };
        setGrid((prev) => [
          ...prev,
          {
            colNum: lastSlice[0].colNum + 1,
            rowNum: lastSlice[0].rowNum + 1,
          },
        ]);
      }

      if (
        grid[0].rowNum < 1 ||
        grid[0].rowNum > 20 ||
        grid[0].colNum < 1 ||
        grid[0].colNum > 30
      ) {
        setIsGameOver(true);
      }

      const head = { ...grid[0] };
      const body = [...grid].slice(3);
      body.forEach((x) => {
        if (
          x.colNum === head.colNum &&
          x.rowNum === head.rowNum
        ) {
          setIsGameOver(true);
          setGrid(grid);
        }
      });
    },
    isGameOver ? null : 300
  );

  useInterval(
    () => {
      setDisplayFood(true);
    },
    displayFood ? null : 3000
  );

  useInterval(
    () => {
      setFood(getRandomFoodPosition(grid));
    },
    isGameOver ? null : 50000
  );

  return (
    <div className="sm:w-[90%] md:mt-14 md:w-[60%] md:h-[65%] sm:h-[45%] lg:w-[40%] lg:h-[65%] relative">
      <Scores playerScore={score} topScore={100} />
      <div className="dark:bg-slate-700 w-full h-full rounded-md grid grid-cols-30 grid-rows-20">
        {grid.map((snakePosition) => (
          <Snake
            key={crypto.randomUUID()}
            xposition={snakePosition.colNum}
            yposition={snakePosition.rowNum}
          />
        ))}
        {displayFood && (
          <Food
            xPosition={food.colNum}
            yPosition={food.rowNum}
          />
        )}
      </div>
    </div>
  );
};

export default GameBoard;
