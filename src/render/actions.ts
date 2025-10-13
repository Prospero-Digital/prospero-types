import type { Media, MediaAudio } from '../media';
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

export type ActionActionTheme =
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
  | 'default'
  | 'inherit'
  | 'alternate'
  | 'primary'
  | 'secondary'
  | 'warning'
  | 'info'
  | 'error'
  | 'success';

export type ActionAction = ActionDefaults & {
  align?: 'left' | 'center' | 'right';
  blur?: boolean;
  buttons?: {
    labels?: string;
    variant?: ActionActionButtonVariant;
    color?: ActionActionButtonColor;
    direction?: 'row' | 'column';
    hideCheckboxes?: boolean;
  };
  characterId?: string;
  datetime?: string;
  direction?: 'incoming' | 'outgoing';
  invert?: boolean;
  media?: Media;
  opacity?: number;
  position?: number;
  sfx?: boolean;
  size?: 'small' | 'medium' | 'large';
  sticky?: boolean;
  text?: string;
  title?: string;
  theme?: ActionActionTheme;
  type: 'action';
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
  action?: 'set' | 'calculate' | 'reset' | 'request' | 'toggle';
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
