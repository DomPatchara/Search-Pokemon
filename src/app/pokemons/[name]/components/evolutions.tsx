"use client";

import React from "react";
import { Evolution } from "../../../../../types";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

interface EvolutionDataProps {
  data: Evolution[];
}
const Evolutions = ({ data }: EvolutionDataProps) => {
  const router = useRouter();
  const params = useParams();
  console.log("Current params:", params);

  const onUpgrade = (name: string) => {
    const param = new URLSearchParams();

    if (name) {
      param.set("evo", name);
    }

    router.push(`/pokemons/${params.name}/?${param}`);
  };

  return (
    data && (
      <div className="mt-5 flex items-center justify-end w-full max-w-xl gap-5 ">
        {/**Upgrade Button */}
        <button
          onClick={() => onUpgrade(data[0].name)}
          className="text-white font-semibold px-3 py-2 rounded-2xl cursor-pointer bg-gradient-to-br from-green-600 to-yellow-300 ring-1 ring-green-700 ring-offset-2 hover:from-yellow-500 hover:to-green-300 duration-1000 transition-colors"
        >
          Evolve Now !
        </button>
      </div>
    )
  );
};

export default Evolutions;
