import { useState } from "react";
// @ts-ignore
import useKeypress from "react-use-keypress";

type LastKeyPressed =
  | "ArrowUp"
  | "ArrowDown"
  | "ArrowLeft"
  | "ArrowRight";

const useControls = () => {
  const [lastKeyPressed, setLastKeyPressed] =
    useState<LastKeyPressed>("ArrowUp");

  useKeypress(
    ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
    (e: React.KeyboardEvent) => {
      if (
        e.key === "ArrowUp" &&
        lastKeyPressed !== "ArrowDown"
      ) {
        setLastKeyPressed("ArrowUp");
      } else if (
        e.key === "ArrowDown" &&
        lastKeyPressed !== "ArrowUp"
      ) {
        setLastKeyPressed("ArrowDown");
      } else if (
        e.key === "ArrowLeft" &&
        lastKeyPressed !== "ArrowRight"
      ) {
        setLastKeyPressed("ArrowLeft");
      } else if (
        e.key === "ArrowRight" &&
        lastKeyPressed !== "ArrowLeft"
      ) {
        setLastKeyPressed("ArrowRight");
      }
    }
  );
  return { lastKeyPressed, setLastKeyPressed };
};

export default useControls;
