// this func is written only because of different request data, not to write various components or create extra conditions

export const removeSecondKeyAndExtract = (array: any) => {
    if (!array) return undefined;
    return array.map(({ pokemon, slot }: any) => ({
        name: pokemon.name,
        url: pokemon.url,
    }));
};
