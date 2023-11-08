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
