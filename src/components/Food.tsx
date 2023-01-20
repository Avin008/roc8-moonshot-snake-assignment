const Food = ({
  xPosition,
  yPosition,
}: {
  xPosition: number;
  yPosition: number;
}) => {
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
