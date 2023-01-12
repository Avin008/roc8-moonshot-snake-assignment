const Snake = ({
  xPositionStart,
  xPositionEnd,
  yPositionStart,
  yPositionEnd,
}: {
  xPositionStart: number;
  xPositionEnd: number;
  yPositionStart: number;
  yPositionEnd: number;
}) => {
  return (
    <div
      className="bg-black"
      style={{
        gridColumnStart: xPositionStart,
        gridColumnEnd: xPositionEnd,
        gridRowStart: yPositionStart,
        gridRowEnd: yPositionEnd,
      }}
    ></div>
  );
};

export default Snake;
