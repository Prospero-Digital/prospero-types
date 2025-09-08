import type { ScriptWriterScene, ScriptWriterCue } from './scriptWriter';
import type { LightingScene, LightingCue } from './lighting';
import type { MPaperScene, MPaperCue } from './mPaper';
import type { PoseScene, PoseCue, PoseConfig } from './pose';
import type {
  QuestionnaireScene,
  QuestionnaireCue,
  QuestionnaireConfig,
} from './questionnaire';
import type { WordPairsScene, WordPairsCue } from './wordPairs';

export type GenreType =
  | 'scriptWriter'
  | 'lighting'
  | 'mPaper'
  | 'pose'
  | 'questionnaire'
  | 'wordPairs';

export type GenreScene = { name: string } & (
  | ScriptWriterScene
  | LightingScene
  | MPaperScene
  | PoseScene
  | QuestionnaireScene
  | WordPairsScene
);

export type GenreCue =
  | ScriptWriterCue
  | LightingCue
  | MPaperCue
  | PoseCue
  | QuestionnaireCue
  | WordPairsCue;

export type GenreConfig = PoseConfig | QuestionnaireConfig;
