import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { HStack } from 'shared/ui/Stack';

interface PokemonDetailsPageHeaderProps {
    className?: string;
}

export const PokemonDetailsPageHeader = memo((props: PokemonDetailsPageHeaderProps) => {
    const { className } = props;
    const navigate = useNavigate();

    const onBackToList = useCallback(() => {
        navigate(RoutePath.pokemons);
    }, [navigate]);

    return (
        <HStack max justify="between" className={classNames('', {}, [className])}>
            <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
                Back to the list
            </Button>
        </HStack>
    );
});
