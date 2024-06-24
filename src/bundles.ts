import type { MediaImage, Media, MediaPdf } from './media';
import { type DateType } from './common';

export type BundleAttributes = Partial<{
  alias: string;
  channel: boolean;
  guest: boolean;
  group?: boolean;
  hasShared: number;
  library: boolean;
  members: number;
  prerelease: boolean;
  template: boolean;
}>;

export type Bundle = {
  id?: string;
  attributes?: BundleAttributes;
  bundleGroupId?: string;
  coverImage?: Media;
  createdAt: DateType;
  description?: string;
  docs?: MediaPdf[];
  expiry?: number;
  groupId: string;
  groupName?: string;
  notes?: string;
  price?: number;
  prices?: {
    [key: string]: number;
  };
  producerId: string;
  producerName?: string;
  producerAvatar?: MediaImage;
  smartscriptIds: string[];
  tags?: string[];
  themeId?: string;
  thumbnail?: Media;
  title: string;
  userId: string;
  userName?: string;
  video?: Media;
};
