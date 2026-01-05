type ApiInitialiseRequest = {
  producerId: string;
};

type ApiInitialiseWithPrefixRequest = {
  producerId: string;
  prefix: string;
};

type ApiInitialiseWithPrefixResponse = {
  apiKey: string;
};

export {
  ApiInitialiseRequest,
  ApiInitialiseWithPrefixRequest,
  ApiInitialiseWithPrefixResponse,
};
