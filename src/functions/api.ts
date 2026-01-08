type ApiInitialiseRequest = {
  producerId: string;
};

type ApiInitialiseWithPrefixRequest = {
  producerId: string;
  prefix: string;
};

type ApiInitialiseWithPrefixResponse = Partial<{
  apiKey: string;
  apiKeyShort: string;
  token: string;
}>;

export type {
  ApiInitialiseRequest,
  ApiInitialiseWithPrefixRequest,
  ApiInitialiseWithPrefixResponse,
};
