import { StateSchema } from 'app/providers/StoreProvider';
import {
    getPokemonDetailsData,
    getPokemonDetailsError,
    getPokemonDetailsIsLoading,
} from './pokemonDetails';

describe('pokemonDetails.test', () => {
    test('should return data', () => {
        const data = {
            id: '1',
            data: 'data',
        };
        const state: DeepPartial<StateSchema> = {
            pokemonDetails: {
                data,
            },
        };
        expect(getPokemonDetailsData(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state data', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getPokemonDetailsData(state as StateSchema)).toEqual(undefined);
    });
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            pokemonDetails: {
                error: 'error',
            },
        };
        expect(getPokemonDetailsError(state as StateSchema)).toEqual('error');
    });
    test('should work with empty state error', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getPokemonDetailsError(state as StateSchema)).toEqual(undefined);
    });
    test('should return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            pokemonDetails: {
                isLoading: true,
            },
        };
        expect(getPokemonDetailsIsLoading(state as StateSchema)).toEqual(true);
    });
    test('should work with empty state isLoading', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getPokemonDetailsIsLoading(state as StateSchema)).toEqual(false);
    });
});
