import type { MediaImage } from '../media';
import type { DateType } from '../common';
export type {
  ResearchEvidence,
  ResearchEvidenceType,
  ResearchEvidenceQuestionItem,
  ResearchEvidenceUiType,
  ResearchEvidenceAttributes,
  ResearchEvidenceQuestionOptions,
  ResearchEvidenceSession,
} from './evidence';
export type {
  ResearchReport,
  ResearchReportSection,
  ResearchReportSectionType,
  ResearchReportAttributes,
  ResearchReportSectionOptions,
} from './reports';
export type { ResearchQuestion } from './questions';

export type ResearchAttributes = Partial<{
  processing?: Record<string, boolean>;
  ready?: Record<string, boolean>;
  evidence?: number;
  reports?: number;
  alias?: string;
}>;

export type Research = {
  id?: string;
  attributes?: ResearchAttributes;
  context: string;
  createdAt: DateType;
  description: string;
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
