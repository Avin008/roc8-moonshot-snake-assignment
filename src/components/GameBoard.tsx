import React, { useState } from "react";
import { Food, Scores, Snake } from "../components";
import { useInterval } from "usehooks-ts";
import { INITIAL_SNAKE_POSITION } from "../constants";
import {
  getRandomFoodPosition,
  snakeCollisonWithWall,
  grabFood,
  snakeCollisonWithBody,
} from "../utility";
import { useControls } from "../hooks";
import {
  moveSnakeDown,
  moveSnakeLeft,
  moveSnakeRight,
  moveSnakeUp,
} from "../utility/moveSnakeInDirections";

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
        setGrid(moveSnakeUp(grid));
      } else if (lastKeyPressed === "ArrowDown") {
        setGrid(moveSnakeDown(grid));
      } else if (lastKeyPressed === "ArrowLeft") {
        setGrid(moveSnakeLeft(grid));
      } else if (lastKeyPressed === "ArrowRight") {
        setGrid(moveSnakeRight(grid));
      }

      grabFood({
        grid,
        food,
        setDisplayFood,
        setFood,
        setGrid,
        setScore,
      });

      snakeCollisonWithWall(grid, setIsGameOver);

      snakeCollisonWithBody(grid, setIsGameOver, setGrid);
    },
    isGameOver ? null : 150
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
      <div className="dark:bg-slate-700 bg-gray-100 w-full h-full rounded-md grid grid-cols-30 grid-rows-20">
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
