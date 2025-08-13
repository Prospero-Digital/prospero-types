import type { MediaImage } from './media';

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
    target?: '_blank' | '_self' | '_parent' | '_top';
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
};
