import type { Variable } from './render/variables';
import type { MediaImage } from './media';
import type { DateType as Date } from './common';

type CsvExport = {
  order: string[];
};

export type AssignmentExportType = 'csv' | 'smartscript';

export type AssignmentExport = Partial<{ [key: string]: any }> &
  Partial<CsvExport> & {
    type?: AssignmentExportType;
  };

export type StudentIdVariant = 'username' | 'id';

export type Assignment = {
  id?: string;
  title: string;
  userId: string;
  userName?: string;
  producerId: string;
  producerName: string;
  smartscriptIds: string[];
  producerAvatar?: MediaImage;
  groupId: string;
  groupName: string;
  members?: number;
  description?: string;
  attributes?: {
    alias?: string;
    published?: boolean;
    link?: boolean;
    group?: boolean;
    channel?: boolean;
  };
  createdAt?: Date;
  deadline?: Date;
  thumbnail?: MediaImage;
  assignmentGroupId?: string;
  export?: AssignmentExport;
  studentIdVariant?: StudentIdVariant;
  parent?: string;
};

export type AssignmentProgressMembers = {
  [memberId: string]: {
    email?: string;
    name?: string;
    updatedAt: Date;
  };
};

export type AssignmentProgressStatus = 'created' | 'started' | 'completed';

export type AssignmentProgressProgress = {
  [smartscriptId: string]: {
    [memberId: string]: {
      status: AssignmentProgressStatus;
      variables: {
        [variableId: string]: any;
      };
    };
  };
};

export type AssignmentProgressSmartscripts = {
  [smartscriptId: string]: {
    title: string;
    variables: {
      [variableId: string]: Variable;
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
