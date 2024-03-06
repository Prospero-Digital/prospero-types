import type { DateType } from './common';
import type { Bundle } from './bundles';
import type { Smartscript } from './smartscripts';
import type { Media } from './media';

export type MsTeamsMeta = {
  deepLink?: string;
  channelName?: string;
  teamName?: string;
};

export type MsTeamsDoc = {
  id?: string;
  attributes: {
    live?: boolean;
    createdAt: DateType;
  };
  msteams: MsTeamsMeta;
  smartscript: Smartscript;
  userId: string;
  groupId: string;
  groupName: string;
  producerId: string;
  producerName: string;
  producerAvatar?: Media;
  bundle: Bundle;
};
