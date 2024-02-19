import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    getPokemonsPageHasMore,
    getPokemonsPageIsLoading,
    getPokemonsPageOffset,
} from '../../selectors/pokemonsPageSelectors';
import { pokemonsPageActions } from '../../slices/pokemonsPageSlice';
import { fetchPokemonsList } from '../fetchPokemonsList/fetchPokemonsList';

export const fetchNextPokemonsPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
    >(
        'pokemonsPage/fetchNextPokemonsPage',
        async (_, thunkApi) => {
            const { getState, dispatch } = thunkApi;
            const hasMore = getPokemonsPageHasMore(getState());

            const offset = getPokemonsPageOffset(getState());
            const isLoading = getPokemonsPageIsLoading(getState());

            if (hasMore && !isLoading) {
                dispatch(pokemonsPageActions.setOffset(offset + 20));
                dispatch(fetchPokemonsList({}));
            }
        },
    );
