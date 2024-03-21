import type { DiscordGroup } from './discord';
import type { Permissions } from './permissions';
import { Channel } from './producers';

export type GroupVariant = 'group' | 'bundle' | 'assignment';

export type GroupUsageStatus = 'available' | 'exceeded' | 'nearingQuota';
export type GroupUsage = {
  storage?: number;
  tokens?: number;
  seats?: number;
  status?: {
    storage?: GroupUsageStatus;
    tokens?: GroupUsageStatus;
    seats?: GroupUsageStatus;
  };
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
  workspace?: string;
  usage?: GroupUsage;
  themeId?: string;
  groupType?: 'education' | 'school' | 'class' | 'microsoft' | 'google';
  bundleIds?: string[];
  sections?: Channel;
  subject?: string;
  message?: string;
  notify?: boolean;
  html?: string;
};

export type GroupPrivate = Group & {
  subject?: string;
  message?: string;
  declined?: string[];
  notify?: boolean;
  html?: string;
};
