import type { Actor } from './actors';
import type { Variable } from './variables';
import type { Action } from './actions';
import type { Trigger } from './triggers';
import type { Scene } from './scenes';
import type { Node } from './nodes';
import type { GenreScene } from '../genres';

export type Start = Node & {
  section: 'start';
  type: 'start';
};

export type SectionType = 'start' | 'scene' | 'action' | 'trigger';

export type Render = {
  actors: {
    [key: string]: Actor;
  };
  variables: {
    [key: string]: Variable;
  };
  genres: {
    [key: string]: GenreScene;
  };
  nodes: {
    [key: string]: Start | Scene | Action | Trigger;
  };
};
