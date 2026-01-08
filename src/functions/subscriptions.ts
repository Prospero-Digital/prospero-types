import Stripe from 'stripe';
import { Producer } from '../producers';
import { User } from '../users';
import { Permissions } from '../permissions';

type SubscriptionsCheckRequest = {
  email: string;
};

type SubscriptionsCheckResponse = {
  user?: User;
  producer?: Producer;
  customer?: Stripe.Customer;
};

type SubscriptionsAddRequest = {
  email: string;
  name: string;
  origin: string;
  metadata: Record<string, string>;
  userId?: string;
  customerId?: string;
};

type SubscriptionsAddResponse = string;

type SubscriptionsCancelRequest = {
  subscriptionId: string;
  now?: boolean;
};

type SubscriptionsUpdatePermissionsRequest = {
  ids?: string[];
  permissions?: Permissions;
};

export type {
  SubscriptionsAddRequest,
  SubscriptionsAddResponse,
  SubscriptionsCancelRequest,
  SubscriptionsCheckRequest,
  SubscriptionsCheckResponse,
  SubscriptionsUpdatePermissionsRequest,
};
