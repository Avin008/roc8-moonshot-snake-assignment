import React, { useState } from "react";
import {
  Food,
  GameOverScreen,
  Scores,
  Snake,
  StartGameButton,
} from "../components";
import {
  getRandomFoodPosition,
  snakeCollisonWithWall,
  grabFood,
  snakeCollisonWithBody,
  moveSnakeDown,
  moveSnakeLeft,
  moveSnakeRight,
  moveSnakeUp,
} from "../utility";
import { useInterval } from "usehooks-ts";
import { INITIAL_SNAKE_POSITION } from "../constants";
import { GRID, LastKeyPressed } from "../types";

const GameBoard = ({
  lastKeyPressed,
  setLastKeyPressed,
}: {
  lastKeyPressed: LastKeyPressed;
  setLastKeyPressed: React.Dispatch<
    React.SetStateAction<LastKeyPressed>
  >;
}) => {
  const [grid, setGrid] = useState<
    typeof INITIAL_SNAKE_POSITION
  >(INITIAL_SNAKE_POSITION);

  const [food, setFood] = useState<GRID>(
    getRandomFoodPosition(grid)
  );

  const [displayFood, setDisplayFood] =
    useState<boolean>(false);

  const [score, setScore] = useState<number>(0);
  const [gameStatus, setGameStatus] = useState(false);

  const [isGameOver, setIsGameOver] =
    useState<boolean>(false);

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

      snakeCollisonWithWall(grid, setIsGameOver, setGrid);

      snakeCollisonWithBody(grid, setIsGameOver, setGrid);
    },
    isGameOver ? null : gameStatus ? 200 : null
  );

  const resetGame = () => {
    setGrid(INITIAL_SNAKE_POSITION);
    setIsGameOver(false);
    setDisplayFood(false);
    setScore(0);
    setLastKeyPressed("ArrowUp");
  };

  useInterval(
    () => {
      setDisplayFood(true);
    },
    gameStatus && !isGameOver
      ? displayFood
        ? null
        : 3000
      : null
  );

  useInterval(
    () => {
      setFood(getRandomFoodPosition(grid));
    },
    isGameOver ? null : gameStatus ? 50000 : null
  );

  return (
    <div className="sm:w-[90%] md:mt-14  md:w-[60%] md:h-[65%] sm:h-[45%] lg:w-[40%] lg:h-[65%] relative">
      <Scores playerScore={score} topScore={100} />
      <div className="dark:bg-slate-700 bg-gray-100 w-full h-full rounded-md grid grid-cols-30 grid-rows-20">
        {grid.map((snakePosition) => (
          <Snake
            key={crypto.randomUUID()}
            xPosition={snakePosition.colNum}
            yPosition={snakePosition.rowNum}
          />
        ))}
        {displayFood && (
          <Food
            xPosition={food.colNum}
            yPosition={food.rowNum}
          />
        )}
      </div>
      {!gameStatus && (
        <StartGameButton setGameStatus={setGameStatus} />
      )}
      {isGameOver && (
        <GameOverScreen
          yourScore={score}
          topScore={100}
          resetGame={resetGame}
        />
      )}
    </div>
  );
};

export default GameBoard;
