import { GRID_SIZE } from "../constants";
import { getRandomGridPosition } from "../utility";

type SnakeGrid = { rowNum: number; colNum: number }[];
type FoodPosition = { colNum: number; rowNum: number };

const getRandomFoodPosition = (snakeGrid: SnakeGrid) => {
  const foodPosition: FoodPosition = {
    colNum: getRandomGridPosition(GRID_SIZE.colNum),
    rowNum: getRandomGridPosition(GRID_SIZE.rowNum),
  };

  let loop = true;

  while (loop) {
    if (
      snakeGrid.some(
        (x) =>
          x.colNum === foodPosition.colNum &&
          x.rowNum === foodPosition.rowNum
      )
    ) {
      foodPosition.rowNum = getRandomGridPosition(
        GRID_SIZE.rowNum
      );
      foodPosition.colNum = getRandomGridPosition(
        GRID_SIZE.colNum
      );
    } else {
      loop = false;
    }
  }
  return foodPosition;
};

export default getRandomFoodPosition;
