import { memo } from 'react';
import { useSelector } from 'react-redux';
import { PokemonList } from 'entities/Pokemon';
import { Text } from 'shared/ui/Text/Text';
import { removeSecondKeyAndExtract } from 'shared/lib/removeSecondKeyAndExtract/removeSecondKeyAndExtract';
import { getPokemons } from '../../model/slices/pokemonsPageSlice';
import {
    getPokemonsListByType,
    getPokemonsPageError,
    getPokemonsPageIsLoading,
    getPokemonsPageView, getShowPokemonsByType,
} from '../../model/selectors/pokemonsPageSelectors';

interface PokemonInfiniteListProps {
    className?: string;
}

export const PokemonInfiniteList = memo((props: PokemonInfiniteListProps) => {
    const { className } = props;
    const pokemons = useSelector(getPokemons.selectAll);
    const pokemonsByType = removeSecondKeyAndExtract(useSelector(getPokemonsListByType));
    const showPokemonsByType = useSelector(getShowPokemonsByType);

    const isLoading = useSelector(getPokemonsPageIsLoading);
    const view = useSelector(getPokemonsPageView);
    const error = useSelector(getPokemonsPageError);

    if (error) {
        return <Text text="Error while loading pokemons" />;
    }

    return (
        <PokemonList
            isLoading={isLoading}
            view={view}
            pokemons={showPokemonsByType ? pokemonsByType : pokemons}
            virtualized={!showPokemonsByType}
            className={className}
        />
    );
});
