import type { UploadApiResponse } from 'cloudinary';

export type MediaUsedType = 'smartscripts' | 'assignments' | 'sessions';
export type MediaFileType = 'image' | 'video' | 'raw' | 'auto';
export type MediaUploadType = 'image' | 'video' | 'audio';

export type MediaResourceType =
  | MediaUploadType
  | 'youtube'
  | 'vimeo'
  | 'googleMaps'
  | 'googleMapsDirections';

export type MediaUsedIn = {
  [key: string]: {
    count: number;
    type: MediaUsedType;
  };
};

type MediaFile = Partial<Omit<UploadApiResponse, 'resource_type'>> & {
  resource_type: MediaResourceType;
  usedIn?: MediaUsedIn;
};

export type MediaStreamingProps = {
  controls?: boolean;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
};

export type MediaGoogleMapsProps = {
  satellite?: boolean;
  showMarker?: boolean;
  hideControls?: boolean;
  hideLabels?: boolean;
  viewOnly?: boolean;
  travelMode?: 'DRIVING' | 'WALKING' | 'BICYCLING' | 'TRANSIT' | 'line';
};

export type MediaImageCrop = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export type MediaImage = Omit<MediaFile, 'resource_type'> & {
  resource_type: 'image';
  crop?: MediaImageCrop;
};

export type MediaVideo = Omit<MediaFile, 'resource_type'> &
  MediaStreamingProps & {
    resource_type: 'video';
  };

export type MediaAudio = Omit<MediaFile, 'resource_type'> &
  MediaStreamingProps & {
    resource_type: 'video';
    is_audio: true;
  };

export type MediaUpload = MediaImage | MediaVideo | MediaAudio;

export type MediaYoutube = Omit<MediaFile, 'resource_type'> &
  MediaStreamingProps & {
    resource_type: 'youtube';
  };

export type MediaVimeo = Omit<MediaFile, 'resource_type'> &
  MediaStreamingProps & {
    resource_type: 'vimeo';
  };

export type MediaGoogleMapsLongLatLng = {
  latitude: number;
  longitude: number;
};

export type MediaGoogleMapsLatLng = {
  lat: number;
  lng: number;
};

export type LatLng = MediaGoogleMapsLatLng | MediaGoogleMapsLongLatLng;

export type MediaGoogleMap = MediaGoogleMapsProps & {
  resource_type: 'googleMaps';
  public_id: string;
  zoom?: number;
  center?: LatLng;
  marker?: LatLng;
  name?: string;
};

export type MediaGoogleMapDirections = MediaGoogleMapsProps & {
  resource_type: 'googleMapsDirections';
  public_id: string;
  from?: { latlng?: LatLng; name?: string };
  to?: { latlng?: LatLng; name?: string };
  travelMode?: 'DRIVING' | 'WALKING' | 'BICYCLING' | 'TRANSIT';
  path?: string;
  directions?: string;
};

export type Media =
  | MediaImage
  | MediaVideo
  | MediaAudio
  | MediaYoutube
  | MediaVimeo
  | MediaGoogleMap
  | MediaGoogleMapDirections;
