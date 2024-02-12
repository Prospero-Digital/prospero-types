export type Permissions = {
  media?: {
    manage: boolean;
    level?: number;
    storage?: number;
    types?: {
      image?: boolean;
      video?: boolean;
      youtube?: boolean;
      vimeo?: boolean;
      googleMaps?: boolean;
      googleMapsDirections?: boolean;
    };
  };
  smartscripts?: {
    manage: boolean;
    level?: number;
    tokens?: number;
    builder?: {
      actors?: boolean;
      coreVariables?: boolean;
      inputVariables?: boolean;
      geolocation?: boolean;
      transparency?: boolean;
      frames?: boolean;
      liveScenes?: boolean;
      ['genre:pose']?: boolean;
      ['genre:mpaper']?: boolean;
      ['genre:questionnaire']?: boolean;
    };
    sharing?: {
      weblink?: boolean;
      library?: boolean;
      channel?: boolean;
      user?: boolean;
    };
    sell?: boolean;
    sellPerc?: number;
    transfer?: boolean;
    chat?: boolean;
  };
  assignments?: {
    manage: boolean;
    level?: number;
    sharing?: {
      weblink?: boolean;
      user?: boolean;
    };
    chat?: boolean;
  };
  groups?: {
    manage: boolean;
    max?: number;
    members?: boolean;
    level?: number;
  };
  admin?: {
    manage: boolean;
    channel?: boolean;
    chat?: boolean;
    analytics?: boolean;
    subscription?: boolean;
    stripe?: boolean;
    superadmin?: boolean;
    permissions?: boolean;
    library?: boolean;
  };
  [key: string]: any;
};
