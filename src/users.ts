import type { DashboardSearchParams, DashboardSearch } from './dashboard';

export type Guest = {
  createdAt: Date;
};

export type UserConsent = {
  [key: string]: {
    date: number;
    publishOn: number;
  };
};

export type UserFilters = {
  bundles?: DashboardSearch;
  assignments?: DashboardSearch;
  media?: DashboardSearchParams;
};

export type UserDiscord = {
  userId: string;
  channels?: Record<string, { updated: number; name: string }>;
};

export type User = {
  avatarUrl?: string;
  authenticated?: boolean;
  consent?: UserConsent;
  devices?: string[];
  discord?: UserDiscord;
  displayName?: string;
  email?: string;
  groupId?: string;
  groups?: string[];
  id?: string;
  mailchimp?: {
    [key: string]: boolean;
  };
  filters?: UserFilters;
  producerIds?: string[];
};
