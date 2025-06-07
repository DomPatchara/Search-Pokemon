
// Attack
export interface Attack  {
  name:string;
  type:string;
  damage: number
}

export interface Attacks {
  fast: Attack[]
  special: Attack[]
}

// Evolution
export interface Evolution {
    id: string
    name: string
    image: string
    maxCP: number
    maxHP: number
}


// Pokemon Data
export interface PokemonData {
    id: string
    name: string
    image: string
    maxCP: number
    maxHP: number
    types: string[]
    attacks: Attacks
    evolutions: Evolution[]
}

export interface GetPokemonsData  {
  pokemons: PokemonData[];
};

export interface GetPokemonData {
  pokemon: PokemonData; 
}


// Variable
export interface GetPokemonVars  {
  first: number;
};

export interface VarPokemonName {
  name: string;
}