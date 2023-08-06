import { IoMdNotifications } from "react-icons/io";
import { MdAddTask } from "react-icons/md";

const Header = () => {
  return (
    <div className="sticky top-0 flex justify-between items-center backdrop-filter backdrop-blur-md  p-4 ">
      <div className="flex items-center">
        <MdAddTask className="text-2xl" />
        <h2 className=" text-xl md:text-2xl font-bold">taskease</h2>
      </div>

      <h3 className="text-2xl text-gray-800">
        <IoMdNotifications />
      </h3>
    </div>
  );
};

export default Header;
