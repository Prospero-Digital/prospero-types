import type { Media, MediaAudio, MediaImage } from '../media';
export type PoseTrack = 'all' | 'hands' | 'head' | 'torso' | 'feet' | 'leftHand' | 'rightHand' | 'leftFoot' | 'rightFoot';
export type PoseCursor = 'circle' | 'leftHand' | 'rightHand';
export type PoseArea = {
    id: string;
    name?: string;
    areaIds: string[];
    image?: MediaImage;
    icon?: MediaImage;
    color?: string;
    text?: string;
    duration?: number;
    sound?: MediaAudio;
};
export type PoseScene = {
    id: string;
    title?: string;
    template: 'pose';
    track?: PoseTrack[];
    cursors?: PoseCursor[];
    cursorSize?: 'small' | 'medium' | 'large';
    areas?: PoseArea[];
};
export type PoseCue = {
    genreId?: string;
    status?: 'started' | string;
};
export type PoseConfig = {
    media?: Media;
    color?: string;
    fillScreen?: boolean;
};
