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

export {
  ApiInitialiseRequest,
  ApiInitialiseWithPrefixRequest,
  ApiInitialiseWithPrefixResponse,
};
