import type { DashboardSearch } from './dashboard';

export type UserConsent = {
  [key: string]: {
    date: number;
    publishOn: number;
  };
};

export type UserFilters = {
  bundles?: DashboardSearch;
  assignments?: DashboardSearch;
};

export type User = {
  avatarUrl?: string;
  authenticated?: boolean;
  consent?: UserConsent;
  devices?: string[];
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
