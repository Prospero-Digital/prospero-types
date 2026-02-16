import type { MediaImage, MediaVideo } from './media';
import type { Permissions } from './permissions';

export type ProducerApi = {
  token: string;
  [prefix: string]: string;
};

export type ChannelSectionVariant =
  | 'videos'
  | 'bundles'
  | 'assignments'
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
  assignmentIds?: string[];
  tag?: string;
  videoIds?: { video: string; tags?: string[] }[];
  search?: boolean;
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

export type ProducerAi = {
  apiKey?: string;
  apiProvider?: 'openai' | 'google';
};

export type Producer = Channel & {
  id?: string;
  name: string;
  active?: boolean;
  attributes?: {
    alias?: string;
    orphaned?: boolean;
  };
  icon?: MediaImage;
  logo?: MediaImage;
  customerId?: string;
  groupId?: string;
  permissions?: Permissions;
  subscriptionId?: string;
  themeId?: string;
  support?: string;
  userId?: string;
  media?: {
    storage?: number;
  };
  stripeAccountActive?: boolean;
  stripeAccountId?: string;
};
