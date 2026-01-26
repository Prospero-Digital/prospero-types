import { ProducerAi } from '../producers';

type GetProducerSupportEmailRequest = {
  producerId: string;
};

type GetProducerSupportEmailResponse = {
  email?: string;
};

type ProducerDeleteRequest = {
  docId: string;
};

type SaveProducerAiKeysRequest = ProducerAi & {
  producerId: string;
};

type SaveProducerAiKeysResponse = {
  success: boolean;
};

type GetProducerAiKeysRequest = {
  producerId: string;
};

type GetProducerAiKeysResponse = ProducerAi;

export type {
  GetProducerSupportEmailRequest,
  GetProducerSupportEmailResponse,
  ProducerDeleteRequest,
  SaveProducerAiKeysRequest,
  SaveProducerAiKeysResponse,
  GetProducerAiKeysRequest,
  GetProducerAiKeysResponse,
};
