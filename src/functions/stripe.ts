import type Stripe from 'stripe';

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
  StripeConnectOnboardRequest,
  StripeConnectOnboardResponse,
  StripeDisconnectOnboardRequest,
};
