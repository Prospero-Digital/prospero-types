import Stripe from 'stripe';
import { Producer } from '../producers';
import { User } from '../users';

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

export {
  SubscriptionsCheckRequest,
  SubscriptionsCheckResponse,
  SubscriptionsAddRequest,
  SubscriptionsAddResponse,
};
