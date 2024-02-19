import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import {
    Pokemons, PokemonSortField, PokemonType, PokemonView,
} from 'entities/Pokemon';
import { POKEMONS_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { SortOrder } from 'shared/types';
import { PokemonsPageSchema } from '../types/pokemonsPageSchema';
import { fetchPokemonsList } from '../../model/services/fetchPokemonsList/fetchPokemonsList';
import { fetchPokemonsListByType } from '../../model/services/fetchPokemonsListByType/fetchPokemonsListByType';

const pokemonsAdapter = createEntityAdapter<Pokemons>({
    selectId: (pokemon) => pokemon.name,
});

export const getPokemons = pokemonsAdapter.getSelectors<StateSchema>(
    (state) => state.pokemonsPage || pokemonsAdapter.getInitialState(),
);

const pokemonsPageSlice = createSlice({
    name: 'pokemonsPageSlice',
    initialState: pokemonsAdapter.getInitialState<PokemonsPageSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        view: PokemonView.BIG,
        page: 1,
        offset: 0,
        hasMore: true,
        _inited: false,
        limit: 20,
        sort: PokemonSortField.CREATED,
        search: '',
        order: 'asc',
        type: PokemonType.ALL,
        pokemonsByType: undefined,
        showPokemonsByType: false,
    }),
    reducers: {
        setView: (state, action: PayloadAction<PokemonView>) => {
            state.view = action.payload;
            localStorage.setItem(POKEMONS_VIEW_LOCALSTORAGE_KEY, action.payload);
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setOffset: (state, action: PayloadAction<number>) => {
            state.offset = action.payload;
        },
        setOrder: (state, action: PayloadAction<SortOrder>) => {
            state.order = action.payload;
        },
        setSort: (state, action: PayloadAction<PokemonSortField>) => {
            state.sort = action.payload;
        },
        setType: (state, action: PayloadAction<PokemonType>) => {
            state.type = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        initState: (state) => {
            state.view = localStorage.getItem(POKEMONS_VIEW_LOCALSTORAGE_KEY) as PokemonView;
            state._inited = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPokemonsList.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;

                if (action.meta.arg.replace) {
                    pokemonsAdapter.removeAll(state);
                }
            })
            .addCase(fetchPokemonsList.fulfilled, (
                state,
                action,
            ) => {
                state.showPokemonsByType = false;
                state.isLoading = false;
                state.hasMore = action.payload.length >= state.limit;

                if (action.meta.arg.replace) {
                    pokemonsAdapter.setAll(state, action.payload);
                } else {
                    pokemonsAdapter.addMany(state, action.payload);
                }
            })
            .addCase(fetchPokemonsList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(fetchPokemonsListByType.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchPokemonsListByType.fulfilled, (state, action) => {
                state.showPokemonsByType = true;
                state.isLoading = false;
                state.pokemonsByType = action.payload;
            })
            .addCase(fetchPokemonsListByType.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const {
    reducer: pokemonsPageReducer,
    actions: pokemonsPageActions,
} = pokemonsPageSlice;
