import type { Actor } from './actors';
import type { Character } from './characters';
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

export type RenderNode = Start | Scene | Action | Trigger;

export type SectionType = 'start' | 'scene' | 'action' | 'trigger';

export type Render = {
  actors: {
    [key: string]: Actor;
  };
  characters: {
    [key: string]: Character;
  };
  variables: {
    [key: string]: Variable;
  };
  genres: {
    [key: string]: GenreScene;
  };
  nodes: {
    [key: string]: RenderNode;
  };
  template?: boolean;
};
