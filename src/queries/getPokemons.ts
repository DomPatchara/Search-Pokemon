import { gql } from "@apollo/client";

// Get all Pokemons
export const GET_ALL_POKEMONS = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      name
      image
      maxCP
      types
    }
  }
`;

// Get Pokemon by Name
export const GET_POKEMON_NAME = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      image
      maxCP
      maxHP
      types
      attacks {
        fast {
          name
          type
          damage
        }
        special {
          name
          type
          damage
        }
      }
      evolutions {
        id
        name
        image
      }
    }
  }
`;
