import { Food } from "../types";

const Food = ({ xPosition, yPosition }: Food) => {
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
