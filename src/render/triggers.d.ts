import type { GenreCue } from '../genres';
import type { Node } from './nodes';
export type TriggerType = 'click' | 'clickAnywhere' | 'duration' | 'outcome' | 'calculation' | 'geolocation' | 'liveOutput';
type DefaultTrigger = Node & {
    section: 'trigger';
};
export type TriggerClick = DefaultTrigger & {
    type: 'click';
    buttonId?: string;
};
export type TriggerClickAnywhere = DefaultTrigger & {
    type: 'clickAnywhere';
};
export type TriggerDuration = DefaultTrigger & {
    type: 'duration';
    duration?: number;
    display?: boolean;
};
export type TriggerOutcome = DefaultTrigger & Omit<TriggerDuration, 'type'> & {
    type: 'outcome';
    buttonId?: string;
};
export type TriggerCalculation = DefaultTrigger & {
    type: 'calculation';
    variableId?: string;
    content?: string;
};
export type TriggerGeolocation = DefaultTrigger & {
    type: 'geolocation';
    name?: string;
    location?: {
        center: {
            latitude: number;
            longitude: number;
        };
        zoom: number;
    };
    radius?: number;
    display?: boolean;
};
export type TriggerLiveOutput = DefaultTrigger & Partial<GenreCue> & {
    type: 'liveOutput';
};
export type Trigger = TriggerClick | TriggerClickAnywhere | TriggerDuration | TriggerOutcome | TriggerCalculation | TriggerGeolocation | TriggerLiveOutput;
export {};
