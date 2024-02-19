import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from 'widgets/Page/Page';
import { useSearchParams } from 'react-router-dom';
import { PokemonInfiniteList } from '../PokemonInfiniteList/PokemonInfiniteList';
import { PokemonsPageFilters } from '../PokemonsPageFilters/PokemonsPageFilters';
import { fetchNextPokemonsPage } from '../../model/services/fetchNextPokemonsPage/fetchNextPokemonsPage';
import { initPokemonsPage } from '../../model/services/initPokemonsPage/initPokemonsPage';
import { pokemonsPageReducer } from '../../model/slices/pokemonsPageSlice';
import cls from './PokemonsPage.module.scss';

interface PokemonsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    pokemonsPage: pokemonsPageReducer,
};

const PokemonsPage = (props: PokemonsPageProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextPokemonsPage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initPokemonsPage(searchParams));
    });

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames(cls.PokemonsPage, {}, [className])}
            >
                <PokemonsPageFilters />
                <PokemonInfiniteList className={cls.list} />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(PokemonsPage);
