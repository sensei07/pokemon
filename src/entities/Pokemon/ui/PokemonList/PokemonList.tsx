import { classNames } from 'shared/lib/classNames/classNames';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { List, ListRowProps, WindowScroller } from 'react-virtualized';
import { PAGE_ID } from 'widgets/Page/Page';
import { PokemonView } from '../../model/consts/pokemonConsts';
import { PokemonListItemSkeleton } from '../PokemonListItem/PokemonListItemSkeleton';
import { PokemonListItem } from '../PokemonListItem/PokemonListItem';
import cls from './PokemonList.module.scss';
import { Pokemons } from '../../model/types/pokemon';

interface PokemonListProps {
    className?: string;
    pokemons: Pokemons[]
    isLoading?: boolean;
    target?: HTMLAttributeAnchorTarget;
    view?: PokemonView;
    virtualized?: boolean;
}

const getSkeletons = (view: PokemonView) => new Array(view === PokemonView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
        <PokemonListItemSkeleton className={cls.card} key={index} view={view} />
    ));

export const PokemonList = memo((props: PokemonListProps) => {
    const {
        className,
        pokemons,
        view = PokemonView.SMALL,
        isLoading,
        target,
        virtualized = true,
    } = props;

    const isBig = view === PokemonView.BIG;

    const itemsPerRow = isBig ? 1 : 3;
    const rowCount = isBig ? pokemons.length : Math.ceil(pokemons.length / itemsPerRow);

    const rowRender = ({
        index, isScrolling, key, style,
    }: ListRowProps) => {
        const items = [];
        const fromIndex = index * itemsPerRow;
        const toIndex = Math.min(fromIndex + itemsPerRow, pokemons.length);

        for (let i = fromIndex; i < toIndex; i += 1) {
            items.push(
                <PokemonListItem
                    pokemon={pokemons[i]}
                    view={view}
                    target={target}
                    key={`str${i}`}
                    className={cls.card}
                />,
            );
        }

        return (
            <div
                key={key}
                style={style}
                className={cls.row}
            >
                {items}
            </div>
        );
    };

    if (!isLoading && !pokemons.length) {
        return (
            <div className={classNames(cls.PokemonList, {}, [className, cls[view]])}>
                <Text size={TextSize.L} title="Pokemons are not found" />
            </div>
        );
    }

    return (
        // @ts-ignore
        <WindowScroller
            scrollElement={document.getElementById(PAGE_ID) as Element}
        >
            {({
                height,
                width,
                registerChild,
                onChildScroll,
                isScrolling,
                scrollTop,
            }) => (
                <div
                    // @ts-ignore
                    ref={registerChild}
                    className={classNames(cls.PokemonList, {}, [className, cls[view]])}

                >
                    {virtualized
                        ? (
                            // @ts-ignore
                            <List
                                height={height ?? 150}
                                rowCount={rowCount}
                                rowHeight={isBig ? 170 : 120}
                                rowRenderer={rowRender}
                                width={width ? width - 80 : 700}
                                autoHeight
                                onScroll={onChildScroll}
                                isScrolling={isScrolling}
                                scrollTop={scrollTop}
                            />
                        )
                        : (
                            pokemons.map((item) => (
                                <PokemonListItem
                                    pokemon={item}
                                    view={view}
                                    target={target}
                                    key={item.name}
                                    className={cls.card}
                                />
                            ))
                        )}
                    {isLoading && getSkeletons(view)}
                </div>
            )}
        </WindowScroller>
    );
});
