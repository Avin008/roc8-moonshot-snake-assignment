import { MdDarkMode } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="h-14 dark:bg-slate-900 justify-between border-b absolute shadow-sm flex items-center px-8 left-0 right-0 top-0 border-gray-600">
      <span className="font-medium text-white text-3xl">
        Snakes
      </span>
      <ul>
        <li className="text-white cursor-pointer hover:bg-slate-700 p-1 rounded-md">
          <MdDarkMode size={25} />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
