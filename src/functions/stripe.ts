import type Stripe from 'stripe';

type StripeCreateSubscriptionCheckoutRequest = Partial<{
  metadata: Record<string, string>;
  customer_email: string;
  success_url: string;
  cancel_url: string;
  line_items: Stripe.Checkout.SessionCreateParams.LineItem[];
}>;

type StripeCreateSubscriptionCheckoutResponse = Stripe.Checkout.Session | null;

type StripeBasketCheckoutRequest = {
  line_items?: Stripe.Checkout.SessionCreateParams.LineItem[];
  customerId: string;
  email: string;
  redirect: string;
  origin: string;
};

type StripeBasketCheckoutResponse = { url: string | null } | null;

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

type ProductsUpdatePermissionsRequest = {
  ids?: string[];
  permissions?: Permissions;
};

type ProductsUpdateRequest = {
  price?: Stripe.PriceUpdateParams & { product: string };
  priceId?: string;
  product?: Stripe.ProductCreateParams | Stripe.ProductUpdateParams;
  productId?: string;
};

type StripeCreatePortalSessionRequest = {
  customer?: string;
  return_url?: string;
};
type StripeCreatePortalSessionResponse = string | null;

export type {
  ProductsUpdateRequest,
  ProductsUpdatePermissionsRequest,
  StripeBasketCheckoutRequest,
  StripeBasketCheckoutResponse,
  StripeCreatePortalSessionRequest,
  StripeCreatePortalSessionResponse,
  StripeCreateSubscriptionCheckoutRequest,
  StripeCreateSubscriptionCheckoutResponse,
  StripeConnectOnboardRequest,
  StripeConnectOnboardResponse,
  StripeDisconnectOnboardRequest,
};
