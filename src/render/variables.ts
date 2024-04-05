import {
  MediaImage,
  MediaVideo,
  MediaAudio,
  MediaGoogleMap,
  MediaGoogleMapDirections,
} from '../media';

export type VariableType =
  | 'text'
  | 'number'
  | 'bool'
  | 'image'
  | 'video'
  | 'audio'
  | 'googleMaps'
  | 'googleMapsDirections'
  | 'genres';

export type VariableValue =
  | string
  | number
  | boolean
  | MediaImage
  | MediaVideo
  | MediaAudio
  | MediaGoogleMap
  | MediaGoogleMapDirections;

export type Variable = {
  name: string;
  level: 'global' | 'actor' | 'user';
  varType:
    | 'text'
    | 'number'
    | 'bool'
    | 'image'
    | 'video'
    | 'audio'
    | 'googleMaps'
    | 'googleMapsDirections'
    | 'genres';
  initialValue?: number;
};
