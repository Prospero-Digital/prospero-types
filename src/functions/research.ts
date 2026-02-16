import type { Research } from '../research';

export type ResearchCreateProjectRequest = {
  title: string;
  description?: string;
  userId: string;
  userName: string;
  groupId: string;
  groupName: string;
  producerId: string;
  producerName: string;
  producerAvatar?: string;
};

export type ResearchUpdateProjectRequest = Partial<Research>;

export type ResearchCreateProjectResponse = Promise<{
  id: string;
}>;

export type ResearchUpdateProjectResponse = Promise<Research>;
