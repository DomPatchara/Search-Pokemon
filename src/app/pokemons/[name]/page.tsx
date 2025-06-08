import Loading from "@/components/loading";
import ClientPokemon from "./clientPokemon";
import { Suspense } from "react";
import { GET_ALL_POKEMONS } from "@/queries/getPokemons";
import client from "@/lib/apolloClient";
import { GetPokemonsData, GetPokemonVars } from "../../../../types";


// Prebuild Dynamic Params [name]
export async function generateStaticParams() {
  const { data } = await client.query<GetPokemonsData, GetPokemonVars>({
    query: GET_ALL_POKEMONS,
    variables: { first: 151 },
  });

  const pokemons = data?.pokemons || [];

  console.log("all pokemons generate :", pokemons);

  return pokemons.map((p) =>({ name: p.name }))
}


interface PokemonNameProps {
  params: Promise<{ name: string }>;
}
const PokemonPage = async ({ params }: PokemonNameProps) => {
  const { name } = await params;

  console.log("param", name);

  return (
    <Suspense fallback={<Loading/>}>
      <ClientPokemon name={name} />
    </Suspense>
  );
};

export default PokemonPage;
