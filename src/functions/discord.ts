export type DiscordSendRequest = {
  action: 'create' | 'update' | 'delete';
  collection: string;
  moderatorId: string;
  name?: string;
  channelId?: string;
};
