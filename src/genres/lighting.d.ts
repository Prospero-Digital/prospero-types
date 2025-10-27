export type LightingScene = {
    id: string;
    title?: string;
    template: 'lighting';
    label?: string;
};
export type LightingCue = {
    genreId?: string;
    status?: 'started' | 'ended';
};
