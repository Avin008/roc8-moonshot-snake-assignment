import { FoodProps } from "../types";

const Snake = ({ xPosition, yPosition }: FoodProps) => {
  return (
    <div
      className="dark:bg-indigo-500 bg-indigo-400 shadow-lg dark:border-white border-white border"
      style={{
        gridColumnStart: xPosition,
        gridRowStart: yPosition,
      }}
    ></div>
  );
};

export default Snake;
