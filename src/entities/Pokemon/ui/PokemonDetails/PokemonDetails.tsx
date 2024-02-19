import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { HStack, VStack } from 'shared/ui/Stack';
import { fetchPokemonsListByType } from 'pages/PokemonsPage/model/services/fetchPokemonsListByType/fetchPokemonsListByType';
import { getIdFromUrl } from 'shared/lib/getIdFromUrl/getIdFromUrl';
import { Button } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { fetchPokemonById } from '../../model/services/fetchPokemonById/fetchPokemonById';
import { pokemonDetailsReducer } from '../../model/slice/pokemonDetailsSlice';
import cls from './PokemonDetails.module.scss';
import {
    getPokemonDetailsData,
    getPokemonDetailsError,
    getPokemonDetailsIsLoading,
} from '../../model/selectors/pokemonDetails';

interface PokemonDetailsProps {
    className?: string;
    id?: string;
}

const reducers: ReducersList = {
    pokemonDetails: pokemonDetailsReducer,
};

export const PokemonDetails = memo((props: PokemonDetailsProps) => {
    const { className, id } = props;
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getPokemonDetailsIsLoading);
    const pokemon = useSelector(getPokemonDetailsData);
    const error = useSelector(getPokemonDetailsError);

    const onTypeClick = (url: string) => {
        const typeId = getIdFromUrl(url);
        if (typeId) dispatch(fetchPokemonsListByType(typeId));
        navigate('/pokemons');
    };

    useEffect(() => {
        dispatch(fetchPokemonById(id));
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
            </>
        );
    } else if (error) {
        content = (
            <Text
                align={TextAlign.CENTER}
                title="Error while loading pokemon"
            />
        );
    } else {
        content = (
            <>
                <HStack justify="center" max className={cls.avatarWrapper}>
                    <Avatar
                        size={200}
                        src={pokemon?.sprites.back_default}
                        className={cls.avatar}
                    />
                </HStack>
                <VStack gap="4" max>
                    <Text
                        className={cls.title}
                        title={`Name: ${pokemon?.species.name}`}
                        size={TextSize.L}
                    />
                    <div className={cls.types}>
                        <Text
                            className={cls.title}
                            title="Types: "
                            size={TextSize.L}
                        />
                        {pokemon?.types.map((type:any) => (
                            <div key={type.type.name}>
                                {type?.type?.url
                                    ? <Button onClick={() => onTypeClick(type.type.url)}>{type.type.name}</Button>
                                    : type.type.name}
                            </div>
                        ))}
                    </div>
                    <Text
                        className={cls.title}
                        title={`Moves: ${pokemon?.moves.map((move: any) => move.move.name).join(', ')}`}
                        size={TextSize.M}
                    />
                </VStack>
            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <VStack gap="16" max className={classNames(cls.PokemonDetails, {}, [className])}>
                {content}
            </VStack>
        </DynamicModuleLoader>
    );
});
