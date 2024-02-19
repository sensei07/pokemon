import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import ListIcon from 'shared/assets/icons/list-24-24.svg';
import TiledIcon from 'shared/assets/icons/tiled-24-24.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { PokemonView } from '../../model/consts/pokemonConsts';
import cls from './PokemonViewSelector.module.scss';

interface PokemonViewSelectorProps {
    className?: string;
    view: PokemonView,
    onViewClick?: (view: PokemonView) => void;
}

const viewTypes = [
    {
        view: PokemonView.SMALL,
        icon: TiledIcon,
    },
    {
        view: PokemonView.BIG,
        icon: ListIcon,
    },
];

export const PokemonViewSelector = memo((props: PokemonViewSelectorProps) => {
    const { className, view, onViewClick } = props;

    const onClick = (newView: PokemonView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={classNames(cls.PokemonViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    key={viewType.view}
                    theme={ButtonTheme.CLEAR}
                    onClick={onClick(viewType.view)}
                >
                    <Icon
                        Svg={viewType.icon}
                        className={classNames('', { [cls.notSelected]: viewType.view !== view })}
                    />
                </Button>
            ))}
        </div>
    );
});
