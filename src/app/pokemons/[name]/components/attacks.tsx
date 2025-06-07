import React from "react";
import { Attacks } from "../../../../../types";

// useQuery + useSearchParam.get("evo")
interface AttackProps {
  data: Attacks;
}

const Attack = ({ data }: AttackProps) => {
  return (
    <div className="space-y-6 mt-5 w-full max-w-xl">
      <div className="flex flex-col gap-1 border rounded-2xl pb-3">
        <h1 className="text-center font-semibold text-white px-2 py-1 rounded-t-2xl bg-gradient-to-br from-indigo-400 to-indigo-800">
          Fast Attack
        </h1>

        {data.fast.map((item, index) => (
          <div key={index} className="flex justify-between px-10 rounded-xl">
            <span>{item.name}</span>
            <span>{item.damage}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-1 border rounded-2xl pb-3">
        <h1 className="text-center font-semibold text-white px-2 py-1 rounded-t-2xl bg-gradient-to-br from-indigo-400 to-indigo-800">
          Special Attack
        </h1>
        {data.special.map((item, index) => (
          <div key={index} className="flex justify-between  px-10 rounded-xl">
            <span>{item.name}</span>
            <span>{item.damage}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Attack;
