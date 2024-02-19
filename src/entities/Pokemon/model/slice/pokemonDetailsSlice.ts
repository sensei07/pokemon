import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchPokemonById } from '../services/fetchPokemonById/fetchPokemonById';
import { Pokemon } from '../types/pokemon';
import { PokemonDetailsSchema } from '../types/pokemonDetailsSchema';

const initialState: PokemonDetailsSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const pokemonDetailsSlice = createSlice({
    name: 'pokemonDetails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPokemonById.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchPokemonById.fulfilled, (
                state,
                action: PayloadAction<Pokemon>,
            ) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchPokemonById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: pokemonDetailsActions } = pokemonDetailsSlice;
export const { reducer: pokemonDetailsReducer } = pokemonDetailsSlice;
