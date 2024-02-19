import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Pokemons, PokemonType } from 'entities/Pokemon';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';
import {
    getPokemonsPageLimit,
    getPokemonsPageOffset,
    getPokemonsPageOrder,
    getPokemonsPageSearch,
    getPokemonsPageType,
} from '../../selectors/pokemonsPageSelectors';

interface FetchPokemonsListProps {
    replace?: boolean;
}

export const fetchPokemonsList = createAsyncThunk<
    Pokemons[],
    FetchPokemonsListProps,
    ThunkConfig<string>
    >(
        'pokemonsPage/fetchPokemonsList',
        async (props, thunkApi) => {
            const { extra, rejectWithValue, getState } = thunkApi;
            const limit = getPokemonsPageLimit(getState());
            const order = getPokemonsPageOrder(getState());
            const search = getPokemonsPageSearch(getState());
            const offset = getPokemonsPageOffset(getState());
            const type = getPokemonsPageType(getState());

            try {
                addQueryParams({ order, search, type });
                const response = await extra.api.get<Pokemons[]>('/pokemon', {
                    params: {
                        limit,
                        offset,
                        type: type === PokemonType.ALL ? undefined : type,
                    },
                });

                if (!response.data) {
                    throw new Error();
                }

                // @ts-ignore
                return response.data.results;
            } catch (e) {
                return rejectWithValue('error');
            }
        },
    );
