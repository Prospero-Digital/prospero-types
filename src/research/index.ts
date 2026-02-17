import type { MediaImage, MediaVideo, MediaPdf } from '../media';
import type { DateType } from '../common';
export type { ResearchEvidence } from './evidence';
export type { ResearchReport } from './reports';
export type { ResearchQuestion } from './questions';

export type ResearchAttributes = Partial<{
  processing?: boolean[];
  ready?: boolean[];
  evidence?: number;
  reports?: number;
}>;

export type Research = {
  id?: string;
  attributes?: ResearchAttributes;
  context: string;
  createdAt: DateType;
  description?: string;
  groupId: string;
  groupName?: string;
  notes?: string;
  producerAvatar?: MediaImage;
  producerId: string;
  producerName?: string;
  researchGroupId?: string;
  smartscriptIds: string[];
  summary?: string;
  teaser?: string;
  thumbnail?: MediaImage;
  title: string;
  tone?: string;
  updatedAt?: DateType;
  userId: string;
  userName?: string;
};
