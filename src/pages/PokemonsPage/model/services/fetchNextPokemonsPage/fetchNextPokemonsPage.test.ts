import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchNextPokemonsPage } from './fetchNextPokemonsPage';
import { fetchPokemonsList } from '../fetchPokemonsList/fetchPokemonsList';

jest.mock('../fetchPokemonsList/fetchPokemonsList');

describe('fetchNextPokemonsPage.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchNextPokemonsPage, {
            pokemonsPage: {
                page: 2,
                offset: 20,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(fetchPokemonsList).toHaveBeenCalled();
    });
    test('fetchPokemonList not called', async () => {
        const thunk = new TestAsyncThunk(fetchNextPokemonsPage, {
            pokemonsPage: {
                page: 2,
                offset: 20,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: false,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchPokemonsList).not.toHaveBeenCalled();
    });
});
