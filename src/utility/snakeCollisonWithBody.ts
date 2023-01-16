const snakeCollisonWithBody = (
  grid: { colNum: number; rowNum: number }[],
  setIsGameOver: React.Dispatch<
    React.SetStateAction<boolean>
  >,
  setGrid: React.Dispatch<
    React.SetStateAction<
      {
        colNum: number;
        rowNum: number;
      }[]
    >
  >
) => {
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
};

export default snakeCollisonWithBody;
