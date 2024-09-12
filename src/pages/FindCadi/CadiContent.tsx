import { LayoutGrid } from "lucide-react";
import { StretchHorizontal } from "lucide-react";
import ItemJobCard from "./ItemJobCard";
import { useState } from "react";

const CadiContent = () => {
  const [isStretched, setIsStretched] = useState(false);
  return (
    <div className="mt-5">
      <div className="switch-box-btn flex justify-center items-center space-x-1 w-[85px] h-[45px] border border-[#edeef1] rounded-lg float-right">
        <button
          className="flex justify-center items-center w-[32px] h-[32px] hover:bg-[#f1f2f4]"
          onClick={() => setIsStretched(false)}
        >
          <LayoutGrid width={19} />
        </button>
        <button
          className="flex justify-center items-center w-[32px] h-[32px] hover:bg-[#f1f2f4]"
          onClick={() => setIsStretched(true)}
        >
          <StretchHorizontal width={19} />
        </button>
      </div>

      <div className="content pt-16">
        <ItemJobCard isStretched={isStretched} />
      </div>
    </div>
  );
};

export default CadiContent;
