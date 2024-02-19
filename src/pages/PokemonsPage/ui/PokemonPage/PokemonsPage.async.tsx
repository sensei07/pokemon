import { lazy } from 'react';

export const PokemonsPageAsync = lazy(
    () => import('./PokemonsPage'),
);
