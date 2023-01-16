const followHead = (
  grid: { colNum: number; rowNum: number }[]
) => {
  const newGrid = [...grid];

  for (let x = newGrid.length - 2; x >= 0; x--) {
    newGrid[x + 1] = { ...newGrid[x] };
  }
  return newGrid;
};

export default followHead;
