export type LastKeyPressed =
  | "ArrowUp"
  | "ArrowDown"
  | "ArrowLeft"
  | "ArrowRight";

export type GRID = {
  colNum: number;
  rowNum: number;
};

export type Food = {
  xPosition: number;
  yPosition: number;
};

export type GameOverScreenProps = {
  yourScore: number;
  topScore: number;
  resetGame: () => void;
};
