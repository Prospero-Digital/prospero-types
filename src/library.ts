import type { Bundle } from './bundles';

export type LibraryLive = {
  bundleIds: string[];
  render: string;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};

export type LibraryDraft = LibraryLive & {
  isPublished: boolean;
};

export type LibraryAll = {
  [id: string]: Bundle;
};
