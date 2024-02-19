import { RouteProps } from 'react-router-dom';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ForbiddenPage } from 'pages/ForbiddenPage';
import { PokemonsPage } from 'pages/PokemonsPage';
import { PokemonDetailsPage } from 'pages/PokemonDetailsPage';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
}

export enum AppRoutes {
    POKEMONS = 'pokemons',
    POKEMON_DETAILS = 'pokemon_details',
    FORBIDDEN = 'forbidden',
    // last
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.POKEMONS]: '/pokemons',
    [AppRoutes.POKEMON_DETAILS]: '/pokemons/', // + :id
    [AppRoutes.FORBIDDEN]: '/forbidden',
    // last
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.POKEMONS]: {
        path: RoutePath.pokemons,
        element: <PokemonsPage />,
    },
    [AppRoutes.POKEMON_DETAILS]: {
        path: `${RoutePath.pokemon_details}:id`,
        element: <PokemonDetailsPage />,
    },
    [AppRoutes.FORBIDDEN]: {
        path: `${RoutePath.forbidden}`,
        element: <ForbiddenPage />,
    },
    // last
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
