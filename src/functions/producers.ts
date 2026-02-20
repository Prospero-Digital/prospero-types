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

type GetProducerAiKeysRequest = {
  producerId: string;
};

type GetProducerAiKeysResponse = ProducerAi;

type GetProducerAiProviderRequest = {
  producerId: string;
};

type GetProducerAiProviderResponse = { apiProvider: ProducerAi['apiProvider'] };

export type {
  GetProducerSupportEmailRequest,
  GetProducerSupportEmailResponse,
  ProducerDeleteRequest,
  SaveProducerAiKeysRequest,
  GetProducerAiKeysRequest,
  GetProducerAiKeysResponse,
  GetProducerAiProviderRequest,
  GetProducerAiProviderResponse,
};
