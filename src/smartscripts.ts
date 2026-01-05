import { Bundle } from './bundles';
import { SessionHistory } from './sessions';

export type Smartscript = {
  id?: string;
  title: string;
  userId: string;
  userName?: string;
  producerId: string;
  producerName?: string;
  groupId?: string;
  groupName?: string;
  bundleIds?: string[];
  description?: string;
  attributes?: {
    playCount?: number;
    extension?: boolean;
    participants?: number;
    target?: '_blank' | '_self';
  };
  notes?: string;
  createdAt: Date;
  thumbnail?: MediaImage;
  themeId?: string;
  transferCode?: string;
};

export type SmartscriptPrivate = {
  id?: string;
  title: string;
  userId: string;
  userName?: string;
  producerId: string;
  producerName?: string;
  groupId?: string;
  groupName?: string;
  render: string;
  advanced?: boolean;
  active?: SessionHistory['active'];
  variables?: SessionHistory['variables'];
  history?: SessionHistory[];
  completed?: boolean;
  previewModes?: Record<string, 'mobile' | 'laptop' | 'tablet'>;
  started?: boolean;
};

export type GeneratedFields = Partial<Smartscript & Bundle> & {
  render: string;
};

export type SmartscriptsCopyRequest = GeneratedFields & {
  docId: string;
};

export type SmartscriptsCopyResponse = {
  id: string;
};

export type SmartscriptsImportRequest = {
  docId: string;
  bundleId?: string;
};
