import { Session, SessionParticipant } from '../sessions';

type SessionsAddParticipantRequest = {
  actorId?: string;
  user: SessionParticipant;
  sessionId: string;
};

type SessionsFindIdByCodeRequest = {
  code: string;
};

type SessionsFindIdByCodeResponse = {
  sessionId?: string;
  error?: string;
};

type SessionsFromStudentIdRequest = {
  studentId: string;
  groupId: string;
};

type SessionsFromStudentIdResponse = Session[];

type SessionsReassignRequest = {
  sessionId: string;
};

export {
  SessionsAddParticipantRequest,
  SessionsFindIdByCodeRequest,
  SessionsFindIdByCodeResponse,
  SessionsFromStudentIdRequest,
  SessionsFromStudentIdResponse,
  SessionsReassignRequest,
};
