import type { Variable } from './render/variables';
import type { Media } from './media';

export type SessionStatus = 'expired' | 'created' | 'started' | 'completed';

export type Session = {
  id?: string;
  assignmentId?: string;
  assignmentTitle?: string;
  assignmentThumbnail?: Media;
  bundleId?: string;
  bundleTitle?: string;
  bundleThumbnail?: Media;
  code: string;
  createdAt: Date;
  expires?: Date;
  expiry: number;
  description?: string;
  extension?: boolean;
  groupId: string;
  groupName?: string;
  producerId: string;
  producerName?: string;
  producerAvatar?: Media;
  notes?: string;
  smartscriptId: string;
  target?: '_blank' | '_self';
  thumbnail?: Media;
  status: SessionStatus;
  themeId?: string;
  userId: string;
  updatedAt?: Date;
  userName?: string;
  userEmail?: string;
  userAnonymous?: boolean;
  title: string;
  studentId?: string;
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
    [key: string]: string[];
  };
  variables: {
    [key: string]: any;
  };
};

export type SessionAllocatedActor = {
  name: string;
  members: string[];
  fulfilled?: boolean;
};

export type SessionParticipant = {
  name: string;
  avatar?: Media;
};

export type SessionShared = SessionHistory & {
  id?: 'root';
  assignmentId?: string;
  createdAt: Date;
  description?: string;
  allocatedActors: {
    [key: string]: SessionAllocatedActor;
  };
  calibrating?: boolean;
  code: string;
  completed: boolean;
  definitions: {
    [key: string]: Variable;
  };
  expires?: Date;
  expiry: number;
  extension?: boolean;
  history?: SessionHistory[];
  groupId: string;
  participants: {
    [key: string]: SessionParticipant;
  };
  playing: boolean;
  producerId: string;
  smartscriptId: string;
  started: boolean;
  studentId?: string;
  thumbnail?: Media;
  title: string;
  target?: '_blank' | '_self';
  variables?: {
    [key: string]: any;
  };
  updatedAt?: Date;
  userId: string;
  userName?: string;
  userEmail?: string;
};
