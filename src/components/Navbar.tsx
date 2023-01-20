import { MdDarkMode, MdLightMode } from "react-icons/md";

const Navbar = ({
  darkMode,
  darkModeSetter,
}: {
  darkMode: boolean;
  darkModeSetter: () => void;
}) => {
  return (
    <div className="h-14 dark:bg-slate-900 justify-between border-b absolute shadow-sm flex items-center px-8 left-0 right-0 top-0 border-gray-600">
      <span className="font-medium dark:text-white text-3xl">
        Snakes
      </span>
      <ul>
        <li
          className="dark:text-white cursor-pointer dark:hover:bg-slate-700 p-1 rounded-md"
          onClick={darkModeSetter}
        >
          {darkMode ? (
            <MdDarkMode size={25} />
          ) : (
            <MdLightMode size={25} />
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
