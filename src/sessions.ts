import type { Variable } from './render/variables';
import type { MediaImage } from './media';

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
  target?: '_blank' | '_self';
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
  active: {
    [actorId: string]: string[];
  };
  variables: {
    [variableId: string]: any;
  };
};

export type SessionAllocatedActor = {
  name: string;
  members: string[];
  fulfilled?: boolean;
};

export type SessionParticipant = {
  name: string;
  avatar?: MediaImage;
};

export type SessionShared = SessionHistory & {
  id?: 'root';
  assignmentId?: string;
  createdAt: Date;
  description?: string;
  allocatedActors: {
    [actorId: string]: SessionAllocatedActor;
  };
  calibrating?: boolean;
  code: string;
  completed: boolean;
  definitions: {
    [variableId: string]: Variable;
  };
  expires?: Date;
  expiry: number;
  extension?: boolean;
  history?: SessionHistory[];
  groupId: string;
  generated?: SessionGenerated;
  participants: {
    [userId: string]: SessionParticipant;
  };
  playing: boolean;
  producerId: string;
  smartscriptId: string;
  started: boolean;
  studentId?: string;
  thumbnail?: MediaImage;
  title: string;
  target?: '_blank' | '_self';
  variables?: {
    [variableId: string]: any;
  };
  updatedAt?: Date;
  userId: string;
  userName?: string;
  userEmail?: string;
};
