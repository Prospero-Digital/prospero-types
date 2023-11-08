export type WordPairsPairTypes = 'text' | 'textarea';

export type WordPairsScene = {
  id: string;
  title?: string;
  pairTypes: WordPairsPairTypes[];
  introTitle?: string;
  introBody?: string;
  label?: string;
  pairs: string[][];
};

export type WordPairsCue = {
  genreId?: string;
  status?: 'started' | 'ended';
};
