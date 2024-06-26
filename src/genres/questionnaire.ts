import type { Media } from '../media';

export type QuestionnaireQuestionType =
  | 'text'
  | 'textarea'
  | 'select'
  | 'checkboxGroup'
  | 'none';

export type QuestionnaireQuestion = {
  id?: string;
  colName?: string;
  label?: string;
  type?: QuestionnaireQuestionType;
  values?: string[];
  helperText?: string;
  media?: Media;
  genre?: string;
  optional?: boolean;
  grouped?: boolean;
};

export type QuestionnaireSection = {
  id?: string;
  label?: string;
  introduction?: string;
  questions: QuestionnaireQuestion[];
};

export type QuestionnaireScene = {
  id: string;
  title?: string;
  template: 'questionnaire';
  sections: QuestionnaireSection[];
};

export type QuestionnaireCue = {
  genreId?: string;
  status?: 'started' | 'ended';
};

export type QuestionnaireConfig = {
  sectionId?: string;
  hideOthers?: boolean;
};
