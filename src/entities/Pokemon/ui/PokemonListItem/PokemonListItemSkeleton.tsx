import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { PokemonView } from '../../model/consts/pokemonConsts';
import cls from './PokemonListItem.module.scss';

interface PokemonListItemSkeletonProps {
    className?: string;
    view: PokemonView;
}

export const PokemonListItemSkeleton = memo((props: PokemonListItemSkeletonProps) => {
    const { className, view } = props;

    if (view === PokemonView.BIG) {
        return (
            <div className={classNames(cls.PokemonListItem, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <Skeleton width={150} height={24} className={cls.title} />
                    <Skeleton width={350} height={24} className={cls.username} />
                    <Skeleton height={38} width={100} />
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(cls.PokemonListItem, {}, [className, cls[view]])}>
            <Card className={cls.card}>
                <Skeleton width={100} height={24} className={cls.title} />
                <Skeleton width={200} height={24} className={cls.username} />
            </Card>
        </div>
    );
});
