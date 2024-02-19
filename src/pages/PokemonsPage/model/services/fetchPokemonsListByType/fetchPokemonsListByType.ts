import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Pokemons, PokemonsByType } from 'entities/Pokemon';

export const fetchPokemonsListByType = createAsyncThunk<
    PokemonsByType[],
    string | undefined,
    ThunkConfig<string>
    >(
        'pokemonsPage/fetchPokemonsListById',
        async (typeID, thunkApi) => {
            const { extra, rejectWithValue } = thunkApi;

            try {
                const response = await extra.api.get<Pokemons[]>(`/type/${typeID}`);

                if (!response.data) {
                    throw new Error();
                }

                // @ts-ignore
                return response.data.pokemon;
            } catch (e) {
                return rejectWithValue('error');
            }
        },
    );
