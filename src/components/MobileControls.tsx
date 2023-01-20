import {
  MdArrowBack,
  MdEast,
  MdArrowDownward,
  MdArrowUpward,
} from "react-icons/md";

const MobileControls = () => {
  return (
    <ul className="fixed sm:visible lg:hidden border-t shadow-md dark:border-gray-600 dark:text-white bottom-0 items-center flex justify-around left-0 right-0 dark:bg-slate-900 h-14">
      <li className="hover:cursor-pointer dark:hover:bg-slate-800 hover:bg-gray-200 dark:active:bg-slate-600 active:bg-gray-300 p-2 rounded-full">
        <MdArrowUpward size={25} />
      </li>
      <li className="hover:cursor-pointer dark:hover:bg-slate-800 hover:bg-gray-200 dark:active:bg-slate-600 active:bg-gray-300 p-2 rounded-full">
        <MdArrowDownward size={25} />
      </li>
      <li className="hover:cursor-pointer dark:hover:bg-slate-800 hover:bg-gray-200 dark:active:bg-slate-600 active:bg-gray-300 p-2 rounded-full">
        <MdArrowBack size={25} />{" "}
      </li>
      <li className="hover:cursor-pointer dark:hover:bg-slate-800 hover:bg-gray-200 dark:active:bg-slate-600 active:bg-gray-300 p-2 rounded-full">
        <MdEast size={25} />
      </li>
    </ul>
  );
};

export default MobileControls;
