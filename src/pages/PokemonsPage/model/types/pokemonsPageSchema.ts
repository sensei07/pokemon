import { EntityState } from '@reduxjs/toolkit';
import {
    Pokemons, PokemonView, PokemonSortField, PokemonType,
} from 'entities/Pokemon';
import { SortOrder } from 'shared/types';

export interface PokemonsPageSchema extends EntityState<Pokemons> {
    isLoading?: boolean;
    error?: string;
    // pagination
    page: number;
    offset: number
    limit: number;
    hasMore: boolean;
    // filters
    view: PokemonView;
    order: SortOrder;
    sort: PokemonSortField;
    search: string;
    type: PokemonType;
    pokemonsByType: any;
    showPokemonsByType: boolean

    _inited: boolean;
}
