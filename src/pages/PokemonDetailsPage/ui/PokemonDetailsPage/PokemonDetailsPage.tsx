import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { PokemonDetails } from 'entities/Pokemon';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page/Page';
import { VStack } from 'shared/ui/Stack';
import cls from './PokemonDetailsPage.module.scss';
import { PokemonDetailsPageHeader } from '../PokemonDetailsPageHeader/PokemonDetailsPageHeader';

interface PokemonDetailsPageProps {
    className?: string;
}

const PokemonDetailsPage = (props: PokemonDetailsPageProps) => {
    const { className } = props;
    const { id } = useParams<{ id: string }>();

    return (
        <Page className={classNames(cls.PokemonDetailsPage, {}, [className])}>
            <VStack gap="16" max>
                <PokemonDetailsPageHeader />
                <PokemonDetails id={id} />
            </VStack>
        </Page>
    );
};

export default memo(PokemonDetailsPage);
