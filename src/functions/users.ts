type UsersSwitchAccountRequest = Partial<{
  userId: string;
  email: string;
  hasSwitched: boolean;
  groupId: string;
}>;

type UsersSwitchAccountResponse = {
  token?: string;
  error?: string;
};

type UsersAuthRevokeResponse = {
  token?: string;
};

type UsersAuthDeleteRequest = {
  id: string;
};

export {
  UsersSwitchAccountRequest,
  UsersSwitchAccountResponse,
  UsersAuthRevokeResponse,
  UsersAuthDeleteRequest,
};
