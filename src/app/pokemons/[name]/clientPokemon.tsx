"use client";

import Image from "next/image";
import { useQuery } from "@apollo/client";
import { GetPokemonData, VarPokemonName } from "../../../../types";
import { GET_POKEMON_NAME } from "@/queries/getPokemons";
import { useSearchParams } from "next/navigation";
import { types } from "../../../../assets/assets.js";
import Loading from "../loading";
import Upgrade from "@/components/upgrade";
import NotFound from "../not-found";
import clsx from "clsx";

import ProgressCP from "@/components/cp";
import ProgressHP from "@/components/hp";
import Attack from "./components/attacks";
import Evolutions from "./components/evolutions";
import { Suspense } from "react";

const ClientPokemon = ({ name }: { name: string }) => {
  const searchParams = useSearchParams();
  const evoName = searchParams.get("evo"); // get evolution name --> ?evo="xxx"

  // Query Pokemon Data + ( EvoData )
  const { data, loading, error } = useQuery<GetPokemonData, VarPokemonName>(
    GET_POKEMON_NAME,
    {
      variables: { name: evoName ?? name },
    }
  );

  // Loading and error states
  if (evoName) {
    if (loading) return <Upgrade />;
  } else {
    if (loading) return <Loading />;
  }
  if (error) return <p>Error Fetching Data</p>;
  if (!data?.pokemon) return <NotFound />;

  // Destructuring data
  console.log("pokemon:", data);
  const { pokemon } = data;

  return (
    <main className="h-auto w-screen p-10">
      <div className="min-h-full flex flex-col md:flex-row items-center justify-center gap-5 pb-25 md:pb-0 md:gap-30">

        {/** Image */}
        <div className="relative w-2/3  aspect-square md:w-1/3 ">
          <Image
            priority
            fill
            src={pokemon.image}
            className="object-center"
            alt="image"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/** Types */}
          <div className="absolute top-0 right-0">
            <div className="flex gap-1 items-center">
              {pokemon.types.map((type, index) => {
                const bgColor = types.find((t) => t.name === type)?.bgColor || "";
                return (
                  <div
                    key={index}
                    className={clsx(
                      "text-sm font-medium rounded-2xl text-white px-4 py-1",
                      bgColor
                    )}
                  >
                    {type}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/**Info */}
        <div className="h-full w-full md:w-1/3 flex flex-col items-center justify-center">
          {/**Name */}
          <h1 className="text-[2rem] font-bold">{pokemon.name}</h1>

          {/**CP & HP */}
          <ProgressCP data={{ maxCP: pokemon.maxCP }} />
          <ProgressHP data={{ maxHP: pokemon.maxHP }} />
          

          {/**Attcak & Evolutions */}
          <Attack data={pokemon.attacks} />

          <Suspense fallback={<Loading />}>
            <Evolutions data={pokemon.evolutions} />
          </Suspense>
        </div>
      </div>
    </main>
  );
};

export default ClientPokemon;
