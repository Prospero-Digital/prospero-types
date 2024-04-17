import type { Media } from '../media';

export type MPaperContent = {
  text?: string;
  media?: Media;
  color?: string;
  fillScreen?: boolean;
};

export type MPaperScene = {
  id: string;
  title?: string;
  template: 'mPaper';
  content?: (string | MPaperContent)[];
  endWith?: 'button' | 'page';
  button?: string;
};

export type MPaperCue = {
  genreId?: string;
  status?: 'started' | 'ended';
};
