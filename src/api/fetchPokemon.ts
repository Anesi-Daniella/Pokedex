export type PokemonItem = {
  name: string;
  url: string;
  cardNumber: number;
};

export const fetchPokemon = async (): Promise<PokemonItem[]> =>
  await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then((response) => response.json())
    .then((data) =>
      data.results.map((pokemon: any, index: number) => ({
        ...pokemon,
        cardNumber: index + 1,
      }))
    );
