import { createSelector } from '@reduxjs/toolkit';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import PokemonIcon from 'shared/assets/icons/pokemon-20-20.svg';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(() => {
    const sidebarItemsList: SidebarItemType[] = [
        {
            path: RoutePath.pokemons,
            Icon: PokemonIcon,
            text: 'Pokemons',
        },
    ];

    return sidebarItemsList;
});
