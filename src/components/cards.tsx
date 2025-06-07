import React from "react";
import { PokemonData } from "../../types";
import Image from "next/image";
import Link from "next/link";
import { types } from "../../assets/assets";
import clsx from "clsx";
import ProgressCP from "./cp";

interface PokemonCardProp {
  data: PokemonData;
}

const Card = ({ data }: PokemonCardProp) => {
  return (
    <div className="w-full bg-white max-w-md border rounded-2xl p-5 shadow-xl hover:scale-105 duration-500 transition-all z-20">
      <Link href={`/pokemons/${data.name}`}>
        <div className="flex flex-col items-center justify-center gap-5">
          <h1 className="text-xl font-bold">{data.name}</h1>
          <div className="relative size-50 bg-gray-100">
            <Image
              src={data.image}
              fill
              alt="Image"
              className="object-center"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="flex items-center gap-2">
            <p className="text-sm text-black/90 font-medium"> { data.types.length === 1 ? "Type" : "Types"} </p>
            {data.types.map((type, index) => {
              const bgColor = types.find((t) => t.name === type)?.bgColor || "";
              return (
                <div
                  key={index}
                  className={clsx("font-semibold rounded-2xl text-white/90 px-3 py-1 ", bgColor)}
                >
                  {type}
                </div>
              );
            })}
          </div>

          <ProgressCP data={{ maxCP: data.maxCP }}/>
        </div>
      </Link>
    </div>
  );
};

export default Card;
