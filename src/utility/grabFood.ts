import getRandomFoodPosition from "./getRandomFoodPosition";

type GrabFood = {
  grid: { colNum: number; rowNum: number }[];
  food: { colNum: number; rowNum: number };
  setFood: React.Dispatch<
    React.SetStateAction<{
      colNum: number;
      rowNum: number;
    }>
  >;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setDisplayFood: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  setGrid: React.Dispatch<
    React.SetStateAction<
      {
        colNum: number;
        rowNum: number;
      }[]
    >
  >;
};

const grabFood = ({
  grid,
  food,
  setDisplayFood,
  setFood,
  setGrid,
  setScore,
}: GrabFood) => {
  if (
    grid[0].colNum >= food.colNum &&
    grid[0].rowNum >= food.rowNum &&
    grid[0].colNum <= food.colNum &&
    grid[0].rowNum <= food.rowNum
  ) {
    setFood(getRandomFoodPosition(grid));
    setDisplayFood(false);
    setScore((prev) => prev + 1);
    const lastSlice = { ...[...grid].slice(-1) };
    setGrid((prev) => [
      ...prev,
      {
        colNum: lastSlice[0].colNum,
        rowNum: lastSlice[0].rowNum,
      },
    ]);
  }
};

export default grabFood;
