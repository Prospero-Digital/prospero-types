import type { Variable } from './render/variables';
import type { MediaImage } from './media';

export type Target = '_blank' | '_self';

export type SessionStatus = 'expired' | 'created' | 'started' | 'completed';

export type SessionGenerated = {
  bundleId: string;
  smartscriptTitle?: string;
};

export type Session = {
  id?: string;
  assignmentId?: string;
  assignmentTitle?: string;
  assignmentThumbnail?: MediaImage;
  bundleId?: string;
  bundleTitle?: string;
  bundleThumbnail?: MediaImage;
  bundleDescription?: string;
  code: string;
  completed?: boolean;
  createdAt: Date;
  expires?: Date;
  expiry: number;
  description?: string;
  extension?: boolean;
  groupId: string;
  groupName?: string;
  producerId: string;
  producerName?: string;
  producerAvatar?: MediaImage;
  notes?: string;
  smartscriptId: string;
  target?: Target;
  thumbnail?: MediaImage;
  status: SessionStatus;
  themeId?: string;
  userId: string;
  updatedAt?: Date;
  userName?: string;
  userEmail?: string;
  userAnonymous?: boolean;
  title: string;
  studentId?: string;
  generated?: SessionGenerated;
};

export type SessionPrivate = {
  id: 'root';
  groupId: string;
  producerId: string;
  title: string;
  render: string;
};

export type SessionHistory = {
  active: Record<string, string[]>;
  variables: Record<string, any>;
};

export type SessionAllocatedActor = {
  name: string;
  alias: string;
  members: string[];
  split?: number;
  specific?: number;
  fulfilled?: boolean;
};

export type SessionParticipant = {
  name?: string;
  avatar?: MediaImage;
  id: string;
  actor?: string;
};

export type SessionShared = SessionHistory & {
  id?: 'root';
  assignmentId?: string;
  createdAt: Date;
  description?: string;
  allocatedActors: Record<string, SessionAllocatedActor>;
  calibrating?: boolean;
  code: string;
  completed: boolean;
  definitions: Record<string, Variable>;
  expires?: Date;
  expiry: number;
  extension?: boolean;
  history?: SessionHistory[];
  groupId: string;
  generated?: SessionGenerated;
  participants: Record<string, SessionParticipant>;
  playing: boolean;
  producerId: string;
  smartscriptId: string;
  started: boolean;
  studentId?: string;
  thumbnail?: MediaImage;
  title: string;
  target?: Target;
  variables?: Record<string, any>;
  updatedAt?: Date;
  userId: string;
  userName?: string;
  userEmail?: string;
};

export type SessionState = Partial<
  Omit<SessionShared, 'active'> & {
    active: string[];
    previewModes?: Record<string, 'mobile' | 'laptop' | 'tablet'>;
  }
>;
