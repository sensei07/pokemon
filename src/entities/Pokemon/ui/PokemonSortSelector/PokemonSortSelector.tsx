import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback, useMemo } from 'react';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { SortOrder } from 'shared/types';
import { PokemonSortField } from '../../model/consts/pokemonConsts';
import cls from './PokemonSortSelector.module.scss';

interface PokemonSortSelectorProps {
    className?: string;
    sort: PokemonSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: PokemonSortField) => void;
}

export const PokemonSortSelector = memo((props: PokemonSortSelectorProps) => {
    const {
        className, onChangeOrder, onChangeSort, order, sort,
    } = props;

    const orderOptions = useMemo<SelectOption[]>(() => [
        {
            value: 'asc',
            content: 'ask',
        },
        {
            value: 'desc',
            content: 'desc',
        },
    ], []);

    const sortFieldOptions = useMemo<SelectOption[]>(() => [
        {
            value: PokemonSortField.CREATED,
            content: 'sort by create data',
        },
        {
            value: PokemonSortField.TITLE,
            content: 'sort by name',
        },
        {
            value: PokemonSortField.VIEWS,
            content: 'sort by views',
        },
    ], []);

    const changeSortHandler = useCallback((newSort: string) => {
        onChangeSort(newSort as PokemonSortField);
    }, [onChangeSort]);

    const changeOrderHandler = useCallback((newOrder: string) => {
        onChangeOrder(newOrder as SortOrder);
    }, [onChangeOrder]);

    return (
        <div className={classNames(cls.PokemonSortSelector, {}, [className])}>
            <Select
                options={sortFieldOptions}
                label="Sort by"
                value={sort}
                onChange={changeSortHandler}
            />
            <Select
                options={orderOptions}
                label="by"
                value={order}
                onChange={changeOrderHandler}
                className={cls.order}
            />
        </div>
    );
});
