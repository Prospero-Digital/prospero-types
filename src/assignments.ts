import type { Variable } from './render/variables';
import type { MediaImage } from './media';
import type { DateType as Date } from './common';

type CsvExport = {
  order: string[];
};

export type AssignmentExportTypes = 'csv';

export type AssignmentExport = Partial<{ [key: string]: any }> &
  Partial<CsvExport> & {
    type?: AssignmentExportTypes;
  };

export type Assignment = {
  id?: string;
  title: string;
  userId: string;
  userName?: string;
  producerId: string;
  producerName: string;
  smartscriptIds: string[];
  groupId: string;
  groupName: string;
  members?: number;
  description?: string;
  attributes?: {
    alias?: string;
    published?: boolean;
    link?: boolean;
  };
  createdAt?: Date;
  deadline?: Date;
  thumbnail?: MediaImage;
  assignmentGroupId?: string;
  export?: AssignmentExport;
};

export type AssignmentProgressMembers = {
  [key: string]: {
    email?: string;
    name?: string;
    updatedAt: Date;
  };
};

export type AssignmentProgressStatus = 'created' | 'started' | 'completed';

export type AssignmentProgressProgress = {
  [key: string]: {
    [key: string]: {
      status: AssignmentProgressStatus;
      [key: string]: any;
    };
  };
};

export type AssignmentProgressSmartscripts = {
  [key: string]: {
    title: string;
    variables: {
      [key: string]: Variable;
    };
  };
};

export type AssignmentProgress = {
  members: AssignmentProgressMembers;
  monitor: string[];
  progress: AssignmentProgressProgress;
  smartscriptIds: string[];
  smartscripts: AssignmentProgressSmartscripts;
};
