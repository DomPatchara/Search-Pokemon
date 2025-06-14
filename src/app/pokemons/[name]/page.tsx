
import ClientPokemon from "./clientPokemon";
import { GET_ALL_POKEMONS, GET_POKEMON_NAME } from "@/queries/getPokemons";
import client from "@/lib/apolloClient";
import { GetPokemonsData, GetPokemonVars } from "../../../../types";

// SSG --- Prebuild Dynamic Params [name]
export async function generateStaticParams() {
  const { data } = await client.query<GetPokemonsData, GetPokemonVars>({
    query: GET_ALL_POKEMONS,
    variables: { first: 200 },
  });

  const pokemons = data?.pokemons || [];

  console.log("all pokemons generate :", pokemons);

  return pokemons.map((p) => ({ name: p.name }));
}

// Query data เตรียมไว้ล่วงหน้าจากที่ generate static name ไว้ทั้งหมด
interface PokemonNameProps {
  params: Promise<{ name: string }>;
}
const PokemonPage = async ({ params }: PokemonNameProps) => {
  const { name } = await params;

  const { data } = await client.query({
    query: GET_POKEMON_NAME,
    variables: { name },
  });

  const baseData = data.pokemon;

  console.log("param", baseData);

  return <ClientPokemon baseData={baseData} />;
};

export default PokemonPage;
