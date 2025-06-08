"use client";

import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_POKEMONS } from "@/queries/getPokemons";
import Card from "@/components/cards";
import { GetPokemonsData, GetPokemonVars, PokemonData } from "../../../types";
import { useSearchParams } from "next/navigation";
import Loading from "@/components/loading";
import { FaArrowCircleDown } from "react-icons/fa";

const HomePage = () => {
  const itemsperPage = 12;
  const searchParams = useSearchParams();
  const searchValue = searchParams.get("name") || "";
  const [visibleCard, setVisibleCard] = useState<number>(itemsperPage);

  // GraphQL Query All Data
  const { loading, error, data } = useQuery<GetPokemonsData, GetPokemonVars>(
    GET_ALL_POKEMONS,
    {
      variables: {
        first: 151, //All data
      },
    }
  );

  if (loading) return <Loading />;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return null;

  const { pokemons } = data;
  console.log("all pokemons :", pokemons);

  // Filter ตาม Search "Name"
  const filterdata = pokemons.filter((p) =>
    p.name.toLowerCase().includes(searchValue?.toLowerCase())
  );

  const visiblePokemon = filterdata.slice(0, visibleCard);

  // Handle Load More Data
  const handleLoadMore = () => {
    setVisibleCard((prev) => prev + itemsperPage);
  };

  return (
    <>
      <main className="min-h-screen w-screen">
        <div className="px-8 sm:px-[8%] md:px-[10%] py-10">

          {/** If Filter not found!! */}
          {filterdata.length === 0 && (
            <p className="text-red-600 text-2xl text-center font-semibold">
              No Pokémon found !
            </p>
          )}

          {/** All Cards ( but Visible 12  ) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
            {visiblePokemon.map((item: PokemonData) => (
              <Card key={item.id} data={item} />
            ))}
          </div>

          {/** Load More Pokemon Cards  */}
          {visibleCard < filterdata.length && (
            <div className="flex justify-center mt-5">
              <button
                onClick={handleLoadMore}
                className="flex items-center group cursor-pointer  gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-800"
              >
                <FaArrowCircleDown
                  size={20}
                  className="group-hover:translate-y-1 duration-300 transition-all"
                />
                Load More
              </button>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default HomePage;
