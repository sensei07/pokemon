const regex = /\/(\d+)\/$/;

export const getIdFromUrl = (url: string) => {
    const match = url.match(regex);
    const id = match ? match[1] : null;
    return id;
};
