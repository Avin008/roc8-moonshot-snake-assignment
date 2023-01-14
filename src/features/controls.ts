const controls = (
  KeyboardEvent: React.KeyboardEvent,
  setLastKeyPressed: (
    lastKeyPressed:
      | "ArrowUp"
      | "ArrowDown"
      | "ArrowLeft"
      | "ArrowRight"
  ) => void,
  lastKeyPressed:
    | "ArrowUp"
    | "ArrowDown"
    | "ArrowLeft"
    | "ArrowRight"
) => {
  if (
    KeyboardEvent.key === "ArrowUp" &&
    lastKeyPressed !== "ArrowDown"
  ) {
    setLastKeyPressed("ArrowUp");
  } else if (
    KeyboardEvent.key === "ArrowDown" &&
    lastKeyPressed !== "ArrowUp"
  ) {
    setLastKeyPressed("ArrowDown");
  } else if (
    KeyboardEvent.key === "ArrowLeft" &&
    lastKeyPressed !== "ArrowRight"
  ) {
    setLastKeyPressed("ArrowLeft");
  } else if (
    KeyboardEvent.key === "ArrowRight" &&
    lastKeyPressed !== "ArrowLeft"
  ) {
    setLastKeyPressed("ArrowRight");
  }
};

export { controls };
