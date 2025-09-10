import type { MediaAudio, MediaUpload } from '../media';
import type { Node } from './nodes';

export type ActionType =
  | 'action'
  | 'actor'
  | 'soundtrack'
  | 'decision'
  | 'random'
  | 'variable'
  | 'jumpTo'
  | 'clear'
  | 'end';

type ActionDefaults = Node & {
  section: 'action';
};

type ActionActionTheme =
  | 'default'
  | 'message'
  | 'news'
  | 'videoCall'
  | 'status'
  | 'email'
  | 'toolbar';

export type ActionActionButtonVariant =
  | 'text'
  | 'outlined'
  | 'contained'
  | 'link';

export type ActionActionButtonColor =
  | 'alternate'
  | 'primary'
  | 'secondary'
  | 'warning'
  | 'info'
  | 'error'
  | 'success';

export type ActionAction = ActionDefaults & {
  type: 'action';
  text?: string;
  media?: MediaUpload;
  buttons?: {
    labels?: string;
    variant?: ActionActionButtonVariant;
    color?: ActionActionButtonColor;
    direction?: 'row' | 'column';
    hideCheckboxes?: boolean;
  };
  characterId?: string;
  position?: number;
  size?: 'small' | 'medium' | 'large';
  align?: 'left' | 'center' | 'right';
  invert?: boolean;
  sticky?: boolean;
  opacity?: number;
  blur?: boolean;
  theme?: ActionActionTheme;
  sfx?: boolean;
};

export type ActionActor = Omit<ActionAction, 'type'> & {
  type: 'actor';
  actors?: string[];
  includeRoot?: boolean;
  clear?: boolean;
};

export type ActionEnd = ActionDefaults & {
  type: 'end';
};

export type ActionJumpTo = ActionDefaults & {
  type: 'jumpTo';
  jumpId?: string;
};

export type ActionRandom = ActionDefaults & {
  type: 'random';
};

export type ActionSoundtrack = ActionDefaults & {
  type: 'soundtrack';
  mode: 'play' | 'stop';
  media?: MediaAudio;
  soundtrackId?: string;
  fade?: number;
  loop?: boolean;
};

export type ActionVariable = ActionDefaults & {
  type: 'variable';
  content?: string;
  variableId?: string;
  action?: 'set' | 'calculate' | 'reset' | 'request';
};

export type ActionDecision = Omit<ActionActor, 'type'> & {
  type: 'decision';
  display?: boolean;
};

export type Action =
  | ActionAction
  | ActionActor
  | ActionEnd
  | ActionJumpTo
  | ActionRandom
  | ActionSoundtrack
  | ActionDecision;
