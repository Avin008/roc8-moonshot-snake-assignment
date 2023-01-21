import { FoodProps } from "../types";

const Food = ({ xPosition, yPosition }: FoodProps) => {
  return (
    <div
      className="bg-yellow-300 border-black border"
      style={{
        gridColumnStart: xPosition,
        gridRowStart: yPosition,
      }}
    ></div>
  );
};

export default Food;
