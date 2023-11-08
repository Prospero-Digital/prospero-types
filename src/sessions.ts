import { type Variable } from './render/variables';
import { type Media } from './media';

export type SessionStatus = 'created' | 'started' | 'completed';

export type Session = {
  id?: string;
  assignmentId?: string;
  assignmentTitle?: string;
  bundleId: string;
  bundleTitle: string;
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
  thumbnail?: Media;
  status: SessionStatus;
  userId: string;
  updatedAt?: Date;
  userName?: string;
  userEmail?: string;
  userAnonymous?: boolean;
  title: string;
  msUserId?: string;
  msUserName?: string;
};

export type SessionPrivate = {
  id?: string;
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

export type SessionShared = SessionHistory & {
  id?: string;
  assignmentId?: string;
  description?: string;
  allocatedActors: {
    [key: string]: {
      name: string;
      members: string[];
      fulfilled?: boolean;
    };
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
    [key: string]: {
      name: string;
      avatar?: Media;
    };
  };
  playing: boolean;
  producerId: string;
  smartscriptId: string;
  started: boolean;
  thumbnail?: Media;
  title: string;
  updatedAt?: Date;
  userId: string;
  userName?: string;
};
