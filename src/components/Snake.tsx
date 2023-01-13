const Snake = ({
  xposition,
  yposition,
}: {
  xposition: number;
  yposition: number;
}) => {
  return (
    <div
      className="bg-black border border-blue-600"
      style={{
        gridColumnStart: xposition,
        gridRowStart: yposition,
      }}
    ></div>
  );
};

export default Snake;
