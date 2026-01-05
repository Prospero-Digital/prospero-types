type GetProducerSupportEmailRequest = {
  producerId: string;
};

type GetProducerSupportEmailResponse = {
  email?: string;
};

type ProducerDeleteRequest = {
  docId: string;
};

export {
  GetProducerSupportEmailRequest,
  GetProducerSupportEmailResponse,
  ProducerDeleteRequest,
};
