import Loading from "@/components/loading";
import ClientPokemon from "./clientPokemon";
import { Suspense } from "react";

interface PokemonIdProps {
  params: Promise<{ name: string }>;
}
const PokemonPage = async ({ params }: PokemonIdProps) => {
  const { name } = await params;

  console.log("param", name);

  return (
    <Suspense fallback={<Loading/>}>
      <ClientPokemon name={name} />
    </Suspense>
  );
};

export default PokemonPage;
