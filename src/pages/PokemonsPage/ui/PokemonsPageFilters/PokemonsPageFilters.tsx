import { classNames } from 'shared/lib/classNames/classNames';
import {
    memo, useCallback, useEffect,
} from 'react';
import {
    PokemonSortField, PokemonSortSelector, PokemonType, PokemonTypeTabs, PokemonView, PokemonViewSelector,
} from 'entities/Pokemon';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import { SortOrder } from 'shared/types';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { getIdFromUrl } from 'shared/lib/getIdFromUrl/getIdFromUrl';
import { useNavigate } from 'react-router-dom';
import { fetchPokemonsList } from '../../model/services/fetchPokemonsList/fetchPokemonsList';
import cls from './PokemonsPageFilters.module.scss';
import {
    getPokemonsPageOrder, getPokemonsPageSearch,
    getPokemonsPageSort, getPokemonsPageType,
    getPokemonsPageView,
} from '../../model/selectors/pokemonsPageSelectors';
import { getPokemons, pokemonsPageActions } from '../../model/slices/pokemonsPageSlice';

interface PokemonsPageFiltersProps {
    className?: string;
}

export const PokemonsPageFilters = memo((props: PokemonsPageFiltersProps) => {
    const navigate = useNavigate();
    const pokemons = useSelector(getPokemons.selectAll);
    const { className } = props;
    const dispatch = useAppDispatch();
    const view = useSelector(getPokemonsPageView);
    // const sort = useSelector(getPokemonsPageSort);
    // const order = useSelector(getPokemonsPageOrder);
    const search = useSelector(getPokemonsPageSearch);
    const type = useSelector(getPokemonsPageType);

    const fetchData = useCallback(() => {
        dispatch(fetchPokemonsList({ replace: true }));
    }, [dispatch]);

    const findPokemon = () => {
        const pokemon = pokemons.find((pokemon) => pokemon.name === search);
        if (!pokemon) return;
        dispatch(pokemonsPageActions.setSearch(''));
        const pokemonId = getIdFromUrl(pokemon.url);
        navigate(`/pokemons/${pokemonId}`);
    };

    const debouncedFindPokemon = useDebounce(findPokemon, 500);

    const onChangeView = useCallback((view: PokemonView) => {
        dispatch(pokemonsPageActions.setView(view));
    }, [dispatch]);

    const onChangeSort = useCallback((newSort: PokemonSortField) => {
        dispatch(pokemonsPageActions.setSort(newSort));
        dispatch(pokemonsPageActions.setOffset(0));
        fetchData();
    }, [dispatch, fetchData]);

    // const onChangeOrder = useCallback((newOrder: SortOrder) => {
    //     dispatch(pokemonsPageActions.setOrder(newOrder));
    //     dispatch(pokemonsPageActions.setOffset(0));
    //     fetchData();
    // }, [dispatch, fetchData]);

    const onChangeSearch = useCallback(async (search: string) => {
        await dispatch(pokemonsPageActions.setSearch(search));
        await dispatch(pokemonsPageActions.setOffset(0));
    }, [dispatch]);

    const onChangeType = useCallback((value: PokemonType) => {
        dispatch(pokemonsPageActions.setType(value));
        dispatch(pokemonsPageActions.setOffset(0));
        fetchData();
    }, [dispatch, fetchData]);

    useEffect(() => {
        debouncedFindPokemon();
    }, [debouncedFindPokemon, pokemons, search]);

    return (
        <div className={classNames(cls.PokemonsPageFilters, {}, [className])}>
            <div className={cls.sortWrapper}>
                {/* <PokemonSortSelector */}
                {/*     order={order} */}
                {/*     sort={sort} */}
                {/*     onChangeOrder={onChangeOrder} */}
                {/*     onChangeSort={onChangeSort} */}
                {/* /> */}
                <PokemonViewSelector
                    view={view}
                    onViewClick={onChangeView}
                />
            </div>
            <Card className={cls.search}>
                <Input
                    onChange={onChangeSearch}
                    value={search}
                    placeholder="Search"
                />
            </Card>
            <PokemonTypeTabs
                value={type}
                onChangeType={onChangeType}
                className={cls.tabs}
            />
        </div>
    );
});
