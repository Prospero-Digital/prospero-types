import type { MediaImage, MediaVideo } from './media';
import type { Permissions } from './permissions';

export type Producer = {
  id?: string;
  name: string;
  active?: boolean;
  attributes?: {
    alias?: string;
  };
  avatar?: MediaImage;
  description?: string;
  headerImage?: MediaImage;
  customerId?: string;
  groupId?: string;
  permissions?: Permissions;
  subscriptionId?: string;
  themeId?: string;
  userId?: string;
  media?: {
    storage?: number;
  };
  bundleOrder?: string[];
  stripeAccountActive?: boolean;
  video?: MediaVideo;
};
