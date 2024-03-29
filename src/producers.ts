import type { MediaImage, MediaVideo } from './media';
import type { Permissions } from './permissions';

export type ChannelSectionVariant =
  | 'videos'
  | 'bundles'
  | 'tag'
  | 'published'
  | 'overview';

export type ChannelSection = {
  title?: string;
  description?: string;
  headerImage?: MediaImage;
  video?: MediaVideo;
  avatar?: MediaImage;
  variant: ChannelSectionVariant;
  bundleIds?: string[];
  tag?: string;
  videoIds?: string[];
  id: string;
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
