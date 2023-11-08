export type MPaperScene = {
  id: string;
  title?: string;
  template: 'mPaper';
  content?: string;
  endWith?: 'button' | 'page';
  button?: string;
};

export type MPaperCue = {
  genreId?: string;
  status?: 'started' | 'ended';
};
