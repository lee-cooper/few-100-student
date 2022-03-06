export interface PokemonList {
  count: number;
  next: string;
  previous: string;
  results: PokemonListItem[];
}

export interface PokemonListItem {
  name: string;
  url: string;
}
