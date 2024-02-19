import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { PokemonSortField, PokemonType } from 'entities/Pokemon';
import { SortOrder } from 'shared/types';
import { getPokemonsPageInited } from '../../selectors/pokemonsPageSelectors';
import { pokemonsPageActions } from '../../slices/pokemonsPageSlice';
import { fetchPokemonsList } from '../fetchPokemonsList/fetchPokemonsList';

export const initPokemonsPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
    >(
        'pokemonsPage/initPokemonsPage',
        async (searchParams, thunkApi) => {
            const { getState, dispatch } = thunkApi;
            const inited = getPokemonsPageInited(getState());

            if (!inited) {
                const orderFromUrl = searchParams.get('order') as SortOrder;
                const sortFromUrl = searchParams.get('sort') as PokemonSortField;
                const searchFromUrl = searchParams.get('search');
                const typeFromUrl = searchParams.get('type') as PokemonType;

                if (orderFromUrl) {
                    dispatch(pokemonsPageActions.setOrder(orderFromUrl));
                }
                if (sortFromUrl) {
                    dispatch(pokemonsPageActions.setSort(sortFromUrl));
                }
                if (searchFromUrl) {
                    dispatch(pokemonsPageActions.setSearch(searchFromUrl));
                }
                if (typeFromUrl) {
                    dispatch(pokemonsPageActions.setType(typeFromUrl));
                }

                dispatch(pokemonsPageActions.initState());
                dispatch(fetchPokemonsList({}));
            }
        },
    );
