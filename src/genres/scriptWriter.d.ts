export type ScriptWriterScene = {
    id: string;
    title?: string;
    template: 'scriptWriter';
    actors?: string[];
    includeRoot?: boolean;
    characterNames?: string[];
    initialLines?: string[];
    maxLines?: number;
};
export type ScriptWriterCue = {
    genreId?: string;
    status?: 'started' | 'ended';
};
