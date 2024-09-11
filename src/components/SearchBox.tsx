import { Layers3 } from "lucide-react";
import { LuChevronDown, LuMapPin } from "react-icons/lu";

const SearchBox = () => {
  return (
    <div className="mt-5">
      <div className="w-full max-w-[1290px] h-[74px] mx-auto border border-[#edeef1] rounded-lg">
        <form className="flex flex-col lg:flex-row items-center lg:space-x-4">
          {/* Select Profession */}
          <Layers3 width={70} className="text-[#0a65cb] ml-2" />
          <select className="w-full border-none focus:ring-0 focus:outline-none cursor-pointer ">
            <option disabled selected>
              <span className="text-left">Select Profession</span>
              <LuChevronDown className="text-[22px] text-[#a0a7b0]" />
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>

          <div className="hidden lg:block h-[74px] border-l border-[#edeef1] mx-4"></div>
          {/* map input */}
          <div className="flex items-center w-full lg:w-[390px] flex-shrink-0 mt-4 lg:mt-0">
            <div className="flex items-center w-full">
              <LuMapPin className="text-[#0a65cb] text-[22px] mr-2" />
              <input
                type="text"
                placeholder="Enter Location"
                className="w-full border-none focus:ring-0 focus:outline-none"
              />
            </div>
          </div>

          <div className="hidden lg:block h-[74px] border-l border-[#edeef1] mx-4"></div>

          {/* Submit Button */}
          <div className="flex items-center w-full mt-4 lg:mt-0">
            <button
              type="submit"
              className="px-4 py-2 w-full lg:w-[200px] h-[50px] font-bold bg-[#0854aa] text-white rounded-lg shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Search Candidates
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBox;
