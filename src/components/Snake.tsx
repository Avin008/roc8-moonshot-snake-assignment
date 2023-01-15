const Snake = ({
  xposition,
  yposition,
}: {
  xposition: number;
  yposition: number;
}) => {
  return (
    <div
      className="dark:bg-indigo-500 bg-indigo-400 shadow-lg dark:border-white border-white border"
      style={{
        gridColumnStart: xposition,
        gridRowStart: yposition,
      }}
    ></div>
  );
};

export default Snake;
