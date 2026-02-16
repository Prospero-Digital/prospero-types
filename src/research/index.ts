import type { MediaImage, MediaVideo, MediaPdf } from '../media';
import type { DateType } from '../common';
import type { Evidence } from './evidence';
import type { Report } from './reports';

export type ResearchAttributes = Partial<{
  alias: string;
  channel: boolean;
  guest: boolean;
  group?: boolean;
  hasShared: number;
  library: boolean;
  members: number;
}>;

export type Research = {
  id?: string;
  attributes?: ResearchAttributes;
  context: string;
  coverImage?: MediaImage;
  createdAt: DateType;
  description?: string;
  docs?: MediaPdf[];
  evidence: Evidence[];
  groupId: string;
  groupName?: string;
  identity: string;
  notes?: string;
  producerAvatar?: MediaImage;
  producerId: string;
  producerName?: string;
  reports: Report[];
  researchGroupId?: string;
  smartscriptIds: string[];
  tags?: string[];
  targetOutcome: string;
  themeId?: string;
  thumbnail?: MediaImage;
  title: string;
  tone?: string;
  updatedAt?: DateType;
  userId: string;
  userName?: string;
  video?: MediaVideo;
};
