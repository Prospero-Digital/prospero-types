import type { MediaImage, MediaVideo, MediaPdf } from '../media';
import type { DateType } from '../common';
import type { Evidence } from './evidence';
import type { Report } from './reports';

export type ResearchAttributes = Partial<{
  processing?: boolean;
  stage?: number;
}>;

export type Research = {
  id?: string;
  attributes?: ResearchAttributes;
  context: string;
  createdAt: DateType;
  description?: string;
  evidence: Evidence[];
  groupId: string;
  groupName?: string;
  notes?: string;
  producerAvatar?: MediaImage;
  producerId: string;
  producerName?: string;
  reports: Report[];
  researchGroupId?: string;
  smartscriptIds: string[];
  targetOutcome: string;
  teaser?: string;
  thumbnail?: MediaImage;
  title: string;
  tone?: string;
  updatedAt?: DateType;
  userId: string;
  userName?: string;
};
