import type { Media } from '../media';
import type { GenreConfig } from '../genres';
import type { Node } from './nodes';

export type SceneType = 'web' | 'custom' | 'live' | 'continue';

export type SceneDefaults = Node & {
  section: 'scene';
  title?: string;
};

export type SceneWeb = SceneDefaults & {
  type: 'web';
  url?: string;
};

export type SceneCustom = SceneDefaults & {
  type: 'custom';
  media?: Media;
  color?: string;
  fillScreen?: boolean;
};

export type SceneLive = SceneDefaults &
  GenreConfig & {
    type: 'live';
    genreId?: string;
  };

export type SceneContinue = SceneDefaults & {
  type: 'continue';
};

export type Scene = SceneWeb | SceneCustom | SceneLive | SceneContinue;
