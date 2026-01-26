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
  researchGroupId?: string;
  coverImage?: MediaImage;
  createdAt: DateType;
  description?: string;
  docs?: MediaPdf[];
  groupId: string;
  groupName?: string;
  notes?: string;
  producerId: string;
  producerName?: string;
  producerAvatar?: MediaImage;
  smartscriptIds: string[];
  tags?: string[];
  themeId?: string;
  thumbnail?: MediaImage;
  title: string;
  userId: string;
  userName?: string;
  video?: MediaVideo;
  identity: string;
  url?: string;
  targetOutcome: string;
  context: string;
  evidence: Evidence[];
  reports: Report[];
};
