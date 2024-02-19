import { Pokemon } from './pokemon';

export interface PokemonDetailsSchema {
    isLoading: boolean;
    error?: string;
    data?: Pokemon;
}
