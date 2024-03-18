import type { MediaImage, MediaVideo } from './media';
import type { Permissions } from './permissions';

export type ChannelSectionVariant = 'videos' | 'bundles' | 'tags' | 'published';

export type ChannelSection = {
  title?: string;
  description?: string;
  variant: ChannelSectionVariant;
  bundleIds?: string[];
  tags?: string[];
  videos?: MediaVideo[];
};

export type Channel = {
  avatar?: MediaImage;
  description?: string;
  headerImage?: MediaImage;
  video?: MediaVideo;
  bundleOrder?: string[];
  sections?: ChannelSection[];
};

export type Producer = Channel & {
  id?: string;
  name: string;
  active?: boolean;
  attributes?: {
    alias?: string;
  };
  customerId?: string;
  groupId?: string;
  permissions?: Permissions;
  subscriptionId?: string;
  themeId?: string;
  userId?: string;
  media?: {
    storage?: number;
  };
  stripeAccountActive?: boolean;
};
