import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Pokemon } from '../../types/pokemon';

export const fetchPokemonById = createAsyncThunk<
    Pokemon,
    string | undefined,
    ThunkConfig<string>
    >(
        'pokemonDetails/fetchPokemonById',
        async (pokemonId, thunkApi) => {
            const { extra, rejectWithValue } = thunkApi;

            if (!pokemonId) {
                throw new Error('');
            }

            try {
                const response = await extra.api.get<Pokemon>(`/pokemon/${pokemonId}`);

                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (e) {
                console.log(e);
                return rejectWithValue('error');
            }
        },
    );
