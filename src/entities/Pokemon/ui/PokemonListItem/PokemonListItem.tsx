import { classNames } from 'shared/lib/classNames/classNames';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { Card } from 'shared/ui/Card/Card';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { getIdFromUrl } from 'shared/lib/getIdFromUrl/getIdFromUrl';
import { PokemonView } from '../../model/consts/pokemonConsts';
import cls from './PokemonListItem.module.scss';
import {
    Pokemons,
} from '../../model/types/pokemon';

interface PokemonListItemProps {
    className?: string;
    pokemon: Pokemons;
    view: PokemonView;
    target?: HTMLAttributeAnchorTarget;
}

export const PokemonListItem = memo((props: PokemonListItemProps) => {
    const {
        className, pokemon, view, target,
    } = props;

    const id = getIdFromUrl(pokemon.url);

    if (view === PokemonView.BIG) {
        return (
            <div className={classNames(cls.PokemonListItem, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <Text text={pokemon.name} className={cls.title} />
                    <Text text={pokemon.url} className={cls.title} />
                    <div className={cls.footer}>
                        <AppLink
                            target={target}
                            to={RoutePath.pokemon_details + id}
                        >
                            <Button theme={ButtonTheme.OUTLINE}>
                                See more
                            </Button>
                        </AppLink>
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLink
            target={target}
            to={RoutePath.pokemon_details + id}
            className={classNames(cls.PokemonListItem, {}, [className, cls[view]])}
        >
            <Card className={cls.card}>
                <Text text={pokemon.name} className={cls.title} />
                <Text text={pokemon.url} className={cls.title} />
            </Card>
        </AppLink>
    );
});
