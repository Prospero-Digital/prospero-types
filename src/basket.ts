import type Stripe from 'stripe';

export type Basket = {
  line_items?: Stripe.Checkout.SessionCreateParams.LineItem[];
  updated_at?: number;
  userId: string;
  redirect?: string;
};

export type BasketCheckoutProps = Basket & {
  customerId: string;
  email: string;
  redirect: string;
  origin: string;
};
