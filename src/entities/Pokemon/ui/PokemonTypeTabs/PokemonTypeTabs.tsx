import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback, useMemo } from 'react';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { PokemonType } from '../../model/consts/pokemonConsts';

interface PokemonTypeTabsProps {
    className?: string;
    value: PokemonType;
    onChangeType: (type: PokemonType) => void;
}

export const PokemonTypeTabs = memo((props: PokemonTypeTabsProps) => {
    const { className, value, onChangeType } = props;

    const typeTabs = useMemo<TabItem[]>(() => [
        {
            value: PokemonType.ALL,
            content: 'All pokemons',
        },
        {
            value: PokemonType.ELECTRIC,
            content: 'Electric',
        },
        {
            value: PokemonType.GROUND,
            content: 'Ground',
        },
        {
            value: PokemonType.WATER,
            content: 'Water',
        },
    ], []);

    const onTabClick = useCallback((tab: TabItem) => {
        onChangeType(tab.value as PokemonType);
    }, [onChangeType]);

    return (
        <Tabs
            tabs={typeTabs}
            value={value}
            onTabClick={onTabClick}
            className={classNames('', {}, [className])}
        />
    );
});
