import React from "react";
import { ArrowRight } from "lucide-react";

interface ItemGridProps {
  isStretched: boolean;
}
const ItemJobCard: React.FC<ItemGridProps> = ({ isStretched }) => {
  return (
    <div
      className={
        isStretched ? "grid grid-cols-1 gap-4" : "grid grid-cols-3 gap-4"
      }
    >
      <div
        className={`rounded-lg transition-all duration-200 ${
          isStretched ? "w-[1290px] h-[155px]" : "w-[415px] h-[170px]"
        } flex justify-center items-center hover:border hover:border-[#0a65cc] hover:shadow-md`}
      >
        <div className="w-[340px] h-[110px] flex">
          <div className="avatar online">
            <div className="w-24 rounded-xl">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <span className="infor ml-4 space-y-2">
            <p className="name text-[#18191c] text-[16px] font-medium">
              J*** D**
            </p>
            <p className="posion text-[#767f8c] text-[14px] font-normal mt-2">
              Engineer
            </p>
            <p className="desciption text-[#18191c] text-[14px] font-normal">
              I am available
            </p>

            <div className="">
              <a
                className="flex no-underline text-[#0a65cc] text-[14px] font-normal "
                href="#"
              >
                View Resume{" "}
                <ArrowRight width={18} className="text-[#0a65cc] ml-2" />
              </a>
            </div>
          </span>
        </div>
      </div>

      <div
        className={`rounded-lg transition-all duration-300 ${
          isStretched ? "w-[1290px] h-[155px]" : "w-[415px] h-[170px]"
        } flex justify-center items-center hover:border hover:border-[#0a65cc] hover:shadow-md`}
      >
        <div className="w-[340px] h-[110px] flex">
          <div className="avatar online">
            <div className="w-24 rounded-xl">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <span className="infor ml-4 space-y-2">
            <p className="name text-[#18191c] text-[16px] font-medium">
              J*** D**
            </p>
            <p className="posion text-[#767f8c] text-[14px] font-normal mt-2">
              Engineer
            </p>
            <p className="desciption text-[#18191c] text-[14px] font-normal">
              I am available
            </p>

            <div className="">
              <a
                className="flex no-underline text-[#0a65cc] text-[14px] font-normal "
                href="#"
              >
                View Resume{" "}
                <ArrowRight width={18} className="text-[#0a65cc] ml-2" />
              </a>
            </div>
          </span>
        </div>
      </div>

      <div
        className={`rounded-lg transition-all duration-300 ${
          isStretched ? "w-[1290px] h-[155px]" : "w-[415px] h-[170px]"
        } flex justify-center items-center hover:border hover:border-[#0a65cc] hover:shadow-md`}
      >
        <div className="w-[340px] h-[110px] flex">
          <div className="avatar online">
            <div className="w-24 rounded-xl">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <span className="infor ml-4 space-y-2">
            <p className="name text-[#18191c] text-[16px] font-medium">
              J*** D**
            </p>
            <p className="posion text-[#767f8c] text-[14px] font-normal mt-2">
              Engineer
            </p>
            <p className="desciption text-[#18191c] text-[14px] font-normal">
              I am available
            </p>

            <div className="">
              <a
                className="flex no-underline text-[#0a65cc] text-[14px] font-normal "
                href="#"
              >
                View Resume{" "}
                <ArrowRight width={18} className="text-[#0a65cc] ml-2" />
              </a>
            </div>
          </span>
        </div>
      </div>

      <div
        className={`rounded-lg transition-all duration-200 ${
          isStretched ? "w-[1290px] h-[155px]" : "w-[415px] h-[170px]"
        } flex justify-center items-center hover:border hover:border-[#0a65cc] hover:shadow-md`}
      >
        <div className="w-[340px] h-[110px] flex">
          <div className="avatar online">
            <div className="w-24 rounded-xl">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <span className="infor ml-4 space-y-2">
            <p className="name text-[#18191c] text-[16px] font-medium">
              J*** D**
            </p>
            <p className="posion text-[#767f8c] text-[14px] font-normal mt-2">
              Engineer
            </p>
            <p className="desciption text-[#18191c] text-[14px] font-normal">
              I am available
            </p>

            <div className="">
              <a
                className="flex no-underline text-[#0a65cc] text-[14px] font-normal "
                href="#"
              >
                View Resume{" "}
                <ArrowRight width={18} className="text-[#0a65cc] ml-2" />
              </a>
            </div>
          </span>
        </div>
      </div>

      <div
        className={`rounded-lg transition-all duration-200 ${
          isStretched ? "w-[1290px] h-[155px]" : "w-[415px] h-[170px]"
        } flex justify-center items-center hover:border hover:border-[#0a65cc] hover:shadow-md`}
      >
        <div className="w-[340px] h-[110px] flex">
          <div className="avatar online">
            <div className="w-24 rounded-xl">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <span className="infor ml-4 space-y-2">
            <p className="name text-[#18191c] text-[16px] font-medium">
              J*** D**
            </p>
            <p className="posion text-[#767f8c] text-[14px] font-normal mt-2">
              Engineer
            </p>
            <p className="desciption text-[#18191c] text-[14px] font-normal">
              I am available
            </p>

            <div className="">
              <a
                className="flex no-underline text-[#0a65cc] text-[14px] font-normal "
                href="#"
              >
                View Resume{" "}
                <ArrowRight width={18} className="text-[#0a65cc] ml-2" />
              </a>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ItemJobCard;
