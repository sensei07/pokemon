import { StateSchema } from 'app/providers/StoreProvider';
import { PokemonSortField, PokemonType, PokemonView } from 'entities/Pokemon';

export const getPokemonsPageIsLoading = (state: StateSchema) => state.pokemonsPage?.isLoading || false;
export const getPokemonsPageError = (state: StateSchema) => state.pokemonsPage?.error;
export const getPokemonsPageView = (state: StateSchema) => state.pokemonsPage?.view || PokemonView.SMALL;
export const getPokemonsPageOffset = (state: StateSchema) => state.pokemonsPage?.offset || 0;
export const getPokemonsPageLimit = (state: StateSchema) => state.pokemonsPage?.limit || 9;
export const getPokemonsPageHasMore = (state: StateSchema) => state.pokemonsPage?.hasMore;
export const getPokemonsPageInited = (state: StateSchema) => state.pokemonsPage?._inited;
export const getPokemonsPageOrder = (state: StateSchema) => state.pokemonsPage?.order ?? 'asc';
export const getPokemonsPageSort = (state: StateSchema) => state.pokemonsPage?.sort ?? PokemonSortField.CREATED;
export const getPokemonsPageSearch = (state: StateSchema) => state.pokemonsPage?.search ?? '';
export const getPokemonsPageType = (state: StateSchema) => state.pokemonsPage?.type ?? PokemonType.ALL;
export const getPokemonsListByType = (state: StateSchema) => state.pokemonsPage?.pokemonsByType;
export const getShowPokemonsByType = (state: StateSchema) => state.pokemonsPage?.showPokemonsByType || false;
