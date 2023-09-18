import { FaSort } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { MdPersonAddAlt1 } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = ({ handlePdf, handleSort, handleSearch }) => {
  return (
    <div className=" bg-[#20303F] text-white">
      <div className="navbar container mx-auto">
        <div className="flex-1">
          <Link to={"/"} className="normal-case text-2xl font-semibold">
            Contacts
          </Link>
        </div>
        <div className="flex-none gap-4">
          <div className="form-control">
            <input
              onBlur={handleSearch}
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto text-black"
            />
          </div>
          <div className="text-3xl flex gap-5">
            <FaSort
              onClick={handleSort}
              className=" hover:text-blue-500 cursor-pointer"
            />
            <FiDownload
              onClick={handlePdf}
              className=" hover:text-blue-500 cursor-pointer"
            />
            <Link to={"/add-contact"}>
              <MdPersonAddAlt1 className=" hover:text-blue-500 cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
