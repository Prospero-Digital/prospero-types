import { type Media } from './media';
import { type DateType } from './common';

export type BundleAttributes = Partial<{
  alias: string;
  channel: string;
  guest: boolean;
  hasShared: number;
  library: boolean;
  members: number;
  prerelease: boolean;
}>;

export type Bundle = {
  id?: string;
  attributes?: BundleAttributes;
  bundleGroupId?: string;
  coverImage?: Media;
  createdAt: DateType;
  description?: string;
  groupId: string;
  groupName?: string;
  producerId: string;
  producerName?: string;
  smartscriptIds: string[];
  thumbnail?: Media;
  title: string;
  userId: string;
  userName?: string;
  video?: Media;
};
