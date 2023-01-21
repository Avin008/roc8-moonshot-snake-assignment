type StartGameButtonProps = {
  setGameStatus: React.Dispatch<
    React.SetStateAction<boolean>
  >;
};

const StartGameButton = ({
  setGameStatus,
}: StartGameButtonProps) => {
  return (
    <div className="border flex items-center justify-center absolute top-0 bottom-0 left-0 right-0 bg-black/70">
      <div>
        <button
          className="px-8 py-2 rounded-lg text-white bg-green-500"
          onClick={() => {
            setGameStatus(true);
          }}
        >
          Play
        </button>
      </div>
    </div>
  );
};

export default StartGameButton;
