type TransferApplyRequest = {
  transferCode: string;
  bundleId?: string;
  producerId: string;
  producerName: string;
  groupId: string;
  groupName: string;
  userId: string;
  collection: string;
};

type TransferApplyResponse = {
  error: string;
  docId: string;
};

export { TransferApplyRequest, TransferApplyResponse };
