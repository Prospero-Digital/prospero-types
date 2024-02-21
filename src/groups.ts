import type { DiscordGroup } from './discord';
import type { Permissions } from './permissions';

export type GroupVariant = 'group' | 'bundle' | 'assignment';

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
  meta?: {
    [key: string]: any;
  };
  variant: GroupVariant;
  parent?: string;
  parents?: string[];
  name: string;
  producerId?: string;
  producerName?: string;
  members: string[];
  children?: string[];
  permissions?: Permissions;
  url?: string;
  discord?: DiscordGroup;
  teams?: string;
  usage?: GroupUsage;
  themeId?: string;
  groupType?: 'education' | 'school' | 'class';
  bundleIds?: string[];
};

export type GroupPrivate = Group & {
  subject?: string;
  message?: string;
  declined?: string[];
  notify?: boolean;
  html?: string;
};
