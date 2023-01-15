import {
  MdArrowBack,
  MdEast,
  MdArrowDownward,
  MdArrowUpward,
} from "react-icons/md";

const MobileControls = () => {
  return (
    <ul className="fixed border-t shadow-md dark:border-gray-600 dark:text-white bottom-0 items-center flex justify-around left-0 right-0 dark:bg-slate-900 h-14">
      <li>
        <MdArrowUpward size={25} />
      </li>
      <li>
        <MdArrowDownward size={25} />
      </li>
      <li>
        <MdArrowBack size={25} />{" "}
      </li>
      <li>
        <MdEast size={25} />
      </li>
    </ul>
  );
};

export default MobileControls;
