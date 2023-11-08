import type { Media } from './media';
import type { Permissions as ProducerPermissions } from './permissions';

export { ProducerPermissions };

export type Producer = {
  id?: string;
  name: string;
  active?: boolean;
  attributes?: {
    alias?: string;
  };
  avatar?: Media;
  customerId?: string;
  groupId?: string;
  permissions?: ProducerPermissions;
  subscriptionId?: string;
  userId?: string;
  media?: {
    storage?: number;
  };
};
