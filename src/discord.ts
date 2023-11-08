export type DiscordAction = 'create' | 'update' | 'delete';
export type DiscordCollection = 'groups' | 'assignments' | 'bundles';

export type DiscordReceive = {
  alias: string;
  action: DiscordAction;
  channelId: string;
  collection?: DiscordCollection;
  invite: string;
  lastMessageId: string;
  lastUserId: string;
  lastUpdated: number;
  members: string[];
  moderatorId: string;
};

export type DiscordGroup = {
  channelId: string;
  invite: string;
  lastMessageId: string;
  lastUpdated: number;
  lastUserId: string;
  members: string[];
  moderatorId: string;
};
