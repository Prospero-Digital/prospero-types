import type { Group } from '../groups';
import { SubscriptionState } from '../subscriptions';

type GroupMembersRsvpRequest = {
  groupId?: string;
  groupIds?: string[];
  accept: boolean;
  email: string;
};

type GroupMembersRsvpResponse = Group[];

type GroupsUserLoadResponse = {
  currentGroup?: Group;
  allGroups?: Group[];
  subscription?: SubscriptionState;
};

type GroupsSendMessageRequest = {
  to: string[];
  subject: string;
  message: string;
  html: string;
};

type GroupMembersInviteRequest = {
  subject: string;
  html: string;
  groupId: string;
  emails: string[];
};

type GroupMemberLeaveRequest = {
  groupId: string;
};

export {
  GroupMembersRsvpRequest,
  GroupMembersRsvpResponse,
  GroupsUserLoadResponse,
  GroupsSendMessageRequest,
  GroupMembersInviteRequest,
  GroupMemberLeaveRequest,
};
