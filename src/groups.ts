import type { DiscordGroup } from './discord';
import type { Permissions as GroupPermissions } from './permissions';

export { GroupPermissions };

export type GroupUsage = {
  storage?: number;
  tokens?: number;
  seats?: number;
};

export type Group = {
  id?: string;
  attributes?: {
    alias?: string;
  };
  variant: 'group' | 'bundle' | 'assignment';
  parent?: string;
  name: string;
  producerId?: string;
  producerName?: string;
  members: string[];
  children?: string[];
  permissions?: Permissions;
  url?: string;
  discord?: DiscordGroup;
};

export type GroupPrivate = Group & {
  subject?: string;
  message?: string;
  declined?: string[];
  notify?: boolean;
  html?: string;
};
