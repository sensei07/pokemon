import { StateSchema } from 'app/providers/StoreProvider';

export const getPokemonDetailsData = (state: StateSchema) => state.pokemonDetails?.data;
export const getPokemonDetailsIsLoading = (state: StateSchema) => state.pokemonDetails?.isLoading || false;
export const getPokemonDetailsError = (state: StateSchema) => state.pokemonDetails?.error;
