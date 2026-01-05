import type Stripe from 'stripe';

type StripeCreateSubscriptionCheckoutRequest = {
  success_url: string;
  cancel_url: string;
  customer_email: string;
  line_items: { price: string; quantity: number }[];
  metadata: Record<string, string>;
};

type StripeCreateSubscriptionCheckoutResponse = {
  url: string;
};

type StripeBasketCheckoutRequest = {
  line_items?: Stripe.Checkout.SessionCreateParams.LineItem[];
  customerId: string;
  email: string;
  redirect: string;
  origin: string;
};

type StripeBasketCheckoutResponse = {
  url: string;
};

type StripeConnectOnboardRequest = {
  url: string;
  producerId: string;
  accountId?: string;
};

type StripeConnectOnboardResponse = {
  url: string;
};

type StripeDisconnectOnboardRequest = {
  accountId: string;
  producerId: string;
};

export {
  StripeBasketCheckoutRequest,
  StripeBasketCheckoutResponse,
  StripeCreateSubscriptionCheckoutRequest,
  StripeCreateSubscriptionCheckoutResponse,
  StripeConnectOnboardRequest,
  StripeConnectOnboardResponse,
  StripeDisconnectOnboardRequest,
};
