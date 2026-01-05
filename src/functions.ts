import { Group, User, Producer, Smartscript, Bundle, Session, Permissions } from 'prospero-types';
import type Stripe from 'stripe';

export interface SubscriptionState {
  producerId: string;
  producerName: string;
  permissions: Permissions;
  userEmail: string;
  userId: string;
  userName?: string;
  [key: string]: any;
}

export type GroupMembersRsvpRequest = {
  groupId?: string;
  groupIds?: string[];
  accept: boolean;
  email: string;
};

export type GroupMembersRsvpResponse = Group[];

export type UsersSwitchAccountRequest = Partial<{
  userId: string;
  email: string;
  hasSwitched: boolean;
  groupId: string;
}>;

export type UsersSwitchAccountResponse = {
  token?: string;
  error?: string;
};

export type DiscordSendRequest = {
  action: 'create' | 'update' | 'delete';
  collection: string;
  moderatorId: string;
  name?: string;
};

export type UsersAuthRevokeResponse = {
  token?: string;
};

export type GetProducerSupportEmailRequest = {
  producerId: string;
};

export type GetProducerSupportEmailResponse = {
  email?: string;
};

export type StripeBasketCheckoutRequest = {
  line_items?: Stripe.Checkout.SessionCreateParams.LineItem[];
  customerId: string;
  email: string;
  redirect: string;
  origin: string;
};

export type StripeBasketCheckoutResponse = {
  url: string;
};

export type TokensAddHistoryRequest = {
  producerId: string;
  amount: number;
};

export type GroupsUserLoadResponse = {
  currentGroup?: Group;
  allGroups?: Group[];
  subscription?: SubscriptionState;
};

export type MediaRenameRequest = {
  mediaId: string;
  groupId?: string;
  userId: string;
  producerId?: string;
  level: number;
  name: string;
};

export type MediaDeleteRequest = {
  mediaId: string;
  groupId?: string;
  userId: string;
  producerId?: string;
  level: number;
};

export type ApiInitialiseRequest = {
  producerId: string;
};

export type ApiInitialiseWithPrefixRequest = {
  producerId: string;
  prefix: string;
};

export type ApiInitialiseWithPrefixResponse = {
  apiKey: string;
};

export type UsersAuthDeleteRequest = {
  id: string;
};

export type Participant = {
  id: string;
  name?: string;
  actor?: string;
};

export type SessionsAddParticipantRequest = {
  actorId?: string;
  user: Participant;
  sessionId: string;
};

export type SessionsFindIdByCodeRequest = {
  code: string;
};

export type SessionsFindIdByCodeResponse = {
  sessionId?: string;
  error?: string;
};

export type StripeCreateSubscriptionCheckoutRequest = {
  success_url: string;
  cancel_url: string;
  customer_email: string;
  line_items: { price: string; quantity: number }[];
  metadata: Record<string, string>;
};

export type StripeCreateSubscriptionCheckoutResponse = {
  url: string;
};

export type GroupsSendMessageRequest = {
  to: string[];
  subject: string;
  message: string;
  html: string;
};

export type GroupMembersInviteRequest = {
  subject: string;
  html: string;
  groupId: string;
  emails: string[];
};

export type StripeConnectOnboardRequest = {
  url: string;
  producerId: string;
  accountId?: string;
};

export type StripeConnectOnboardResponse = {
  url: string;
};

export type StripeDisconnectOnboardRequest = {
  accountId: string;
  producerId: string;
};

export type ProducerDeleteRequest = {
  docId: string;
};

export type SubscriptionsCheckRequest = {
  email: string;
};

export type SubscriptionsCheckResponse = {
  user?: User;
  producer?: Producer;
  customer?: Stripe.Customer;
};

export type SubscriptionsAddRequest = {
  email: string;
  name: string;
  origin: string;
  metadata: Record<string, string>;
  userId?: string;
  customerId?: string;
};

export type SubscriptionsAddResponse = string;

export type GeneratedFields = Partial<Smartscript & Bundle> & {
  render: string;
};

export type SmartscriptsCopyRequest = GeneratedFields & {
  docId: string;
};

export type SmartscriptsCopyResponse = {
  id: string;
};

export type TransferApplyRequest = {
  transferCode: string;
  bundleId?: string;
  producerId: string;
  producerName: string;
  groupId: string;
  groupName: string;
  userId: string;
};

export type TransferApplyResponse = {
  error: string;
  docId: string;
};

export type SmartscriptsImportRequest = {
  docId: string;
  bundleId?: string;
};

export type AssignmentsSyncVariablesRequest = {
  docId?: string;
  smartscriptIds?: string[];
  assignmentGroupId?: string;
};

export type SessionsFromStudentIdRequest = {
  studentId: string;
  groupId: string;
};

export type SessionsFromStudentIdResponse = Session[];

export type GroupMemberLeaveRequest = {
  groupId: string;
};

export type SessionsReassignRequest = {
  sessionId: string;
};
