import SearchBox from "../../components/SearchBox";
import CadiContent from "./CadiContent";

const FindCadiPage = () => {
  return (
    <div>
      <div className="">
        <div className="title flex items-center h-[74px] bg-[#f1f2f4]">
          <h1 className="text-[18px] text-[#18191c] font-medium ml-[317px]">
            Find Candidates
          </h1>
          <div className="breadcrumbs text-sm ml-[1020px]">
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Cadidate</a>
              </li>
            </ul>
          </div>
        </div>
        <SearchBox />

        <div className="cadidates-content w-[1290px] mx-auto">
          <div className="flex mt-7 mb-5">
            <span className="font-thin mr-5">Popular Profession:</span>
            <p className="flex justify-center w-[97px] h-[26px] hover:bg-[#f1f2f4] text-[#5e6670] font-semibold">
              Accoutant
            </p>
            <p className="flex justify-center w-[97px] h-[26px] hover:bg-[#f1f2f4] text-[#5e6670] font-semibold">
              Actor
            </p>
            <p className="flex justify-center w-[97px] h-[26px] hover:bg-[#f1f2f4] text-[#5e6670] font-semibold">
              Accouđâtant
            </p>
          </div>
          {/* --- */}
          <div className="h-[0.5px] bg-[#edeef1]"></div>

          <div>
            <CadiContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindCadiPage;
