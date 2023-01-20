import { followHead } from "../utility";

const moveSnakeUp = (
  grid: { colNum: number; rowNum: number }[]
) => {
  return [...followHead(grid)].map((x, index) => {
    if (index === 0) {
      return { ...x, rowNum: x.rowNum - 1 };
    } else {
      return x;
    }
  });
};

const moveSnakeDown = (
  grid: { colNum: number; rowNum: number }[]
) => {
  return [...followHead(grid)].map((x, index) => {
    if (index === 0) {
      return { ...x, rowNum: x.rowNum + 1 };
    } else {
      return x;
    }
  });
};

const moveSnakeLeft = (
  grid: { colNum: number; rowNum: number }[]
) => {
  return [...followHead(grid)].map((x, index) => {
    if (index === 0) {
      return { ...x, colNum: x.colNum - 1 };
    } else {
      return x;
    }
  });
};

const moveSnakeRight = (
  grid: { colNum: number; rowNum: number }[]
) => {
  return [...followHead(grid)].map((x, index) => {
    if (index === 0) {
      return { ...x, colNum: x.colNum + 1 };
    } else {
      return x;
    }
  });
};

export {
  moveSnakeDown,
  moveSnakeUp,
  moveSnakeLeft,
  moveSnakeRight,
};
