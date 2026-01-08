type MediaRenameRequest = {
  mediaId: string;
  groupId?: string;
  userId: string;
  producerId?: string;
  level: number;
  name: string;
};

type MediaDeleteRequest = {
  mediaId: string;
  groupId?: string;
  userId: string;
  producerId?: string;
  level: number;
};

export type { MediaRenameRequest, MediaDeleteRequest };
