import type Stripe from 'stripe';

export type WebhookAction =
  | 'created'
  | 'updated'
  | 'deleted'
  | 'paid'
  | 'upcoming';

export type WebhookDataProps = {
  id: string;
  subscription?: string;
  lines?: { data: Stripe.InvoiceItemUpdateParams[] };
  mode?: string;
  [key: string]: any;
};

export type Webhook = (
  data: { [key: string]: any },
  action: WebhookAction,
  stripe?: Stripe,
) => Promise<void>;

export type TransferData = {
  accountId: string;
  perc: number;
  price: number;
};
