import { Permissions } from './permissions';

export type SubscriptionStatus =
  | 'trialing'
  | 'past_due'
  | 'active'
  | 'incomplete'
  | 'unpaid';

export type SubscriptionState = {
  producerId: string;
  producerName: string;
  permissions: Permissions;
  userEmail: string;
  userId: string;
  userName?: string;
  [key: string]: any;
};
