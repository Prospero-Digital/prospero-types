import type { DiscordGroup } from './discord';
import type { MediaImage } from './media';
import type { Permissions } from './permissions';
import { Channel } from './producers';

export type GroupVariant = 'group' | 'bundle' | 'assignment';

export type GroupUsageStatus = 'available' | 'exceeded' | 'nearingQuota';
export type GroupUsage = {
  storage?: number;
  tokens?: number;
  current?: number;
  total?: number;
  topup?: number;
  seats?: number;
  status?: {
    storage?: GroupUsageStatus;
    tokens?: GroupUsageStatus;
    seats?: GroupUsageStatus;
  };
};
export type GroupType =
  | 'education'
  | 'school'
  | 'class'
  | 'microsoft'
  | 'google';

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
  icon?: MediaImage;
  logo?: MediaImage;
  members: string[];
  children?: string[];
  permissions?: Permissions;
  url?: string;
  discord?: DiscordGroup;
  usage?: GroupUsage;
  themeId?: string;
  groupType?: GroupType;
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

export type GroupInvitation = {
  variant: GroupVariant;
  groupType?: GroupType;
};
