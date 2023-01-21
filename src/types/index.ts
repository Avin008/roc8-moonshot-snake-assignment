export type LastKeyPressed =
  | "ArrowUp"
  | "ArrowDown"
  | "ArrowLeft"
  | "ArrowRight";

export type GRID = {
  colNum: number;
  rowNum: number;
};

export type FoodProps = {
  xPosition: number;
  yPosition: number;
};

export type GameOverScreenProps = {
  yourScore: number;
  topScore: number;
  resetGame: () => void;
};

export type NavbarProps = {
  darkMode: boolean;
  darkModeSetter: () => void;
};

export type ScoresProps = {
  playerScore: number;
  topScore: number;
};
