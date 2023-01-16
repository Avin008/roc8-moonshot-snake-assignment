const snakeCollisonWithWall = (
  grid: { colNum: number; rowNum: number }[],
  setGameOverFunc: React.Dispatch<
    React.SetStateAction<boolean>
  >
) => {
  if (
    grid[0].rowNum < 1 ||
    grid[0].rowNum > 20 ||
    grid[0].colNum < 1 ||
    grid[0].colNum > 30
  ) {
    setGameOverFunc(true);
  }
};

export default snakeCollisonWithWall;
