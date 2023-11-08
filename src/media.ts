import type { UploadApiResponse } from 'cloudinary';

export type MediaUsedType = 'smartscripts' | 'assignments';
export type MediaFileType = 'image' | 'video' | 'raw' | 'auto';
export type MediaUploadType = 'image' | 'video' | 'audio';

export type MediaResourceType =
  | MediaUploadType
  | 'youtube'
  | 'googleMaps'
  | 'googleMapsDirections';

type MediaFile = Partial<Omit<UploadApiResponse, 'resource_type'>> & {
  resource_type: MediaResourceType;
  usedIn?: {
    [key: string]: {
      count: number;
      type: MediaUsedType;
    };
  };
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

export type MediaImage = Omit<MediaFile, 'resource_type'> & {
  resource_type: 'image';
  crop?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
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

type LatLng = {
  lat: number;
  lng: number;
};

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
  directions?: string;
};

export type Media =
  | MediaImage
  | MediaVideo
  | MediaAudio
  | MediaYoutube
  | MediaGoogleMap
  | MediaGoogleMapDirections;
